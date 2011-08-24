package com.isidorey.test;

import java.util.LinkedHashMap;

import com.isidorey.documentation.XmlToJsonParser;

public class Test {

	public static void main(String args[]) {

		/**
		 * A more useful solution would be to download the file from S3
		 */
		String localFilename = "/Users/franklovecchio/Desktop/isidorey-wadl.xml";
		String localGeneratedDoc = "/Users/franklovecchio/Desktop/index.html";
		String apigeeFile = "/Users/franklovecchio/Desktop/isidorey-apigee-wadl.xml";

		/**
		 * Not a good way to do this, but no APIGEE support for multiple APIs in
		 * one file. You can optionally pass null and have one dropdown.
		 */
		int nonAuthCount = 2;
		int coreApiCount = 29;
		int rulesengineApiCount = 49;
		int cloudsandraApiCount = 63;

		LinkedHashMap<String, Integer> apiMap = new LinkedHashMap<String, Integer>();

		apiMap.put("NON-AUTH", nonAuthCount);
		apiMap.put("CORE", coreApiCount);
		apiMap.put("RULESENGINE", rulesengineApiCount);
		apiMap.put("CLOUDSANDRA", cloudsandraApiCount);
		
		/**
		 * Branding
		 */
		String imgLink = "http://dev.isidorey.net/docs/images/logo.gif";

		/**
		 * Parse into html
		 */
		XmlToJsonParser xmlToJson = new XmlToJsonParser();
		xmlToJson.generateWebpage(localFilename, localGeneratedDoc, apiMap, imgLink);

		/**
		 * Generate a file APIGEE can use. We do this because there isn't
		 * support for URL parameters as far as I can tell.
		 */
		xmlToJson.generateApigeeWadl(localFilename, apigeeFile);

	}
}
