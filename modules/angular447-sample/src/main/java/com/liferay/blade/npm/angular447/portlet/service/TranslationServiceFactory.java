
package com.liferay.blade.npm.angular447.portlet.service;

public class TranslationServiceFactory {

	private static TranslationService INSTANCE = null;

	private TranslationServiceFactory() {
		super();
	}

	public static TranslationService getInstance() {

		if (INSTANCE == null) {
			synchronized (TranslationServiceImpl.class) {
				if (INSTANCE == null) {
					INSTANCE = new TranslationServiceImpl();
				}
			}
		}
		return INSTANCE;

	}

}
