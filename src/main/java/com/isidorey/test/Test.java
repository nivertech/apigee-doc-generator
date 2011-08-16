package com.isidorey.test;

import com.isidorey.documentation.XmlToJsonParser;

public class Test {

	public static void main(String args[]) {

		/**
		 * A more useful solution would be to download the file from S3
		 */
		String localFilename = "/Users/franklovecchio/Desktop/isidorey-wadl.xml";
		String localGeneratedDoc = "/Users/franklovecchio/Desktop/index.html";

		/**
		 * Parse into html
		 */
		XmlToJsonParser xmlToJson = new XmlToJsonParser();
		xmlToJson.generateWebpage(localFilename, localGeneratedDoc);

	}
}
