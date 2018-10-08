
package com.liferay.blade.npm.angular447.portlet.service;

import java.util.Enumeration;
import java.util.HashMap;
import java.util.Locale;
import java.util.Map;
import java.util.ResourceBundle;
import java.util.concurrent.TimeUnit;

import com.google.common.cache.Cache;
import com.google.common.cache.CacheBuilder;
import com.liferay.portal.kernel.language.UTF8Control;
import com.liferay.portal.kernel.log.Log;
import com.liferay.portal.kernel.log.LogFactoryUtil;
import com.liferay.portal.kernel.util.Validator;

/**
 * @author JDA
 */
public class TranslationServiceImpl implements TranslationService {

	private Log _log = LogFactoryUtil.getLog(getClass());

	private Cache<String, Map<String, String>> cache;

	public TranslationServiceImpl() {
		cache = CacheBuilder.newBuilder().maximumSize(50) // Taille Max
			.expireAfterWrite(3, TimeUnit.HOURS).build();
	}

	private Map<String, String> loadTranslations(Locale locale) {

		_log.info("Loading Translations for [" + locale + "] ...");

		if (_log.isDebugEnabled()) {
			_log.debug("locale language= " + locale.getLanguage());
			_log.debug("locale country= " + locale.getCountry());
		}

		ResourceBundle labels = ResourceBundle.getBundle(
			"content/Language", locale, new UTF8Control());

		Enumeration<String> bundleKeys = labels.getKeys();

		Map<String, String> translationProperties = new HashMap<>();

		while (bundleKeys.hasMoreElements()) {
			String key = (String) bundleKeys.nextElement();
			String value = labels.getString(key);

			if (_log.isDebugEnabled()) {
				_log.debug("key = " + key + ", " + "value = " + value);
			}

			translationProperties.put(key, value);
		}

		_log.info(
			"[" + translationProperties.size() + "] labels for [" + locale +
				"] successfully loaded.");

		return translationProperties;

	}

	@Override
	public Map<String, String> getTranslations(Locale locale) {

		if (locale != null) {
			Map<String, String> translationProperties =
				cache.getIfPresent(locale.toString());

			if (translationProperties == null) {

				translationProperties = loadTranslations(locale);
				if (translationProperties != null &&
					translationProperties.size() > 0) {
					cache.put(locale.toString(), translationProperties);
				}

			}

			if (translationProperties == null ||
				translationProperties.size() == 0) {
				_log.error("No translations available for [" + locale + "]");
			}

			return translationProperties;

		}
		else {
			_log.error(
				"Unable to get translations. Missing required parameter locale");
		}
		return null;

	}

	@Override
	public String getLabel(String key, Locale locale) {

		String value = null;
		Map<String, String> translations = getTranslations(locale);
		if (translations != null && translations.size() > 0) {
			value = translations.get(key);
		}
		else {
			_log.error("No translation available for locale:[" + locale + "]");
		}

		if (Validator.isNull(value)) {
			_log.error(
				"Missing value for locale:[" + locale + "], key:[" + key + "]");
		}

		return value;
	}

	@Override
	public String getLabel(String key, Locale locale, String countryCode) {

		String value = null;
		Map<String, String> translations = getTranslations(locale);

		if (countryCode != null) {

			if (translations != null && key != null &&
				translations.size() > 0) {
				value = translations.get(key + countryCode);
			}
			else {
				_log.error(
					"No translation available for locale:[" + locale +
						"] and key [" + key + "], countryCode:[" + countryCode +
						"]");
			}

			if (Validator.isNull(value)) {
				_log.error(
					"Missing value for locale:[" + locale + "], key:[" + key +
						"], countryCode:[" + countryCode + "]");
			}

		}
		else {
			_log.debug("Country code is null for key:[" + key + "]");
		}

		return value;

	}

}
