package com.isidorey.documentation;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.util.List;

import com.html.generator.Tag;
import com.isidorey.models.ApiCallModel;
import com.isidorey.models.ApiModel;
import com.isidorey.models.BaseApiModel;
import com.isidorey.models.HeaderParameterModel;
import com.isidorey.models.UriParameterModel;

@SuppressWarnings("unchecked")
public class HtmlCreator {

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

		Tag html = generateHead();

		/**
		 * Heading
		 */
		Tag h2Overview = new Tag("h2");
		h2Overview.add("Overview");

		html.add(h2Overview);

		Tag preBaseUrl = new Tag("pre");
		Tag codeBaseUrl = new Tag("code");
		codeBaseUrl.add(api.getBaseUrl());
		preBaseUrl.add(codeBaseUrl);

		html.add(preBaseUrl);

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

				Tag h4Call = new Tag("h2");
				h4Call.add(apiCall.getPath() + "(" + apiCall.getRequestType()
						+ ")");

				hrTag.add(h4Call);

				Tag preCall = new Tag("pre");
				Tag codeCall = new Tag("code");
				codeCall.add(apiCall.getExampleUrl());
				preCall.add(codeCall);

				hrTag.add(preCall);

				/**
				 * Generate URI parameter table
				 */
				List<UriParameterModel> uriParamList = apiCall
						.getUriParameterModelList();
				Tag uriParamTable = uriParamTableCreator(uriParamList);

				hrTag.add(uriParamTable);

				/**
				 * Genreate header parameter table
				 */
				List<HeaderParameterModel> headerParamList = apiCall
						.getHeaderParameterModelList();
				Tag headerParamTable = headerParamTableCreator(headerParamList);

				hrTag.add(headerParamTable);

			}

			html.add(hrTag);
		}

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
		Tag html = new Tag("html");
		Tag head = new Tag("head");
		for (String cssFile : Constants.cssList) {
			head.add(new Tag("link", "rel=stylesheet type=text/css href=."
					+ cssFile + ""));
		}
		Tag title = new Tag("title");
		title.add("Isidorey API Generated Documentation");
		head.add(title);
		return html;
	}

	public Tag uriParamTableCreator(List<UriParameterModel> uriParamList) {

		Tag table = new Tag("table",
				"cellspacing=0 summary=URL Params width=750px");

		Tag tableRowHeader = new Tag("tr");
		Tag tableHeader = new Tag("th", "scope=col abbr=URLParams class=nobg");

		Tag tableRow1 = new Tag("tr", "scope=col abbr=URLParams class=nobg");
		Tag tableRow2 = new Tag("tr", "scope=col abbr=Description");
		Tag tableRow3 = new Tag("tr", "scope=col abbr=Required");

		tableHeader.add(tableRow1);
		tableHeader.add(tableRow2);
		tableHeader.add(tableRow3);

		tableRowHeader.add(tableHeader);

		table.add(tableRowHeader);

		for (UriParameterModel uriParam : uriParamList) {
			Tag tableRow = new Tag("tr");
			Tag tableBodyHeader = new Tag("th", "scope=row abbr=abbr class=spec");
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
		Tag tableHeader = new Tag("th", "scope=col abbr=URLParams class=nobg");

		Tag tableRow1 = new Tag("tr", "scope=col abbr=URLParams class=nobg");
		Tag tableRow2 = new Tag("tr", "scope=col abbr=Description");
		Tag tableRow3 = new Tag("tr", "scope=col abbr=Required");

		tableHeader.add(tableRow1);
		tableHeader.add(tableRow2);
		tableHeader.add(tableRow3);

		tableRowHeader.add(tableHeader);

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
