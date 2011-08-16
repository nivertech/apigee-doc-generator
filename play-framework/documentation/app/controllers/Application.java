package controllers;

import java.io.File;

import play.mvc.Controller;

import com.isidorey.documentation.XmlToJsonParser;


public class Application extends Controller {

	public static void index() {
		render();
	}

	public static void documentation() {
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
	
		renderBinary(new File(localGeneratedDoc));
	}

}