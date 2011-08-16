package com.isidorey.models;

import java.util.List;

public class ApiModel {

	private String type;
	private String description;
	private List<ApiCallModel> apiCallList;

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public List<ApiCallModel> getApiCallList() {
		return apiCallList;
	}

	public void setApiCallList(List<ApiCallModel> apiCallList) {
		this.apiCallList = apiCallList;
	}

}
