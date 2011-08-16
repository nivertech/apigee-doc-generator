package com.isidorey.models;

import java.util.List;

public class BaseApiModel {

	private String baseUrl;
	private List<ApiModel> apiGroupings;

	public String getBaseUrl() {
		return baseUrl;
	}

	public void setBaseUrl(String baseUrl) {
		this.baseUrl = baseUrl;
	}

	public List<ApiModel> getApiGroupings() {
		return apiGroupings;
	}

	public void setApiGroupings(List<ApiModel> apiGroupings) {
		this.apiGroupings = apiGroupings;
	}
	
}
