package com.isidorey.documentation;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.util.ArrayList;
import java.util.List;

import com.html.generator.Tag;
import com.isidorey.models.ApiCallModel;
import com.isidorey.models.ApiModel;
import com.isidorey.models.BaseApiModel;
import com.isidorey.models.HeaderParameterModel;
import com.isidorey.models.UriParameterModel;

@SuppressWarnings("unchecked")
public class HtmlCreator {

	/**
	 * CSS
	 */
	public static String CSS_1 = "css/style.css";
	public static String CSS_2 = "css/sh.css";
	public static String CSS_3 = "css/tables.css";

	public static List<String> cssList;
	static {
		cssList = new ArrayList<String>();
		cssList.add(CSS_1);
		cssList.add(CSS_2);
		cssList.add(CSS_3);
	}

	/**
	 * JS
	 */
	public static String JS_1 = "js/sh-main.js";

	public static List<String> jsList;
	static {
		jsList = new ArrayList<String>();
		jsList.add(JS_1);
	}

	public void generateHtmlFromModel(BaseApiModel baseApiModel) {

		BaseApiModel api = baseApiModel;

		if (Constants.DEBUG) {
			print("BASE URL: " + api.getBaseUrl());
			List<ApiModel> apiModelList = api.getApiGroupings();
			for (ApiModel apiModel : apiModelList) {
				print("===================");
				print("API TYPE " + apiModel.getType());
				print("API DESC: " + apiModel.getDescription());
				List<ApiCallModel> apiCallsList = apiModel.getApiCallList();
				for (ApiCallModel apiCall : apiCallsList) {
					print("---------------------------");
					print("CALL: " + apiCall.getPath() + " "
							+ apiCall.getRequestType());
					print("EXAMPLE URL: " + apiCall.getExampleUrl());
					print("DESC: " + apiCall.getDescription());
					print("");
					List<UriParameterModel> uriParamList = apiCall
							.getUriParameterModelList();
					for (UriParameterModel uriParam : uriParamList) {
						print("URI PARAM: " + uriParam.getName());
						print("URI PARAM DESC: " + uriParam.getDescription());
						print("IS REQUIRED: " + uriParam.isRequired());
					}
					print("");
					List<HeaderParameterModel> headerParamList = apiCall
							.getHeaderParameterModelList();
					for (HeaderParameterModel headerParam : headerParamList) {
						print("HEADER PARAM: " + headerParam.getName());
						print("HEADER PARAM DESC: "
								+ headerParam.getDescription());
						print("IS REQUIRED: " + headerParam.isRequired());
					}
				}
			}
		}

		Tag html = new Tag("html");
		Tag head = generateHead();
		html.add(head);

		Tag container = new Tag("div", "id=container");
		Tag logo = new Tag("img",
				"src=images/logo.gif align=left valign=bottom alt=Isidorey");
		container.add(logo);

		Tag header = new Tag("header");
		Tag h1Text = new Tag("h1");
		h1Text.add("Isidorey.API Generated Documentation");

		header.add(h1Text);
		container.add(header);

		/**
		 * Headings
		 */
		Tag h2Overview = new Tag("h2");
		h2Overview.add("Overview");

		container.add(h2Overview);

		Tag preBaseUrl = new Tag("pre");
		Tag codeBaseUrl = new Tag("code");
		codeBaseUrl.add(api.getBaseUrl());
		preBaseUrl.add(codeBaseUrl);

		container.add(preBaseUrl);

		Tag spacer = new Tag("br");
		container.add(spacer);
		container.add(generateMenu(baseApiModel));

		List<ApiModel> apiModelList = api.getApiGroupings();
		for (ApiModel apiModel : apiModelList) {

			Tag hrTag = new Tag("hr");

			Tag h2ApiType = new Tag("h2");
			h2ApiType.add(apiModel.getType());

			Tag pApiDescription = new Tag("p");
			pApiDescription.add(apiModel.getDescription());

			hrTag.add(h2ApiType);
			hrTag.add(pApiDescription);

			List<ApiCallModel> apiCallsList = apiModel.getApiCallList();
			for (ApiCallModel apiCall : apiCallsList) {

				Tag h4Call = new Tag("h5", "id=" + apiCall.getPath()
						+ apiCall.getRequestType());
				h4Call.add(apiCall.getPath() + " [" + apiCall.getRequestType()
						+ "]");

				hrTag.add(h4Call);

				Tag preCall = new Tag("pre");
				Tag codeCall = new Tag("code");
				codeCall.add(apiCall.getExampleUrl());
				preCall.add(codeCall);

				hrTag.add(preCall);
				
				Tag pCallDescription = new Tag("p");
				pCallDescription.add(apiCall.getDescription());
				hrTag.add(pCallDescription);

				/**
				 * Generate URI parameter table
				 */
				List<UriParameterModel> uriParamList = apiCall
						.getUriParameterModelList();
				if (!uriParamList.isEmpty()) {
					Tag uriParamTable = uriParamTableCreator(uriParamList);
					hrTag.add(uriParamTable);
				}

				Tag breakTag = new Tag("br");
				hrTag.add(breakTag);

				/**
				 * Genreate header parameter table
				 */
				List<HeaderParameterModel> headerParamList = apiCall
						.getHeaderParameterModelList();
				if (!headerParamList.isEmpty()) {
					Tag headerParamTable = headerParamTableCreator(headerParamList);
					hrTag.add(headerParamTable);
				}

			}

			container.add(hrTag);
		}

		html.add(container);

		/**
		 * Add JS files last
		 */
		for (String jsFile : jsList) {
			html.add(new Tag("script", "type=text/javascript src=" + jsFile
					+ ""));
		}

		html.add("<script type=text/javascript>highlight(undefined, undefined, 'pre');</script>");
		generateHtml(html.toString());

	}

