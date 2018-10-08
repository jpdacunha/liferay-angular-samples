package com.liferay.blade.npm.angular447.portlet.command;

import com.liferay.blade.npm.angular447.portlet.constants.Angular447PortletKeys;
import com.liferay.blade.npm.angular447.portlet.models.Context;
import com.liferay.blade.npm.angular447.portlet.service.TranslationServiceFactory;
import com.liferay.portal.kernel.log.Log;
import com.liferay.portal.kernel.log.LogFactoryUtil;
import com.liferay.portal.kernel.portlet.bridges.mvc.MVCResourceCommand;
import com.liferay.portal.kernel.theme.ThemeDisplay;
import com.liferay.portal.kernel.util.PortalUtil;
import com.liferay.portal.kernel.util.WebKeys;

import java.io.Writer;
import java.util.Map;

import javax.portlet.PortletException;
import javax.portlet.ResourceRequest;
import javax.portlet.ResourceResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.osgi.service.component.annotations.Component;

@Component(immediate = true, property = {
		"javax.portlet.name=" + Angular447PortletKeys.ANGULAR447,
		"mvc.command.name=" + Angular447PortletKeys.ANGULAR447_LOAD_CONTEXT_COMMAND
}, service = MVCResourceCommand.class)
public class ContextCommand implements MVCResourceCommand {
	
	private static Log _log = LogFactoryUtil.getLog(ContextCommand.class.getName());

		@Override
		public boolean serveResource(
			ResourceRequest resourceRequest, ResourceResponse resourceResponse)
			throws PortletException {

			ThemeDisplay themeDisplay =
				(ThemeDisplay) resourceRequest.getAttribute(WebKeys.THEME_DISPLAY);

			String language = themeDisplay.getLanguageId();

			HttpServletRequest request = PortalUtil.getOriginalServletRequest(
				PortalUtil.getHttpServletRequest(resourceRequest));

			try {

				/*It is possible to retrieve something from HttpSession here*/
				HttpSession session = request.getSession();
				String numOffer = (String) session.getAttribute("dummy");

				Context context = new Context();
				context.setLanguage(language);

				// Translation loading
				Map<String, String> translations =
					TranslationServiceFactory.getInstance().getTranslations(
						themeDisplay.getLocale());

				context.setTranslations(translations);

				Writer wtr = resourceResponse.getWriter();
				wtr.write(context.toJSON());
				wtr.flush();

			} catch (Exception e) {
				_log.error(e,e);
			}
			return true;
		}


}


