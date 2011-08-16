package com.isidorey.documentation;

import java.util.ArrayList;
import java.util.List;

public class Constants {

	/**
	 * Prints out models
	 */
	public static boolean DEBUG = true;

	/**
	 * File paths
	 */
	public static String MODIFIED_WADL_FILE = "isidorey-wadl.xml";
	public static String LOCAL_APIGEE_FILE = "/Users/franklovecchio/Desktop/isidorey-wadl.xml";
	public static String LOCAL_JS_FILE = "/Users/franklovecchio/Desktop/isidorey-wadl.json";

	/**
	 * CSS
	 */
	public static String CSS_1 = "css/style.css";
	public static String CSS_2 = "css/sh.css";
	public static String CSS_3 = "css/tables.css";

	public static List<String> cssList;
	static {
		List<String> cssList = new ArrayList<String>();
		cssList.add(CSS_1);
		cssList.add(CSS_2);
		cssList.add(CSS_3);
	}

	/**
	 * JS
	 */
	public static String JS_1 = "js/sh-main.js";

	public static List<String> jsList;
	static {
		List<String> jsList = new ArrayList<String>();
		jsList.add(JS_1);
	}

	/**
	 * Parameters table
	 */
	public static List<String> tableHeaders = new ArrayList<String>();

	static {
		tableHeaders.add("Name");
		tableHeaders.add("Description");
		tableHeaders.add("Required?");
	}

}
