package com.isidorey.documentation;

import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;

import net.sf.json.JSON;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import net.sf.json.JSONSerializer;
import net.sf.json.xml.XMLSerializer;

import org.apache.commons.io.IOUtils;

import com.isidorey.models.ApiCallModel;
import com.isidorey.models.ApiModel;
import com.isidorey.models.BaseApiModel;
import com.isidorey.models.HeaderParameterModel;
import com.isidorey.models.UriParameterModel;

public class XmlToJsonParser {

	public static void main(String argv[]) throws IOException {
		generateWebpage();
		// generateApigeeWadl();
	}

	/**
	 * We're essentially removing custom tags and saving a file
	 */
	public void genereateApigeeWadl() {

	}

	/**
	 * We're using custom tags and css and saving file locally
	 */
	public static void generateWebpage() {
		InputStream is = XmlToJsonParser.class
				.getResourceAsStream(Constants.MODIFIED_WADL_FILE);

		String xml = null;
		try {
			xml = IOUtils.toString(is);
		} catch (IOException e) {
			e.printStackTrace();
		}

		HtmlCreator htmlCreator = new HtmlCreator();

		/**
		 * Convert XML to JSON for easier iteration
		 */
		XMLSerializer xmlSerializer = new XMLSerializer();
		JSON json = xmlSerializer.read(xml);

		String jsonPrint = json.toString(2);
		htmlCreator.writeToLog(jsonPrint);

		/**
		 * Parse
		 */
		JSONObject jsonObject = (JSONObject) JSONSerializer.toJSON(json);
		BaseApiModel baseApiModel = parse(jsonObject);

		/**
		 * Parse into html
		 */
		htmlCreator.generateHtmlFromModel(baseApiModel);
		System.exit(1);
	}

	/**
	 * Organize the resources into something we can iterate through nicely
	 * 
	 * @param jsonObject
	 */
	public static BaseApiModel parse(JSONObject jsonObject) {

		BaseApiModel baseApiModel = new BaseApiModel();

		JSONObject resourcesObject = jsonObject.getJSONObject("resources");
		/**
		 * Base URL
		 */
		String baseUrl = resourcesObject.getString("@base");
		baseApiModel.setBaseUrl(baseUrl);

		JSONArray apiTypeArray = resourcesObject.getJSONArray("api");

		List<ApiModel> apiModelList = new ArrayList<ApiModel>();
		for (int i = 0; i < apiTypeArray.size(); i++) {

			JSONObject apiObject = (JSONObject) apiTypeArray.get(i);

			ApiModel apiModel = new ApiModel();

			/**
			 * API type and description
			 */
			String apiType = apiObject.getString("@name");
			String apiDescription = apiObject.getString("@text");
			apiModel.setType(apiType);
			apiModel.setDescription(apiDescription);

			List<ApiCallModel> apiCallModelList = new ArrayList<ApiCallModel>();

			JSONArray resourcesArray = apiObject.getJSONArray("resource");
			for (int j = 0; j < resourcesArray.size(); j++) {

				JSONObject resourceObject = resourcesArray.getJSONObject(j);
				ApiCallModel apiCallModel = new ApiCallModel();

				/**
				 * Call path
				 */
				String path = resourceObject.getString("@path");
				apiCallModel.setPath(path);

				JSONObject methodObject = resourceObject
						.getJSONObject("method");
				JSONObject exampleUrl = methodObject
						.getJSONObject("apigee:example");

				/**
				 * Example URL and request type
				 */
				String url = exampleUrl.getString("@url");

				/**
				 * Check for (GET ALL)
				 */
				String requestType = null;
				String displayName = methodObject
						.getString("@apigee:displayName");

				if (displayName != null && displayName.contains("ALL")) {
					requestType = methodObject.getString("@apigee:displayName");
				} else {
					requestType = methodObject.getString("@name");
				}

				apiCallModel.setExampleUrl(url);
				apiCallModel.setRequestType(requestType);

				JSONObject docObject = methodObject.getJSONObject("doc");

				/**
				 * Call description
				 */
				String callDescription = docObject.getString("#text");
				apiCallModel.setDescription(callDescription);

				/**
				 * Check for URL parameters
				 */
				List<UriParameterModel> uriParamModelList = new ArrayList<UriParameterModel>();
				try {
					/**
					 * This should catch if there are none
					 */
					JSONArray urlParametersArray = methodObject
							.getJSONArray("description");

					for (int k = 0; k < urlParametersArray.size(); k++) {

						JSONObject urlParameters = urlParametersArray
								.getJSONObject(k);

						/**
						 * URL param name and description
						 */
						String paramName = urlParameters.getString("@uriparam");
						String paramDescription = urlParameters
								.getString("@text");

						boolean isRequired = true;
						try {
							/**
							 * URL param optional description
							 */
							urlParameters.getString("@optional");
							isRequired = false;
						} catch (Exception e) {
							/**
							 * Default to true
							 */
						}

						UriParameterModel uriParamModel = new UriParameterModel();

						uriParamModel.setName(paramName);
						uriParamModel.setDescription(paramDescription);
						uriParamModel.setRequired(isRequired);

						uriParamModelList.add(uriParamModel);
					}
				} catch (Exception e) {
					/**
					 * No uri params
					 */
				}

				apiCallModel.setUriParameterModelList(uriParamModelList);

				/**
				 * Check for header parameters
				 */
				List<HeaderParameterModel> headerParamModelList = new ArrayList<HeaderParameterModel>();
				try {
					JSONObject requestObject = methodObject
							.getJSONObject("request");
					JSONArray paramArray = requestObject.getJSONArray("param");
					JSONArray paramDescriptionArray = requestObject
							.getJSONArray("description");

					for (int k = 0; k < paramArray.size(); k++) {

						JSONObject keyValueParam = (JSONObject) paramArray
								.get(k);
						if (keyValueParam.getString("@name") != null) {

							JSONObject keyValueDescriptionParam = (JSONObject) paramDescriptionArray
									.get(k);

							/**
							 * Header param name and description
							 */
							String param = keyValueDescriptionParam
									.getString("@param");
							String description = keyValueDescriptionParam
									.getString("@text");

							boolean isRequired = true;
							try {
								/**
								 * Header param optional description
								 */
								keyValueDescriptionParam.getString("@optional");
								isRequired = false;
							} catch (Exception e) {
								/**
								 * Default to true
								 */
							}
							HeaderParameterModel headerParamModel = new HeaderParameterModel();

							headerParamModel.setName(param);
							headerParamModel.setDescription(description);
							headerParamModel.setRequired(isRequired);

							headerParamModelList.add(headerParamModel);
						}
					}
				} catch (Exception e) {
					/**
					 * No header params
					 */
				}

				apiCallModel.setHeaderParameterModelList(headerParamModelList);
				apiCallModelList.add(apiCallModel);

			}

			apiModel.setApiCallList(apiCallModelList);
			apiModelList.add(apiModel);

		}

		baseApiModel.setApiGroupings(apiModelList);
		return baseApiModel;

	}

	public static void print(String line) {
		System.out.println(line);
	}
}