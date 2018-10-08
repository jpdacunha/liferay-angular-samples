package com.liferay.blade.npm.angular447.portlet.models;

import com.liferay.portal.kernel.json.JSONFactoryUtil;
import com.liferay.portal.kernel.json.JSONSerializer;

import java.util.Map;

public class Context {
	
	private String language;
	private Map<String, String> translations;

	public Map<String, String> getTranslations() {

		return translations;
	}

	public void setTranslations(Map<String, String> translations) {

		this.translations = translations;
	}

	public String getLanguage() {

		return language;
	}

	public void setLanguage(String language) {

		this.language = language;
	}

	public String toJSON() {

		JSONSerializer jsonSerializer = JSONFactoryUtil.createJSONSerializer();
		jsonSerializer.exclude("class");
		jsonSerializer.include("translations");
		return jsonSerializer.serialize(this);

	}

}
