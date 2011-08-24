package controllers;

import java.io.File;

import play.mvc.Controller;

import com.isidorey.documentation.XmlToJsonParser;
import java.util.LinkedHashMap;
import java.util.Map;

public class Application extends Controller {

	public static void index() {
		render();
	}

	public static void documentation() {
	
		String localFilename = "/home/ubuntu/isidorey-wadl.xml";
		String localGeneratedDoc = "/home/ubuntu/index.html";
		String apigeeFile = "/home/ubuntu/isidorey-apigee-wadl.xml";
	
		
		/**
		 * Not a good way to do this, but no APIGEE support for multiple APIs in
		 * one file. You can optionally pass null and have one dropdown.
		 */
		int nonAuthCount = 2;
		int coreApiCount = 29;
		int rulesengineApiCount = 49;
		int cloudsandraApiCount = 63;

		Map<String, Integer> apiMap = new LinkedHashMap<String, Integer>();

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
		
		renderBinary(new File(localGeneratedDoc));
	}

}