package com.isidorey.documentation;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

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
	public static String CSS_1 = "http://twitter.github.com/bootstrap/assets/css/bootstrap-1.0.0.min.css";

	public static List<String> cssList;
	static {
		cssList = new ArrayList<String>();
		cssList.add(CSS_1);
	}

	/**
	 * JS
	 */
	public static String JS_1 = "http://code.jquery.com/jquery-1.5.2.min.js";
	public static String JS_2 = "http://autobahn.tablesorter.com/jquery.tablesorter.min.js";
	public static String JS_3 = "http://dev.isidorey.net/docs/js/apigee.js";

	public static List<String> jsList;
	static {
		jsList = new ArrayList<String>();
		jsList.add(JS_1);
		jsList.add(JS_2);
		jsList.add(JS_3);
	}

	public void generateBootstrapTemplate(
			Map<String, Integer> apiMap, BaseApiModel baseApiModel,
			String localFilename, String imgLink) {

		BaseApiModel api = baseApiModel;
		if (Constants.DEBUG)
			debug(api);

		Tag html = new Tag("html");
		Tag head = generateHead();
		html.add(head);

		Tag body = new Tag("body");

		Tag divTopbar = new Tag("div", "class=topbar");
		Tag divFill = new Tag("div", "class=fill");
		Tag divContainer = new Tag("div", "class=container");

		Tag h3 = new Tag("h3");
		Tag a = new Tag("a", "href=#");
		a.add("doc || " + baseApiModel.getBaseUrl());
		h3.add(a);

		divContainer.add(h3);

		List<ApiModel> apiModelList = api.getApiGroupings();

		/**
		 * This allows us to have multiple API *groupings* in one file, and
		 * fixes the CSS for the bootstrap toolkit which doesn't take into
		 * account massive menus
		 */
		if (apiMap == null) {
			/**
			 * Ignore
			 */
			Tag ul = new Tag("ul", "class=\"nav secondary-nav\"");
			Tag li = new Tag("li", "id=secondary-nav-menu class=menu");
			Tag link = new Tag("a",
					"href=# onClick=showHideMenu('secondary-nav-menu') class=menu");

			link.add("Calls");
			li.add(link);

			Tag innerUl = new Tag("ul", "class=menu-dropdown");
			for (ApiModel apiModel : apiModelList) {
				List<ApiCallModel> apiCallsList = apiModel.getApiCallList();
				for (ApiCallModel apiCall : apiCallsList) {
					Tag innerLi = new Tag("li");
					Tag innerLink = new Tag("a", "style=font-size:10px href=#"
							+ apiCall.getPath().replace("/", "") + "_"
							+ apiCall.getRequestType());
					innerLink.add(apiCall.getPath() + " ("
							+ apiCall.getRequestType() + ")");
					innerLi.add(innerLink);
					innerUl.add(innerLi);

				}
			}

			li.add(innerUl);
			ul.add(li);
			divContainer.add(ul);
		} else {

			int counter = 1;
			int lastCount = 0;

			for (Entry<String, Integer> entry : apiMap.entrySet()) {

				String name = entry.getKey();
				int count = entry.getValue();

				Tag ul = new Tag("ul", "class=\"nav secondary-nav\"");
				Tag li = new Tag("li", "id=secondary-nav-menu-" + count
						+ " class=menu");
				Tag link = new Tag("a",
						"href=# onClick=showHideMenu('secondary-nav-menu-"
								+ count + "') class=menu");

				link.add(name);
				li.add(link);

				Tag innerUl = new Tag("ul", "class=menu-dropdown");
				for (ApiModel apiModel : apiModelList) {
					List<ApiCallModel> apiCallsList = apiModel.getApiCallList();
					int callCount = 1;
					for (ApiCallModel apiCall : apiCallsList) {
						if (counter == callCount) {
							if (counter > lastCount && counter <= count) {
								Tag innerLi = new Tag("li");
								Tag innerLink = new Tag("a",
										"style=font-size:10px href=#"
												+ apiCall.getPath().replace(
														"/", "") + "_"
												+ apiCall.getRequestType());
								innerLink.add(apiCall.getPath() + " ("
										+ apiCall.getRequestType() + ")");
								innerLi.add(innerLink);
								innerUl.add(innerLi);
								counter++;
							}
						}
						callCount++;
					}
				}

				lastCount = count;

				li.add(innerUl);
				ul.add(li);
				divContainer.add(ul);
			}
		}

		divFill.add(divContainer);
		divTopbar.add(divFill);
		body.add(divTopbar);

		Tag divContainerFluid = new Tag("div", "class=container-fluid");
		Tag divContent = new Tag("div", "class=content id=main-content");

		Tag divBreak = new Tag("div", "style=height:100px");
		divContent.add(divBreak);

		Tag img = new Tag(
				"img",
				"src=" + imgLink + " align=left valign=bottom alt=Isidorey");
		divContent.add(img);

		for (ApiModel apiModel : apiModelList) {
			List<ApiCallModel> apiCallsList = apiModel.getApiCallList();
			for (ApiCallModel apiCall : apiCallsList) {

				Tag div = new Tag("div", "id="
						+ apiCall.getPath().replace("/", "") + "_"
						+ apiCall.getRequestType());

				Tag spacer = new Tag("div", "style=height:100px");
				div.add(spacer);

				Tag divPageHeader = new Tag("div", "class=page-header");

				Tag h1 = new Tag("h1");
				h1.add(apiCall.getPath());

				Tag small = new Tag("small");
				small.add(apiCall.getRequestType());

				h1.add(small);
				divPageHeader.add(h1);
				div.add(divPageHeader);

				Tag divDescription = new Tag("div",
						"class=\"alert-message block-message success\"");

				Tag p = new Tag("p");

				Tag strong = new Tag("strong");
				strong.add("Description");

				p.add(strong);
				p.add(apiCall.getDescription());

				divDescription.add(p);
				div.add(divDescription);

				Tag h3UrlParams = new Tag("h3");
				h3UrlParams.add("URL Parameters");

				Tag h3HeaderParams = new Tag("h3");
				h3HeaderParams.add("Header Parameters");

				/**
				 * Generate URI parameter table
				 */
				List<UriParameterModel> uriParamList = apiCall
						.getUriParameterModelList();
				if (!uriParamList.isEmpty()) {
					Tag uriParamTable = genereateUrlParamTable(uriParamList);
					div.add(h3UrlParams);
					div.add(uriParamTable);
				}

				/**
				 * Generate header parameter table
				 */
				List<HeaderParameterModel> headerParamList = apiCall
						.getHeaderParameterModelList();
				if (!headerParamList.isEmpty()) {
					Tag headerParamTable = genereateHeaderParamTable(headerParamList);
					div.add(h3HeaderParams);
					div.add(headerParamTable);
				}

				Tag lineBreak = new Tag("br");
				div.add(lineBreak);

				div.add(generateBlockquote(baseApiModel.getBaseUrl(),
						apiCall.getExampleUrl()));
				divContent.add(div);
			}
		}

		divContainerFluid.add(divContent);
		body.add(divContainerFluid);
		html.add(body);

		generateHtml(html.toString(), localFilename);

	}

	public void generateHtml(String htmlString, String localFilename) {
		/**
		 * Delete file if it exists
		 */
		try {
			File file = new File(localFilename);
			file.delete();
			file.createNewFile();
			FileWriter fstream = new FileWriter(localFilename, true);
			BufferedWriter out = new BufferedWriter(fstream);
			out.write("<!DOCTYPE html>");
			out.write(htmlString);
			out.close();
		} catch (Exception e) {
			System.err.println("Error: " + e.getMessage());
		}
	}

	public Tag generateHead() {
		Tag header = new Tag("head");
		for (String cssFile : cssList) {
			header.add(new Tag("link", "rel=stylesheet type=text/css href="
					+ cssFile + ""));
		}
		for (String jsFile : jsList) {
			header.add(new Tag("script", "type=text/javascript src=" + jsFile
					+ ""));
		}
		Tag title = new Tag("title");
		title.add("Isidorey API Generated Documentation");
		header.add(title);
		return header;
	}

	public Tag genereateUrlParamTable(List<UriParameterModel> uriParamList) {
		Tag table = new Tag("table", "class=\"common-table zebra-striped\"");

		Tag tableRowHeader = new Tag("tr");

		Tag tableRow1 = new Tag("th", "width=10%");
		tableRow1.add("Parameter");
		Tag tableRow2 = new Tag("th", "width=80%");
		tableRow2.add("Description");
		Tag tableRow3 = new Tag("th", "width=10%");
		tableRow3.add("Required");

		tableRowHeader.add(tableRow1);
		tableRowHeader.add(tableRow2);
		tableRowHeader.add(tableRow3);

		table.add(tableRowHeader);

		for (UriParameterModel uriParam : uriParamList) {
			Tag tableRow = new Tag("tr");

			Tag tableBodyHeader = new Tag("td");
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

	public Tag genereateHeaderParamTable(
			List<HeaderParameterModel> headerParamList) {
		Tag table = new Tag("table", "class=\"common-table zebra-striped\"");

		Tag tableRowHeader = new Tag("tr");

		Tag tableRow1 = new Tag("th", "width=10%");
		tableRow1.add("Parameter");
		Tag tableRow2 = new Tag("th", "width=80%");
		tableRow2.add("Description");
		Tag tableRow3 = new Tag("th", "width=10%");
		tableRow3.add("Required");

		tableRowHeader.add(tableRow1);
		tableRowHeader.add(tableRow2);
		tableRowHeader.add(tableRow3);

		table.add(tableRowHeader);

		for (HeaderParameterModel headerParam : headerParamList) {
			Tag tableRow = new Tag("tr");

			Tag tableBodyHeader = new Tag("td");
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

	public Tag generateBlockquote(String baseUrl, String exampleUrl) {
		Tag blockquote = new Tag("blockquote");
		Tag p = new Tag("p");
		Tag strong = new Tag("strong");
		strong.add(baseUrl + exampleUrl);
		p.add(strong);
		blockquote.add(p);
		return blockquote;
	}

	public void debug(BaseApiModel api) {
		if (Constants.DEBUG) {
			print("BASE URL: " + api.getBaseUrl());
			List<ApiModel> apiModelList = api.getApiGroupings();
			for (ApiModel apiModel : apiModelList) {
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
	}

	public static void print(String line) {
		System.out.println(line);
	}

}
