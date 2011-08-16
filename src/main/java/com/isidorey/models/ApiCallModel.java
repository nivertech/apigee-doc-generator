package com.isidorey.models;

import java.util.List;

public class ApiCallModel {

	private String path;
	private String exampleUrl;
	private String requestType;
	private String description;

	private List<UriParameterModel> uriParameterModelList;
	private List<HeaderParameterModel> headerParameterModelList;

	public String getPath() {
		return path;
	}

	public void setPath(String path) {
		this.path = path;
	}

	public String getExampleUrl() {
		return exampleUrl;
	}

	public void setExampleUrl(String exampleUrl) {
		this.exampleUrl = exampleUrl;
	}

	public String getRequestType() {
		return requestType;
	}

	public void setRequestType(String requestType) {
		this.requestType = requestType;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public List<HeaderParameterModel> getHeaderParameterModelList() {
		return headerParameterModelList;
	}

	public void setHeaderParameterModelList(
			List<HeaderParameterModel> headerParameterModelList) {
		this.headerParameterModelList = headerParameterModelList;
	}

	public List<UriParameterModel> getUriParameterModelList() {
		return uriParameterModelList;
	}

	public void setUriParameterModelList(
			List<UriParameterModel> uriParameterModelList) {
		this.uriParameterModelList = uriParameterModelList;
	}

}
