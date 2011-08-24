package com.isidorey.documentation;

import java.io.BufferedReader;
import java.io.DataInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.Writer;
import java.util.ArrayList;
import java.util.LinkedHashMap;
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

/**
 * Parses a wadl xml file with custom tags into models. We can also remove the
 * custom tags to use in APIGEE, etc.
 * 
 * @author franklovecchio
 * 
 */
public class XmlToJsonParser {

	public void generateWebpage(String wadlFile, String generatedDoc, LinkedHashMap<String, Integer> apiMap, String imgLink) {

		InputStream is = null;
		try {
			is = new FileInputStream(wadlFile);
		} catch (FileNotFoundException e1) {
			e1.printStackTrace();
		}

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

		/**
		 * Parse
		 */
		JSONObject jsonObject = (JSONObject) JSONSerializer.toJSON(json);
		BaseApiModel baseApiModel = parse(jsonObject);

		/**
		 * Parse into html
		 */
		htmlCreator.generateBootstrapTemplate(apiMap, baseApiModel, generatedDoc, imgLink);
	}

	public void generateApigeeWadl(String wadlFile, String apigeeFile) {

		/**
		 * Delete file if it exists
		 */
		try {
			File file = new File(apigeeFile);
			file.delete();
		} catch (Exception e) {
			System.err.println("Error: " + e.getMessage());
		}

		String text = "";

		try {
			FileInputStream fstream = new FileInputStream(wadlFile);

			DataInputStream in = new DataInputStream(fstream);
			BufferedReader br = new BufferedReader(new InputStreamReader(in));
			String strLine;
			while ((strLine = br.readLine()) != null) {
				if (strLine.contains("<description")) {
					/**
					 * Ignore
					 */
				} else {
					text = text + strLine;
				}
			}
			in.close();

			Writer out = new OutputStreamWriter(
					new FileOutputStream(apigeeFile), "UTF-8");
			try {
				out.write(text);
			} finally {
				out.close();
			}
		} catch (Exception e) {
			System.err.println("Error: " + e.getMessage());
		}
	}

	/**
	 * Organize the resources into something we can iterate through nicely
	 * 
	 * @param jsonObject
	 */
	public BaseApiModel parse(JSONObject jsonObject) {

		BaseApiModel baseApiModel = new BaseApiModel();

		JSONObject resourcesObject = jsonObject.getJSONObject("resources");
		/**
		 * Base URL
		 */
		String baseUrl = resourcesObject.getString("@base");
		baseApiModel.setBaseUrl(baseUrl);

		List<ApiModel> apiModelList = new ArrayList<ApiModel>();

		ApiModel apiModel = new ApiModel();

		List<ApiCallModel> apiCallModelList = new ArrayList<ApiCallModel>();

		JSONArray resourcesArray = resourcesObject.getJSONArray("resource");
		for (int j = 0; j < resourcesArray.size(); j++) {

			JSONObject resourceObject = resourcesArray.getJSONObject(j);
			ApiCallModel apiCallModel = new ApiCallModel();

			/**
			 * Call path
			 */
			String path = resourceObject.getString("@path");
			apiCallModel.setPath(path);

			JSONObject methodObject = resourceObject.getJSONObject("method");
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
			String displayName = methodObject.getString("@apigee:displayName");

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

			/**
			 * Check for single parameter or an array
			 */
			try {
				/**
				 * This should catch if there are none or it's an array
				 */
				JSONObject urlParameters = methodObject
						.getJSONObject("description");

				/**
				 * URL param name and description
				 */
				String paramName = urlParameters.getString("@uriparam");
				String paramDescription = urlParameters.getString("@text");

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

			} catch (Exception e) {
				/**
				 * There are none or it's an array
				 */
			}

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
					String paramDescription = urlParameters.getString("@text");

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
				System.out.println("NO URL PARAMS");
			}

			apiCallModel.setUriParameterModelList(uriParamModelList);

			/**
			 * Check for header parameters
			 */
			List<HeaderParameterModel> headerParamModelList = new ArrayList<HeaderParameterModel>();

			/**
			 * Check for single parameter or an array
			 */
			try {
				/**
				 * This should catch if there are none or it's an array
				 */
				JSONObject requestObject = methodObject
						.getJSONObject("request");
				JSONObject paramDescriptionObject = requestObject
						.getJSONObject("description");

				/**
				 * Header param name and description
				 */
				String param = paramDescriptionObject.getString("@param");
				String description = paramDescriptionObject.getString("@text");

				boolean isRequired = true;
				try {
					/**
					 * Header param optional description
					 */
					paramDescriptionObject.getString("@optional");
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

			} catch (Exception e) {
				/**
				 * There are none or it's an array
				 */
			}

			try {
				JSONObject requestObject = methodObject
						.getJSONObject("request");
				JSONArray paramArray = requestObject.getJSONArray("param");
				JSONArray paramDescriptionArray = requestObject
						.getJSONArray("description");

				for (int k = 0; k < paramArray.size(); k++) {

					JSONObject keyValueParam = (JSONObject) paramArray.get(k);
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

		baseApiModel.setApiGroupings(apiModelList);
		return baseApiModel;

	}

	public void print(String line) {
		System.out.println(line);
	}
}