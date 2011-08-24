apigee-doc-generator
=====

Example
-----------------------------------
http://ec2-67-202-48-67.compute-1.amazonaws.com:9000/DOCUMENTATION

Usage
-----------------------------------

The core library will take an XML .wadl file, which APIGEE uses, and parse it into a usable model.  From the model, we parse it into HTML on the fly using an API call call /documentation.  An example test, along with a demo Play application, is included.