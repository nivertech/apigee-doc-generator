package com.isidorey.test;

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
		 * Parse into html
		 */
		XmlToJsonParser xmlToJson = new XmlToJsonParser();
		xmlToJson.generateWebpage(localFilename, localGeneratedDoc);

		/**
		 * Generate a file APIGEE can use. We do this because there isn't
		 * support for URL parameters as far as I can tell.
		 */
		xmlToJson.generateApigeeWadl(localFilename, apigeeFile);

	}
}