	public void generateHtml(String htmlString) {
		try {
			FileWriter fstream = new FileWriter(
					"/Users/franklovecchio/Desktop/development/documentation/generated.html",
					true);
			BufferedWriter out = new BufferedWriter(fstream);
			out.write(htmlString);
			out.close();
		} catch (Exception e) {
			System.err.println("Error: " + e.getMessage());
		}
	}

	public Tag generateHead() {
		Tag header = new Tag("head");
		for (String cssFile : cssList) {
			header.add(new Tag("link",
					"rel=stylesheet type=text/css media=all href=" + cssFile
							+ ""));
		}
		Tag title = new Tag("title");
		title.add("Isidorey API Generated Documentation");
		header.add(title);
		return header;
	}

	public Tag generateMenu(BaseApiModel api) {
		Tag ul = new Tag("ul");
		List<ApiModel> apiModelList = api.getApiGroupings();
		for (ApiModel apiModel : apiModelList) {
			List<ApiCallModel> apiCallsList = apiModel.getApiCallList();
			for (ApiCallModel apiCall : apiCallsList) {
				Tag li = new Tag("li");
				Tag link = new Tag("a", "href=#" + apiCall.getPath()
						+ apiCall.getRequestType());
				link.add(apiCall.getPath() + " (" + apiCall.getRequestType()
						+ ")");
				li.add(link);
				ul.add(li);
			}

		}
		return ul;
	}

	public Tag uriParamTableCreator(List<UriParameterModel> uriParamList) {

		Tag table = new Tag("table",
				"cellspacing=0 summary=URL Params width=750px");

		Tag tableRowHeader = new Tag("tr");

		Tag tableRow1 = new Tag("th", "scope=col abbr=URLParams class=nobg");
		tableRow1.add("URI Params");
		Tag tableRow2 = new Tag("th", "scope=col abbr=Description");
		tableRow2.add("Description");
		Tag tableRow3 = new Tag("th", "scope=col abbr=Required");
		tableRow3.add("Required");

		tableRowHeader.add(tableRow1);
		tableRowHeader.add(tableRow2);
		tableRowHeader.add(tableRow3);

		table.add(tableRowHeader);

		for (UriParameterModel uriParam : uriParamList) {
			Tag tableRow = new Tag("tr");
			Tag tableBodyHeader = new Tag("th",
					"scope=row abbr=abbr class=spec");
			tableBodyHeader.add(uriParam.getName());

			Tag cellDescription = new Tag("td");
			cellDescription.add(uriParam.getDescription());

			Tag cellRequired = new Tag("td");
			cellRequired.add(uriParam.isRequired());

			tableRow.add(tableBodyHeader);
			tableRow.add(cellDescription);
			tableRow.add(cellRequired);
			table.add(tableRow);
		}

		return table;
	}

	public Tag headerParamTableCreator(
			List<HeaderParameterModel> headerParamList) {

		Tag table = new Tag("table",
				"cellspacing=0 summary=URL Params width=750px");

		Tag tableRowHeader = new Tag("tr");

		Tag tableRow1 = new Tag("th", "scope=col abbr=HeaderParams class=nobg");
		tableRow1.add("Header Params");
		Tag tableRow2 = new Tag("th", "scope=col abbr=Description");
		tableRow2.add("Description");
		Tag tableRow3 = new Tag("th", "scope=col abbr=Required");
		tableRow3.add("Required");

		tableRowHeader.add(tableRow1);
		tableRowHeader.add(tableRow2);
		tableRowHeader.add(tableRow3);

		table.add(tableRowHeader);

		for (HeaderParameterModel headerParam : headerParamList) {
			Tag tableRow = new Tag("tr");
			Tag tableBodyHeader = new Tag("th",
					"scope=row abbr=abbr class=spec");
			tableBodyHeader.add(headerParam.getName());

			Tag cellDescription = new Tag("td");
			cellDescription.add(headerParam.getDescription());

			Tag cellRequired = new Tag("td");
			cellRequired.add(headerParam.isRequired());

			tableRow.add(tableBodyHeader);
			tableRow.add(cellDescription);
			tableRow.add(cellRequired);
			table.add(tableRow);
		}

		return table;
	}

	public void writeToLog(String text) {
		try {
			FileWriter fstream = new FileWriter(Constants.LOCAL_JS_FILE);
			BufferedWriter out = new BufferedWriter(fstream);
			out.write(text);
			out.close();
		} catch (Exception e) {
			System.err.println("Error: " + e.getMessage());
		}
	}

	public static void print(String line) {
		System.out.println(line);
	}

}
