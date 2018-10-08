
package com.liferay.blade.npm.angular447.portlet.service;

import java.util.Locale;
import java.util.Map;

public interface TranslationService {

	public Map<String, String> getTranslations(Locale locale);

	public String getLabel(String key, Locale locale);

	public String getLabel(String key, Locale locale, String countryCode);

}
