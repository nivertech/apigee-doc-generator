{ "@xmlns" : "http://wadl.dev.java.net/2009/02",
  "@xmlns:apigee" : "http://api.apigee.com/wadl/2010/07/",
  "@xmlns:xsd" : "http://www.w3.org/2001/XMLSchema",
  "@xmlns:xsi" : "http://www.w3.org/2001/XMLSchema-instance",
  "@xsi:schemaLocation" : "http://wadl.dev.java.net/2009/02 http://apigee.com/schemas/wadl-schema.xsd http://api.apigee.com/wadl/2010/07/ http://apigee.com/schemas/apigee-wadl-extensions.xsd",
  "resources" : { "@base" : "https://api.isidorey.net/v0.9",
      "api" : [ { "@name" : "CORE API",
            "@text" : "The Isidorey API is a secure gateway to your device data, cloud data store, and device rules engine.  The current version is 0.9, and can be accessed at https://api.isidorey.net/v0.9/ with basic authentication (username/password) that equate to a company ID and an API key",
            "resource" : [ { "@path" : "/CALLS",
                  "method" : { "@apigee:displayName" : "GET",
                      "@id" : "CALLS_GET",
                      "@name" : "GET",
                      "@xmlns:apigee" : "http://api.apigee.com/wadl/2010/07/",
                      "apigee:authentication" : { "@required" : "true" },
                      "apigee:example" : { "@url" : "https://api.isidorey.net/v0.9/CALLS" },
                      "apigee:tags" : { "apigee:tag" : { "#text" : "CALLS",
                              "@primary" : "true"
                            } },
                      "doc" : { "#text" : "A list of all available API calls.",
                          "@apigee:url" : "https://api.isidorey.net/v0.9/CALLS",
                          "@title" : ""
                        }
                    }
                },
                { "@path" : "/LOGIN",
                  "method" : { "@apigee:displayName" : "GET",
                      "@id" : "LOGIN_GET",
                      "@name" : "GET",
                      "@xmlns:apigee" : "http://api.apigee.com/wadl/2010/07/",
                      "apigee:authentication" : { "@required" : "true" },
                      "apigee:example" : { "@url" : "https://api.isidorey.net/v0.9/LOGIN" },
                      "apigee:tags" : { "apigee:tag" : { "#text" : "LOGIN",
                              "@primary" : "true"
                            } },
                      "doc" : { "#text" : "A list of permissions pertaining to the authenticated API key.",
                          "@apigee:url" : "https://api.isidorey.net/v0.9/LOGIN",
                          "@title" : ""
                        }
                    }
                },
                { "@path" : "/APIKEY",
                  "method" : { "@apigee:displayName" : "POST",
                      "@id" : "APIKEY_POST",
                      "@name" : "POST",
                      "@xmlns:apigee" : "http://api.apigee.com/wadl/2010/07/",
                      "apigee:authentication" : { "@required" : "true" },
                      "apigee:example" : { "@url" : "https://api.isidorey.net/v0.9/APIKEY" },
                      "apigee:tags" : { "apigee:tag" : { "#text" : "APIKEY",
                              "@primary" : "true"
                            } },
                      "doc" : { "#text" : "Creates a new API key",
                          "@apigee:url" : "https://api.isidorey.net/v0.9/APIKEY",
                          "@title" : ""
                        },
                      "request" : { "description" : [ { "@param" : "email",
                                "@text" : " This parameter is either your company, or a sub-company, in which you are adding a new API key to"
                              },
                              { "@param" : "companyId",
                                "@text" : "This parameter is the e-mail address of a user or group to associate the API key with.  This e-mail address does not have to be associated with a COMPANYPROJECTUSER of the company"
                              }
                            ],
                          "param" : [ { "@default" : "",
                                "@name" : "email",
                                "@required" : "true",
                                "@style" : "query"
                              },
                              { "@default" : "",
                                "@name" : "companyId",
                                "@required" : "true",
                                "@style" : "query"
                              }
                            ]
                        }
                    }
                },
                { "@path" : "/APIKEYTOPIC",
                  "method" : { "@apigee:displayName" : "POST",
                      "@id" : "APIKEYTOPIC_POST",
                      "@name" : "POST",
                      "@xmlns:apigee" : "http://api.apigee.com/wadl/2010/07/",
                      "apigee:authentication" : { "@required" : "true" },
                      "apigee:example" : { "@url" : "https://api.isidorey.net/v0.9/APIKEYTOPIC/{companyId}" },
                      "apigee:tags" : { "apigee:tag" : { "#text" : "APIKEYTOPIC",
                              "@primary" : "true"
                            } },
                      "description" : { "@text" : "The company, or sub-company, that the API key you are adding pub/sub permissions to is associated with",
                          "@uriparam" : "companyId"
                        },
                      "doc" : { "#text" : "Adds MQTT (pub/sub) permissions to an API key. This allows you to publish and subscribe to messages on device namespaces.",
                          "@apigee:url" : "https://api.isidorey.net/v0.9/APIKEYTOPIC",
                          "@title" : ""
                        },
                      "request" : { "description" : [ { "@param" : "apiKey",
                                "@text" : "The API key you are adding pub/sub permissions to"
                              },
                              { "@param" : "topic",
                                "@text" : "The topic in which you are adding pub/sub permissions to, e.g. {company}/#, or a device namespace, e.g. {company}/{project}/{tag}/{asset}/#"
                              },
                              { "@param" : "sub",
                                "@text" : "Allows the API key to subscribe, or not, to data published on the specified topic"
                              },
                              { "@param" : "pub",
                                "@text" : "Allows the API key, and any device associated with it, to publish data, or not, on the specified topic"
                              }
                            ],
                          "param" : [ { "@default" : "",
                                "@name" : "apiKey",
                                "@required" : "true",
                                "@style" : "query"
                              },
                              { "@default" : "",
                                "@name" : "topic",
                                "@required" : "true",
                                "@style" : "query"
                              },
                              { "@default" : "true||false",
                                "@name" : "sub",
                                "@required" : "true",
                                "@style" : "query"
                              },
                              { "@default" : "true||false",
                                "@name" : "pub",
                                "@required" : "true",
                                "@style" : "query"
                              }
                            ]
                        }
                    }
                },
                { "@path" : "/APIKEYTOPIC",
                  "method" : { "@apigee:displayName" : "DELETE",
                      "@id" : "APIKEYTOPIC_DELETE",
                      "@name" : "DELETE",
                      "@xmlns:apigee" : "http://api.apigee.com/wadl/2010/07/",
                      "apigee:authentication" : { "@required" : "true" },
                      "apigee:example" : { "@url" : "https://api.isidorey.net/v0.9/APIKEYTOPIC/{companyId}" },
                      "apigee:tags" : { "apigee:tag" : { "#text" : "APIKEYTOPIC",
                              "@primary" : "true"
                            } },
                      "description" : [ { "@text" : "The API key you are removing pub/sub permissions from",
                            "@uriparam" : "apiKey"
                          },
                          { "@text" : "This is defaulted at MqttTopic",
                            "@uriparam" : "acl"
                          },
                          { "@text" : "The topic in which you are removing pub/sub permissions to, e.g. {company}/pound, or {company}/{project}/{tag}/{asset}/pound",
                            "@uriparam" : "topic"
                          }
                        ],
                      "doc" : { "#text" : "Removes MQTT (pub/sub) permissions from an API key on a specified topicor namespace.",
                          "@apigee:url" : "https://api.isidorey.net/v0.9/APIKEYTOPIC",
                          "@title" : ""
                        }
                    }
                },
                { "@path" : "/APIKEYURL",
                  "method" : { "@apigee:displayName" : "POST",
                      "@id" : "APIKEYURL_POST",
                      "@name" : "POST",
                      "@xmlns:apigee" : "http://api.apigee.com/wadl/2010/07/",
                      "apigee:authentication" : { "@required" : "true" },
                      "apigee:example" : { "@url" : "https://api.isidorey.net/v0.9/APIKEYURL/{companyId}" },
                      "apigee:tags" : { "apigee:tag" : { "#text" : "APIKEYURL",
                              "@primary" : "true"
                            } },
                      "description" : { "@text" : "The company, or sub-company, that the API key you are adding API permissions to is associated with",
                          "@uriparam" : "companyId"
                        },
                      "doc" : { "#text" : "Adds API permissions to an API key depending on the specified call andcompany ID.",
                          "@apigee:url" : "https://api.isidorey.net/v0.9/APIKEYURL/{companyId}",
                          "@title" : ""
                        },
                      "request" : { "description" : [ { "@param" : "apiKey",
                                "@text" : "The API key you are adding URL permissions to"
                              },
                              { "@param" : "call",
                                "@text" : "The API call that makes up the URL"
                              },
                              { "@param" : "path",
                                "@text" : "The specific path, usually company related, that makes up the URL"
                              },
                              { "@param" : "post",
                                "@text" : "Allows the API key to make POST requests, or not, to the URL"
                              },
                              { "@param" : "get",
                                "@text" : "Allows the API key to make GET requests, or not, on the URL"
                              },
                              { "@param" : "delete",
                                "@text" : "Allows the API key to make DELETE requests, or not, on the URL"
                              }
                            ],
                          "param" : [ { "@default" : "",
                                "@name" : "apiKey",
                                "@required" : "true",
                                "@style" : "query"
                              },
                              { "@default" : "",
                                "@name" : "call",
                                "@required" : "true",
                                "@style" : "query"
                              },
                              { "@default" : "/#",
                                "@name" : "path",
                                "@required" : "true",
                                "@style" : "query"
                              },
                              { "@default" : "true||false",
                                "@name" : "post",
                                "@required" : "true",
                                "@style" : "query"
                              },
                              { "@default" : "true||false",
                                "@name" : "get",
                                "@required" : "true",
                                "@style" : "query"
                              },
                              { "@default" : "true||false",
                                "@name" : "delete",
                                "@required" : "true",
                                "@style" : "query"
                              }
                            ]
                        }
                    }
                },
                { "@path" : "/APIKEYURL",
                  "method" : { "@apigee:displayName" : "DELETE",
                      "@id" : "APIKEYURL_DELETE",
                      "@name" : "DELETE",
                      "@xmlns:apigee" : "http://api.apigee.com/wadl/2010/07/",
                      "apigee:authentication" : { "@required" : "true" },
                      "apigee:example" : { "@url" : "https://api.isidorey.net/v0.9/APIKEYURL/?apiKey={apiKey}&acl=ApiUrl&namespace={namespace}" },
                      "apigee:tags" : { "apigee:tag" : { "#text" : "APIKEYURL",
                              "@primary" : "true"
                            } },
                      "description" : [ { "@text" : "The API key you are removing URL permissions from",
                            "@uriparam" : "apiKey"
                          },
                          { "@text" : "This is defaulted at ApiUrl",
                            "@uriparam" : "acl"
                          },
                          { "@text" : "The namespace in which you are removing API permissions from, e.g. {company}/#, or {company}/{project}/{tag}/{asset}/#",
                            "@uriparam" : "namespace"
                          }
                        ],
                      "doc" : { "#text" : "Removes API permissions to an API key depending on the specified call and company ID.",
                          "@apigee:url" : "https://api.isidorey.net/v0.9/APIKEYURL",
                          "@title" : ""
                        }
                    }
                },
                { "@path" : "/COMPANY",
                  "method" : { "@apigee:displayName" : "GET",
                      "@id" : "COMPANY_GET",
                      "@name" : "GET",
                      "@xmlns:apigee" : "http://api.apigee.com/wadl/2010/07/",
                      "apigee:authentication" : { "@required" : "true" },
                      "apigee:example" : { "@url" : "https://api.isidorey.net/v0.9/COMPANY/{companyId}" },
                      "apigee:tags" : { "apigee:tag" : { "#text" : "COMPANY",
                              "@primary" : "true"
                            } },
                      "description" : { "@text" : "The company, or sub-company, to get information for",
                          "@uriparam" : "companyId"
                        },
                      "doc" : { "#text" : "Lists information associated with a company.",
                          "@apigee:url" : "https://api.isidorey.net/v0.9/COMPANY",
                          "@title" : ""
                        }
                    }
                },
                { "@path" : "/COMPANY",
                  "method" : { "@apigee:displayName" : "POST",
                      "@id" : "COMPANY_POST",
                      "@name" : "POST",
                      "@xmlns:apigee" : "http://api.apigee.com/wadl/2010/07/",
                      "apigee:authentication" : { "@required" : "true" },
                      "apigee:example" : { "@url" : "https://api.isidorey.net/v0.9/COMPANY/{companyId}/" },
                      "apigee:tags" : { "apigee:tag" : { "#text" : "COMPANY",
                              "@primary" : "true"
                            } },
                      "description" : { "@text" : "The company, or sub-company, associated with permissioning",
                          "@uriparam" : "companyId"
                        },
                      "doc" : { "#text" : "Creates a new company, sub-company, or updates a current company, or sub-company.",
                          "@apigee:url" : "https://api.isidorey.net/v0.9/COMPANY/",
                          "@title" : ""
                        },
                      "request" : { "description" : [ { "@param" : "fullname",
                                "@text" : "The name of the new company, or sub-company"
                              },
                              { "@optional" : "true",
                                "@param" : "subCompanyId",
                                "@text" : "The ID of the sub-company to update"
                              },
                              { "@optional" : "true",
                                "@param" : "companyId",
                                "@text" : "The ID of the company to update"
                              }
                            ],
                          "param" : [ { "@default" : "",
                                "@name" : "fullname",
                                "@required" : "true",
                                "@style" : "query"
                              },
                              { "@default" : "",
                                "@name" : "subCompanyId",
                                "@required" : "false",
                                "@style" : "query"
                              },
                              { "@default" : "",
                                "@name" : "companyId",
                                "@required" : "false",
                                "@style" : "query"
                              }
                            ]
                        }
                    }
                },
                { "@path" : "/COMPANYPROJECT",
                  "method" : { "@apigee:displayName" : "GET",
                      "@id" : "COMPANYPROJECT_GET",
                      "@name" : "GET",
                      "@xmlns:apigee" : "http://api.apigee.com/wadl/2010/07/",
                      "apigee:authentication" : { "@required" : "true" },
                      "apigee:example" : { "@url" : "https://api.isidorey.net/v0.9/COMPANYPROJECT/{companyId}/{projectId}" },
                      "apigee:tags" : { "apigee:tag" : { "#text" : "COMPANYPROJECT",
                              "@primary" : "true"
                            } },
                      "description" : [ { "@text" : "The company ID the project is associated with",
                            "@uriparam" : "companyId"
                          },
                          { "@text" : "The project ID whose infomration to list",
                            "@uriparam" : "projectId"
                          }
                        ],
                      "doc" : { "#text" : "Lists information associated with a company's, or sub-company's, project.",
                          "@apigee:url" : "https://api.isidorey.net/v0.9/COMPANYPROJECT",
                          "@title" : ""
                        }
                    }
                },
                { "@path" : "/COMPANYPROJECT",
                  "method" : { "@apigee:displayName" : "POST",
                      "@id" : "COMPANYPROJECT_POST",
                      "@name" : "POST",
                      "@xmlns:apigee" : "http://api.apigee.com/wadl/2010/07/",
                      "apigee:authentication" : { "@required" : "true" },
                      "apigee:example" : { "@url" : "https://api.isidorey.net/v0.9/COMPANYPROJECT/{companyId}" },
                      "apigee:tags" : { "apigee:tag" : { "#text" : "COMPANYPROJECT",
                              "@primary" : "true"
                            } },
                      "doc" : { "#text" : "Creates a new project under a given company, or sub-company.",
                          "@apigee:url" : "https://api.isidorey.net/v0.9/COMPANYPROJECT",
                          "@title" : ""
                        },
                      "request" : { "description" : [ { "@param" : "name",
                                "@text" : "The name of the new project"
                              },
                              { "@param" : "description",
                                "@text" : "The description of the new project"
                              },
                              { "@param" : "projectId",
                                "@text" : "The ID of the project to update"
                              }
                            ],
                          "param" : [ { "@default" : "",
                                "@name" : "name",
                                "@required" : "true",
                                "@style" : "query"
                              },
                              { "@default" : "",
                                "@name" : "description",
                                "@required" : "true",
                                "@style" : "query"
                              },
                              { "@default" : "",
                                "@name" : "projectId",
                                "@required" : "false",
                                "@style" : "query"
                              }
                            ]
                        }
                    }
                },
                { "@path" : "/COMPANYPROJECT",
                  "method" : { "@apigee:displayName" : "DELETE",
                      "@id" : "COMPANYPROJECT_DELETE",
                      "@name" : "DELETE",
                      "@xmlns:apigee" : "http://api.apigee.com/wadl/2010/07/",
                      "apigee:authentication" : { "@required" : "true" },
                      "apigee:example" : { "@url" : "https://api.isidorey.net/v0.9/COMPANYPROJECT/{companyId}/{projectId}" },
                      "apigee:tags" : { "apigee:tag" : { "#text" : "COMPANYPROJECT",
                              "@primary" : "true"
                            } },
                      "description" : [ { "@text" : "The company ID the project is associated with",
                            "@uriparam" : "companyId"
                          },
                          { "@text" : "The project ID to delete",
                            "@uriparam" : "projectId"
                          }
                        ],
                      "doc" : { "#text" : "Removes the given project from the company or sub-company.",
                          "@apigee:url" : "https://api.isidorey.net/v0.9/COMPANYPROJECT_DELETE",
                          "@title" : ""
                        }
                    }
                },
                { "@path" : "/COMPANYPROJECTDEVICE",
                  "method" : { "@apigee:displayName" : "GET",
                      "@id" : "COMPANYPROJECTDEVICE_GET",
                      "@name" : "GET",
                      "@xmlns:apigee" : "http://api.apigee.com/wadl/2010/07/",
                      "apigee:authentication" : { "@required" : "true" },
                      "apigee:example" : { "@url" : "https://api.isidorey.net/v0.9/COMPANYPROJECTDEVICE/{companyId}/{projectId}?limit=1000&prevKey={deviceId}&showRecycle={true||false}" },
                      "apigee:tags" : { "apigee:tag" : { "#text" : "COMPANYPROJECTDEVICE",
                              "@primary" : "true"
                            } },
                      "description" : [ { "@text" : "The company ID the device is associated with",
                            "@uriparam" : "companyId"
                          },
                          { "@text" : "The project ID the device is associated with",
                            "@uriparam" : "projectId"
                          },
                          { "@optional" : "true",
                            "@text" : "Defaults to 100, maxes at 1000 ",
                            "@uriparam" : "limit"
                          },
                          { "@optional" : "true",
                            "@text" : "The device ID that we paginate from",
                            "@uriparam" : "prevKey"
                          },
                          { "@optional" : "true",
                            "@text" : "Deleted devices, which can stay around depending on the license, can be viewed this way",
                            "@uriparam" : "showRecycle"
                          }
                        ],
                      "doc" : { "#text" : "Lists the devices releated to a project.",
                          "@apigee:url" : "https://api.isidorey.net/v0.9/COMPANYPROJECTDEVICE_GET",
                          "@title" : ""
                        }
                    }
                },
                { "@path" : "/COMPANYPROJECTDEVICE",
                  "method" : { "@apigee:displayName" : "POST",
                      "@id" : "COMPANYPROJECTDEVICE_POST",
                      "@name" : "POST",
                      "@xmlns:apigee" : "http://api.apigee.com/wadl/2010/07/",
                      "apigee:authentication" : { "@required" : "true" },
                      "apigee:example" : { "@url" : "https://api.isidorey.net/v0.9/COMPANYPROJECTDEVICE/{companyId}/{projectId}" },
                      "apigee:tags" : { "apigee:tag" : { "#text" : "COMPANYPROJECTDEVICE",
                              "@primary" : "true"
                            } },
                      "description" : [ { "@text" : "The company ID the device is associated with",
                            "@uriparam" : "companyId"
                          },
                          { "@text" : "The project ID the device is associated with",
                            "@uriparam" : "projectId"
                          }
                        ],
                      "doc" : { "#text" : "Updates, or adds, metadata relating to a specific device ID.",
                          "@apigee:url" : "https://api.isidorey.net/v0.9/COMPANYPROJECTDEVICE_POST",
                          "@title" : ""
                        },
                      "request" : { "description" : { "@param" : "deviceId",
                              "@text" : "The deviceID to update or add metadata to"
                            },
                          "param" : { "@default" : "",
                              "@name" : "deviceId",
                              "@required" : "true",
                              "@style" : "query"
                            }
                        }
                    }
                },
                { "@path" : "/COMPANYPROJECTDEVICE",
                  "method" : { "@apigee:displayName" : "DELETE",
                      "@id" : "COMPANYPROJECTDEVICE_DELETE",
                      "@name" : "DELETE",
                      "@xmlns:apigee" : "http://api.apigee.com/wadl/2010/07/",
                      "apigee:authentication" : { "@required" : "true" },
                      "apigee:example" : { "@url" : "https://api.isidorey.net/v0.9/COMPANYPROJECTDEVICE/{companyId}/{projectId}/{deviceId}" },
                      "apigee:tags" : { "apigee:tag" : { "#text" : "COMPANYPROJECTDEVICE",
                              "@primary" : "true"
                            } },
                      "doc" : { "#text" : "Removes a device from a given project by putting it in the \"Recycle Bin\".  Data pertaining to the device will stick around for a period of time, or indefinitely, depending on the license.",
                          "@apigee:url" : "https://api.isidorey.net/v0.9/COMPANYPROJECTDEVICE_DELETE",
                          "@title" : ""
                        }
                    }
                },
                { "@path" : "/COMPANYPROJECTUSER_GET",
                  "method" : { "@apigee:displayName" : "GET",
                      "@id" : "COMPANYPROJECTUSER_GET",
                      "@name" : "GET",
                      "@xmlns:apigee" : "http://api.apigee.com/wadl/2010/07/",
                      "apigee:authentication" : { "@required" : "true" },
                      "apigee:example" : { "@url" : "https://api.isidorey.net/v0.9/COMPANYPROJECTUSER/{companyId}/{projectId}/{email}" },
                      "apigee:tags" : { "apigee:tag" : { "#text" : "COMPANYPROJECTUSER",
                              "@primary" : "true"
                            } },
                      "description" : [ { "@text" : "The company ID the user is associated with",
                            "@uriparam" : "companyId"
                          },
                          { "@text" : "The project ID the user is associated with",
                            "@uriparam" : "projectId"
                          },
                          { "@text" : "The e-mail address of the user",
                            "@uriparam" : "email"
                          }
                        ],
                      "doc" : { "#text" : "Lists the information related to a user in a company or sub-company.",
                          "@apigee:url" : "https://api.isidorey.net/v0.9/COMPANYPROJECTUSER",
                          "@title" : ""
                        }
                    }
                },
                { "@path" : "/COMPANYPROJECTUSER_POST",
                  "method" : { "@apigee:displayName" : "POST",
                      "@id" : "COMPANYPROJECTUSER_POST",
                      "@name" : "POST",
                      "@xmlns:apigee" : "http://api.apigee.com/wadl/2010/07/",
                      "apigee:authentication" : { "@required" : "true" },
                      "apigee:example" : { "@url" : "https://api.isidorey.net/v0.9/COMPANYPROJECTUSER/{companyId}/{projectId}" },
                      "apigee:tags" : { "apigee:tag" : { "#text" : "COMPANYPROJECTUSER",
                              "@primary" : "true"
                            } },
                      "description" : [ { "@text" : "The company ID the user will be associated with",
                            "@uriparam" : "companyId"
                          },
                          { "@text" : "The project ID the user will be associated with",
                            "@uriparam" : "projectId"
                          }
                        ],
                      "doc" : { "#text" : "Adds a user to a given project in a company or sub-company.",
                          "@apigee:url" : "https://api.isidorey.net/v0.9/COMPANYPROJECTUSER",
                          "@title" : ""
                        },
                      "request" : { "param" : { "@default" : "",
                              "@name" : "email",
                              "@required" : "true",
                              "@style" : "query"
                            } }
                    }
                },
                { "@path" : "/COMPANYPROJECTUSER",
                  "method" : { "@apigee:displayName" : "DELETE",
                      "@id" : "COMPANYPROJECTUSER_DELETE",
                      "@name" : "DELETE",
                      "@xmlns:apigee" : "http://api.apigee.com/wadl/2010/07/",
                      "apigee:authentication" : { "@required" : "true" },
                      "apigee:example" : { "@url" : "https://api.isidorey.net/v0.9/COMPANYPROJECTUSER/{companyId}/{projectId}/{email}" },
                      "apigee:tags" : { "apigee:tag" : { "#text" : "COMPANYPROJECTUSER",
                              "@primary" : "true"
                            } },
                      "description" : [ { "@text" : "The company ID the project is associated with",
                            "@uriparam" : "companyId"
                          },
                          { "@text" : "The project ID to remove the user from",
                            "@uriparam" : "projectId"
                          },
                          { "@uriparam" : "email, The e-mail address of the user" }
                        ],
                      "doc" : { "#text" : "Removes a user from a given project in a company or sub-company.",
                          "@apigee:url" : "https://api.isidorey.net/v0.9/COMPANYPROJECTUSER_DELETE",
                          "@title" : ""
                        }
                    }
                },
                { "@path" : "/FILELISTING",
                  "method" : { "@apigee:displayName" : "FILELISTING",
                      "@id" : "FILELISTING",
                      "@name" : "GET",
                      "@xmlns:apigee" : "http://api.apigee.com/wadl/2010/07/",
                      "apigee:authentication" : { "@required" : "true" },
                      "apigee:example" : { "@url" : "https://api.isidorey.net/v0.9/FILELISTING/{bucket}" },
                      "apigee:tags" : { "apigee:tag" : { "#text" : "FILELISTING",
                              "@primary" : "true"
                            } },
                      "description" : { "@text" : "The bucket, or company/sub-company ID to list files from",
                          "@uriparam" : "bucket"
                        },
                      "doc" : { "#text" : "Lists all the files in a given bucket.",
                          "@apigee:url" : "https://api.isidorey.net/v0.9/FILELISTING",
                          "@title" : ""
                        }
                    }
                },
                { "@path" : "/UPLOADFILE",
                  "method" : { "@apigee:displayName" : "POST",
                      "@id" : "UPLOADFILE",
                      "@name" : "POST",
                      "@xmlns:apigee" : "http://api.apigee.com/wadl/2010/07/",
                      "apigee:authentication" : { "@required" : "true" },
                      "apigee:example" : { "@url" : "https://api.isidorey.net/v0.9/UPLOADFILE/{bucket}/{filename}?folder={folder}&override={true||false}&makePublic={true||false}" },
                      "apigee:tags" : { "apigee:tag" : { "#text" : "UPLOADFILE",
                              "@primary" : "true"
                            } },
                      "description" : [ { "@text" : "The bucket, or company/sub-company ID to upload the file to",
                            "@uriparam" : "bucket"
                          },
                          { "@text" : "The local/remote name of the file",
                            "@uriparam" : "filename"
                          },
                          { "@optional" : "true",
                            "@text" : "The remote storage path of the file, e.g. /remote/storage/path",
                            "@uriparam" : "folder"
                          },
                          { "@optional" : "true",
                            "@text" : "Force an existing file to be overwritten",
                            "@uriparam" : "override"
                          },
                          { "@optional" : "true",
                            "@text" : "Make the file available for HTTP or torrent download via an S3 URL",
                            "@uriparam" : "makePublic"
                          }
                        ],
                      "doc" : { "#text" : "Uploads a file to a bucket with a 10MB maximum. If the file exists, itwill not be overwritten by default. By default, the file is not publicly available.",
                          "@apigee:url" : "https://api.isidorey.net/v0.9/UPLOADFILE",
                          "@title" : ""
                        }
                    }
                },
                { "@path" : "/DOWNLOADFILE",
                  "method" : { "@apigee:displayName" : "DOWNLOADFILE",
                      "@id" : "DOWNLOADFILE",
                      "@name" : "GET",
                      "@xmlns:apigee" : "http://api.apigee.com/wadl/2010/07/",
                      "apigee:authentication" : { "@required" : "true" },
                      "apigee:example" : { "@url" : "https://api.isidorey.net/v0.9/DOWNLOADFILE/{bucket}/{filename}?folder={folder}" },
                      "apigee:tags" : { "apigee:tag" : { "#text" : "DOWNLOADFILE",
                              "@primary" : "true"
                            } },
                      "description" : [ { "@text" : "The bucket, or company/sub-company ID to grab the file from",
                            "@uriparam" : "bucket"
                          },
                          { "@text" : "The remote name of the file",
                            "@uriparam" : "filename"
                          },
                          { "@optional" : "true",
                            "@text" : "The remote storage path of the file, e.g. /remote/storage/path",
                            "@uriparam" : "folder"
                          }
                        ],
                      "doc" : { "#text" : "Downloads a file from our cloud file storage given a bucket and filename, with an optional sub-folder specified.",
                          "@apigee:url" : "https://api.isidorey.net/v0.9/DOWNLOADFILE",
                          "@title" : ""
                        }
                    }
                },
                { "@path" : "/DELETEFILE",
                  "method" : { "@apigee:displayName" : "DELETEFILE",
                      "@id" : "DELETEFILE",
                      "@name" : "DELETE",
                      "@xmlns:apigee" : "http://api.apigee.com/wadl/2010/07/",
                      "apigee:authentication" : { "@required" : "true" },
                      "apigee:example" : { "@url" : "https://api.isidorey.net/v0.9/DELETEFILE/{bucket}/{filename}?folder={folder}" },
                      "apigee:tags" : { "apigee:tag" : { "#text" : "DELETEFILE",
                              "@primary" : "true"
                            } },
                      "description" : [ { "@text" : "The bucket, or company/sub-company ID to delete the file from",
                            "@uriparam" : "bucket"
                          },
                          { "@text" : "The remote name of the file",
                            "@uriparam" : "filename"
                          },
                          { "@optional" : "true",
                            "@text" : "The remote storage path of the file, e.g. /remote/storage/path",
                            "@uriparam" : "folder"
                          }
                        ],
                      "doc" : { "#text" : "Deletes a file from our secure cloud file storage given a bucket and filename.",
                          "@apigee:url" : "https://api.isidorey.net/v0.9/DOWNLOADFILE",
                          "@title" : ""
                        }
                    }
                },
                { "@path" : "/PUBLISH",
                  "method" : { "@apigee:displayName" : "POST",
                      "@id" : "PUBLISH",
                      "@name" : "POST",
                      "@xmlns:apigee" : "http://api.apigee.com/wadl/2010/07/",
                      "apigee:authentication" : { "@required" : "true" },
                      "apigee:example" : { "@url" : "https://api.isidorey.net/v0.9/PUBLISH/{companyId}/{projectId}/{tag}/{asset}" },
                      "apigee:tags" : { "apigee:tag" : { "#text" : "PUBLISH",
                              "@primary" : "true"
                            } },
                      "description" : [ { "@text" : "The company ID in the namespace of the device",
                            "@uriparam" : "companyId"
                          },
                          { "@text" : "The project ID in the namespace of the device",
                            "@uriparam" : "projectId"
                          },
                          { "@text" : "The tag in the namespace of the device",
                            "@uriparam" : "tag"
                          },
                          { "@text" : "The asset in the namespace of the device",
                            "@uriparam" : "asset"
                          }
                        ],
                      "doc" : { "#text" : "Publishes data to the platform, e.g. sends data and emulates a device inits entirety.",
                          "@apigee:url" : "https://api.isidorey.net/v0.9/PUBLISH",
                          "@title" : ""
                        },
                      "request" : { "description" : [ { "@param" : "field",
                                "@text" : "The field in the namepsace of the device"
                              },
                              { "@param" : "key",
                                "@text" : "key/value pairs to make available in LIVE, HISTORY like a standard device"
                              }
                            ],
                          "param" : [ { "@default" : "",
                                "@name" : "field",
                                "@required" : "true",
                                "@style" : "query"
                              },
                              { "@default" : "value",
                                "@name" : "key",
                                "@required" : "true",
                                "@style" : "query"
                              }
                            ]
                        }
                    }
                },
                { "@path" : "/REALTIME",
                  "method" : { "@apigee:displayName" : "POST",
                      "@id" : "REALTIME",
                      "@name" : "POST",
                      "@xmlns:apigee" : "http://api.apigee.com/wadl/2010/07/",
                      "apigee:authentication" : { "@required" : "true" },
                      "apigee:example" : { "@url" : "https://api.isidorey.net/v0.9/REALTIME/{companyId}/{projectId}/{tag}/{asset}" },
                      "apigee:tags" : { "apigee:tag" : { "#text" : "REALTIME",
                              "@primary" : "true"
                            } },
                      "doc" : { "#text" : "Publishes data to the platform, e.g. sends data and emulates a device inits entirety, but skips the datatstore.",
                          "@apigee:url" : "https://api.isidorey.net/v0.9/REALTIME",
                          "@title" : ""
                        }
                    }
                },
                { "@path" : "/LIVE",
                  "method" : { "@apigee:displayName" : "GET",
                      "@id" : "LIVE_GET",
                      "@name" : "GET",
                      "@xmlns:apigee" : "http://api.apigee.com/wadl/2010/07/",
                      "apigee:authentication" : { "@required" : "true" },
                      "apigee:example" : { "@url" : "https://api.isidorey.net/v0.9/LIVE/{companyId}/{projectId}/{tag}/{asset}" },
                      "apigee:tags" : { "apigee:tag" : { "#text" : "LIVE",
                              "@primary" : "true"
                            } },
                      "description" : [ { "@text" : "The company ID in the namespace of the device",
                            "@uriparam" : "companyId"
                          },
                          { "@text" : "The project ID in the namespace of the device",
                            "@uriparam" : "projectId"
                          },
                          { "@text" : "The tag in the namespace of the device",
                            "@uriparam" : "tag"
                          },
                          { "@text" : "The asset in the namespace of the device",
                            "@uriparam" : "asset"
                          }
                        ],
                      "doc" : { "#text" : "Lists last known fields and entries sent to the platform for a given device.",
                          "@apigee:url" : "https://api.isidorey.net/v0.9/LIVE_GET",
                          "@title" : ""
                        }
                    }
                },
                { "@path" : "/LIVE",
                  "method" : { "@apigee:displayName" : "POST",
                      "@id" : "LIVE_POST",
                      "@name" : "POST",
                      "@xmlns:apigee" : "http://api.apigee.com/wadl/2010/07/",
                      "apigee:authentication" : { "@required" : "true" },
                      "apigee:example" : { "@url" : "https://api.isidorey.net/v0.9/LIVE/{companyId}/{projectId}/{tag}/{asset}/{field}" },
                      "apigee:tags" : { "apigee:tag" : { "#text" : "LIVE",
                              "@primary" : "true"
                            } },
                      "description" : [ { "@text" : "The company ID in the namespace of the device",
                            "@uriparam" : "companyId"
                          },
                          { "@text" : "The project ID in the namespace of the device",
                            "@uriparam" : "projectId"
                          },
                          { "@text" : "The tag in the namespace of the device",
                            "@uriparam" : "tag"
                          },
                          { "@text" : "The asset in the namespace of the device",
                            "@uriparam" : "asset"
                          },
                          { "@text" : "The field in the namespace of the device",
                            "@uriparam" : "field"
                          }
                        ],
                      "doc" : { "#text" : "Adds a new key/value pair to field in LIVE.",
                          "@apigee:url" : "https://api.isidsorey.net/v0.9/LIVE",
                          "@title" : ""
                        },
                      "request" : { "description" : { "@param" : "key",
                              "@text" : "The key/value pair to add to LIVE"
                            },
                          "param" : { "@default" : "value",
                              "@name" : "key",
                              "@required" : "true",
                              "@style" : "query"
                            }
                        }
                    }
                },
                { "@path" : "/LIVE",
                  "method" : { "@apigee:displayName" : "DELETE",
                      "@id" : "LIVE_DELETE",
                      "@name" : "DELETE",
                      "@xmlns:apigee" : "http://api.apigee.com/wadl/2010/07/",
                      "apigee:authentication" : { "@required" : "true" },
                      "apigee:example" : { "@url" : "https://api.isidorey.net/v0.9/LIVE/{companyId}/{projectId}/{tag}/{asset}?field={field}&entry={entry}" },
                      "apigee:tags" : { "apigee:tag" : { "#text" : "LIVE",
                              "@primary" : "true"
                            } },
                      "description" : [ { "@text" : "The company ID in the namespace of the device",
                            "@uriparam" : "companyId"
                          },
                          { "@text" : "The project ID in the namespace of the device",
                            "@uriparam" : "projectId"
                          },
                          { "@text" : "The tag in the namespace of the device",
                            "@uriparam" : "tag"
                          },
                          { "@text" : "The asset in the namespace of the device",
                            "@uriparam" : "asset"
                          },
                          { "@text" : "The field in the namespace of the device",
                            "@uriparam" : "field"
                          },
                          { "@optional" : "true",
                            "@text" : "The specific entry in the namespace of the device to delete",
                            "@uriparam" : "entry"
                          }
                        ],
                      "doc" : { "#text" : "Deletes a given record from LIVE data storage. Specifying field deletes the key/value pair, while not specifying it removes the entire entry.",
                          "@apigee:url" : "https://api.isidorey.net/v0.9/LIVE",
                          "@title" : ""
                        }
                    }
                },
                { "@path" : "/HISTORY/FIELD",
                  "method" : { "@apigee:displayName" : "GET (FIELD)",
                      "@id" : "HISTORY_FIELD",
                      "@name" : "GET",
                      "@xmlns:apigee" : "http://api.apigee.com/wadl/2010/07/",
                      "apigee:authentication" : { "@required" : "true" },
                      "apigee:example" : { "@url" : "https://api.isidorey.net/v0.9/HISTORY/{companyId}/{projectId}/{tag}/{asset}/{field}?limit={limit}&prevKey={prevKey}&olderEpoch={olderEpoch}&newerEpoch={newerEpoch}" },
                      "apigee:tags" : { "apigee:tag" : { "#text" : "HISTORY",
                              "@primary" : "true"
                            } },
                      "description" : [ { "@text" : "The company ID in the namespace of the device",
                            "@uriparam" : "companyId"
                          },
                          { "@text" : "The project ID in the namespace of the device",
                            "@uriparam" : "projectId"
                          },
                          { "@text" : "The tag in the namespace of the device",
                            "@uriparam" : "tag"
                          },
                          { "@text" : "The asset in the namespace of the device",
                            "@uriparam" : "asset"
                          },
                          { "@text" : "The field in the namespace of the device",
                            "@uriparam" : "field"
                          },
                          { "@text" : "Defaults to max of 1000",
                            "@uriparam" : "limit"
                          },
                          { "@text" : "To paginate, use this option",
                            "@uriparam" : "prevKey"
                          }
                        ],
                      "doc" : { "#text" : "Lists time ordered historicals record for the given field. prevKey should be used in combination with limit to facilitate paging in your application. Pass in a range of epochs for time-based history search.",
                          "@apigee:url" : "https://api.isidorey.net/v0.9/HISTORY",
                          "@title" : ""
                        }
                    }
                },
                { "@path" : "/HISTORY/FIELD/ENTRY",
                  "method" : { "@apigee:displayName" : "GET (ENTRY)",
                      "@id" : "HISTORY_FIELD_ENTRY",
                      "@name" : "GET",
                      "@xmlns:apigee" : "http://api.apigee.com/wadl/2010/07/",
                      "apigee:authentication" : { "@required" : "true" },
                      "apigee:example" : { "@url" : "https://api.isidorey.net/v0.9/HISTORY/{companyId}/{projectId}/{tag}/{asset}/{field}/{entry}?limit={limit}&prevKey={prevKey}&olderEpoch={olderEpoch}&newerEpoch={newerEpoch}" },
                      "apigee:tags" : { "apigee:tag" : { "#text" : "HISTORY",
                              "@primary" : "true"
                            } },
                      "description" : [ { "@text" : "The company ID in the namespace of the device",
                            "@uriparam" : "companyId"
                          },
                          { "@text" : "The project ID in the namespace of the device",
                            "@uriparam" : "projectId"
                          },
                          { "@text" : "The tag in the namespace of the device",
                            "@uriparam" : "tag"
                          },
                          { "@text" : "The asset in the namespace of the device",
                            "@uriparam" : "asset"
                          },
                          { "@text" : "The field in the namespace of the device",
                            "@uriparam" : "field"
                          },
                          { "@text" : "The entry in the namespace of the device",
                            "@uriparam" : "entry"
                          },
                          { "@text" : "Defaults to max of 1000",
                            "@uriparam" : "limit"
                          },
                          { "@text" : "To paginate, use this option",
                            "@uriparam" : "prevKey"
                          }
                        ],
                      "doc" : { "#text" : "Lists time ordered historical records for the given field's specific entry. prevKey should be used in combination with limit to facilitate paging in your application. Pass in a range of epochs for time-based history search. ",
                          "@apigee:url" : "https://api.isidorey.net/v0.9/HISTORY",
                          "@title" : ""
                        }
                    }
                }
              ]
          },
          { "@name" : "RULESENGINE API",
            "@text" : "The rules engine was was created for realtime evaluation of thresholds based on incoming device data.  Device data can be anything from a server's CPU usage to GPS coordinates.  The criteria you specify determines the threshold aand the target configuration determines the notification mechanism.",
            "resource" : [ { "@path" : "/RULESENGINE/criteria",
                  "method" : { "@apigee:displayName" : "criteria (POST)",
                      "@id" : "CRITERIA_POST",
                      "@name" : "POST",
                      "@xmlns:apigee" : "http://api.apigee.com/wadl/2010/07/",
                      "apigee:authentication" : { "@required" : "true" },
                      "apigee:example" : { "@url" : "https://api.isidorey.net/v0.9/RULESENGINE/criteria/" },
                      "apigee:tags" : { "apigee:tag" : [ { "#text" : "RULESENGINE API",
                                "@primary" : "true"
                              },
                              "Create a criterion"
                            ] },
                      "doc" : { "#text" : "Create a criterion. Every rule needs at least one criterion. A criterion can be a part of multiple rules. You can update this criterion at any time. If you have more than one criterion in place, and turn if off, the rule will still work with the other criteria. If the criterion is turned off, and is a part of other rules, those will also ignore the criterion. A criterion maps to the <field>/<entry> of your device.",
                          "@apigee:url" : "https://api.isidorey.net/v0.9/RULESENGINE/criteria/",
                          "@title" : ""
                        },
                      "request" : { "description" : [ { "@param" : "isActive",
                                "@text" : "This parameter provides the least interference when turning on/off rules firing.  If the criterion is false and part of an active rule, it will not be evaluated"
                              },
                              { "@param" : "field",
                                "@text" : "This parameter is really defined by the {field}/{entry}; of your device's reporting namespace, which would be {company}/{project}/{tag}/{asset}/{field}/{entry}.  If there is a JSON mapping between the protocol and your LIVE data, either the LIVE record can be used or the actual way the device sends data"
                              },
                              { "@param" : "value",
                                "@text" : "For non-nested values, this is simply the value associated with the {entry}, and the threshold value for firing a rule"
                              },
                              { "@param" : "operator",
                                "@text" : "This parameter defines which way the threshold value will be evaluated"
                              },
                              { "@optional" : "true",
                                "@param" : "criteriaId",
                                "@text" : "This parameter is used for updating, or upserting, a criterion"
                              }
                            ],
                          "param" : [ { "@default" : "true||false",
                                "@name" : "isActive",
                                "@required" : "true",
                                "@style" : "query"
                              },
                              { "@default" : "sensor/entry",
                                "@name" : "field",
                                "@required" : "true",
                                "@style" : "query"
                              },
                              { "@default" : "",
                                "@name" : "value",
                                "@required" : "true",
                                "@style" : "query"
                              },
                              { "@default" : "GT||GTE||LT||LTE||EQ||NEQ||CONTAINS||DOES_NOT_CONTAIN",
                                "@name" : "operator",
                                "@required" : "true",
                                "@style" : "query"
                              },
                              { "@default" : "",
                                "@name" : "criteriaId",
                                "@required" : "false",
                                "@style" : "query"
                              }
                            ]
                        }
                    }
                },
                { "@path" : "/RULESENGINE/criteria",
                  "method" : { "@apigee:displayName" : "criteria (GET)",
                      "@id" : "CRITERIA_GET",
                      "@name" : "GET",
                      "@xmlns:apigee" : "http://api.apigee.com/wadl/2010/07/",
                      "apigee:authentication" : { "@required" : "true" },
                      "apigee:example" : { "@url" : "https://api.isidorey.net/v0.9/RULESENGINE/criteria?criteriaId={criteriaId}" },
                      "apigee:tags" : { "apigee:tag" : { "#text" : "RULESENGINE API",
                              "@primary" : "true"
                            } },
                      "description" : { "@text" : "The criterion ID in which to display",
                          "@uriparam" : "criteriaId"
                        },
                      "doc" : { "#text" : "Get a criterion.",
                          "@apigee:url" : "https://api.isidorey.net/v0.9/RULESENGINE/criteria",
                          "@title" : ""
                        }
                    }
                },
                { "@path" : "/RULESENGINE/criteria",
                  "method" : { "@apigee:displayName" : "criteria (GET ALL)",
                      "@id" : "CRITERIA_GET_ALL",
                      "@name" : "GET",
                      "@xmlns:apigee" : "http://api.apigee.com/wadl/2010/07/",
                      "apigee:authentication" : { "@required" : "true" },
                      "apigee:example" : { "@url" : "https://api.isidorey.net/v0.9/RULESENGINE/criteria" },
                      "apigee:tags" : { "apigee:tag" : { "#text" : "RULESENGINE API",
                              "@primary" : "true"
                            } },
                      "doc" : { "#text" : "Get all criterion.",
                          "@apigee:url" : "https://api.isidorey.net/v0.9/RULESENGINE/criteria",
                          "@title" : ""
                        }
                    }
                },
                { "@path" : "/RULESENGINE/criteria",
                  "method" : { "@apigee:displayName" : "criteria (DELETE)",
                      "@id" : "CRITERIA_DELETE",
                      "@name" : "DELETE",
                      "@xmlns:apigee" : "http://api.apigee.com/wadl/2010/07/",
                      "apigee:authentication" : { "@required" : "true" },
                      "apigee:example" : { "@url" : "https://api.isidorey.net/v0.9/RULESENGINE/criteria?criteriaId={criteriaId}" },
                      "apigee:tags" : { "apigee:tag" : { "#text" : "RULESENGINE API",
                              "@primary" : "true"
                            } },
                      "description" : { "@text" : "The criterion ID in which to delete",
                          "@uriparam" : "criteriaId"
                        },
                      "doc" : { "#text" : "Delete a criterion.",
                          "@apigee:url" : "https://api.isidorey.net/v0.9/RULESENGINE/criteria",
                          "@title" : ""
                        }
                    }
                },
                { "@path" : "/RULESENGINE/target",
                  "method" : { "@apigee:displayName" : "target (POST)",
                      "@id" : "TARGET_POST",
                      "@name" : "POST",
                      "@xmlns:apigee" : "http://api.apigee.com/wadl/2010/07/",
                      "apigee:authentication" : { "@required" : "true" },
                      "apigee:example" : { "@url" : "/v0.9/RULESENGINE/target/" },
                      "apigee:tags" : { "apigee:tag" : { "#text" : "RULESENGINE API",
                              "@primary" : "true"
                            } },
                      "doc" : { "#text" : "Create a target. Every rule needs a target. A target can be a part ofmultiple rules. A target only requires one notifcation parameter to be specified.",
                          "@apigee:url" : "https://api.isidorey.net/v0.9/RULESENGINE/target/",
                          "@title" : ""
                        },
                      "request" : { "description" : [ { "@optional" : "true",
                                "@param" : "email",
                                "@text" : "This parameter is the e-mail address of the target to be notified via e-mail on rule firing"
                              },
                              { "@optional" : "true",
                                "@param" : "webserviceUrl",
                                "@text" : "The standard firing message will be POSTed in key/value pairs to a URL."
                              },
                              { "@optional" : "true",
                                "@param" : "sms",
                                "@text" : "This parameter is the phone number of the target to be notified via text-messaging, or SMS, on rule firing.  If {sms} is specified, {smsAccessId}, {token}, and {from} must also be specified"
                              },
                              { "@optional" : "true",
                                "@param" : "from",
                                "@text" : "One of the provisioned phone numbers given to you by Isidorey"
                              },
                              { "@param" : "smsAccessId",
                                "@text" : "The SMS access ID given to you by Isiodrey"
                              },
                              { "@optional" : "true",
                                "@param" : "token",
                                "@text" : "The SMS token given to you by Isidorey"
                              },
                              { "@optional" : "true",
                                "@param" : "targetId",
                                "@text" : "This parameter is used for updating, or upserting, a target"
                              }
                            ],
                          "param" : [ { "@default" : "",
                                "@name" : "email",
                                "@required" : "false",
                                "@style" : "query"
                              },
                              { "@default" : "",
                                "@name" : "webserviceUrl",
                                "@required" : "false",
                                "@style" : "query"
                              },
                              { "@default" : "",
                                "@name" : "from",
                                "@required" : "false",
                                "@style" : "query"
                              },
                              { "@default" : "",
                                "@name" : "smsAccessId",
                                "@required" : "false",
                                "@style" : "query"
                              },
                              { "@default" : "",
                                "@name" : "token",
                                "@required" : "false",
                                "@style" : "query"
                              },
                              { "@default" : "",
                                "@name" : "targetId",
                                "@required" : "false",
                                "@style" : "query"
                              }
                            ]
                        }
                    }
                },
                { "@path" : "/RULESENGINE/target",
                  "method" : { "@apigee:displayName" : "target (GET)",
                      "@id" : "TARGET_GET",
                      "@name" : "GET",
                      "@xmlns:apigee" : "http://api.apigee.com/wadl/2010/07/",
                      "apigee:authentication" : { "@required" : "true" },
                      "apigee:example" : { "@url" : "https://api.isidorey.net/v0.9/RULESENGINE/target?targetId={targetId}" },
                      "apigee:tags" : { "apigee:tag" : { "#text" : "RULESENGINE API",
                              "@primary" : "true"
                            } },
                      "description" : { "@text" : "The target ID in which to display",
                          "@uriparam" : "targetId"
                        },
                      "doc" : { "#text" : "Get a target",
                          "@apigee:url" : "https://api.isidorey.net/v0.9/RULESENGINE/target",
                          "@title" : ""
                        }
                    }
                },
                { "@path" : "/RULESENGINE/target",
                  "method" : { "@apigee:displayName" : "target (GET ALL)",
                      "@id" : "TARGET_GET_ALL",
                      "@name" : "GET",
                      "@xmlns:apigee" : "http://api.apigee.com/wadl/2010/07/",
                      "apigee:authentication" : { "@required" : "true" },
                      "apigee:example" : { "@url" : "https://api.isidorey.net/v0.9/RULESENGINE/target" },
                      "apigee:tags" : { "apigee:tag" : { "#text" : "RULESENGINE API",
                              "@primary" : "true"
                            } },
                      "doc" : { "#text" : "Get all targets.",
                          "@apigee:url" : "https://api.isidorey.net/v0.9/RULESENGINE/target",
                          "@title" : ""
                        }
                    }
                },
                { "@path" : "v/RULESENGINE/target",
                  "method" : { "@apigee:displayName" : "target (DELETE)",
                      "@id" : "TARGET_DELETE",
                      "@name" : "DELETE",
                      "@xmlns:apigee" : "http://api.apigee.com/wadl/2010/07/",
                      "apigee:authentication" : { "@required" : "true" },
                      "apigee:example" : { "@url" : "https://api.isidorey.net/v0.9/RULESENGINE/target?targetId={targetId}" },
                      "apigee:tags" : { "apigee:tag" : { "#text" : "RULESENGINE API",
                              "@primary" : "true"
                            } },
                      "description" : { "@text" : "The target ID in which to delete",
                          "@uriparam" : "targetId"
                        },
                      "doc" : { "#text" : "Delete a target.",
                          "@apigee:url" : "https://api.isidorey.net/v0.9/RULESENGINE/target",
                          "@title" : ""
                        }
                    }
                },
                { "@path" : "/RULESENGINE/rule",
                  "method" : { "@apigee:displayName" : "rule (POST)",
                      "@id" : "RULE_POST",
                      "@name" : "POST",
                      "@xmlns:apigee" : "http://api.apigee.com/wadl/2010/07/",
                      "apigee:authentication" : { "@required" : "true" },
                      "apigee:example" : { "@url" : "https://api.isidorey.net/v0.9/RULESENGINE/rule/" },
                      "apigee:tags" : { "apigee:tag" : { "#text" : "RULESENGINE API",
                              "@primary" : "true"
                            } },
                      "doc" : { "#text" : "Create a rule. A rule is simply a description, and is the mapping between the device namespace, declared in the topicMapping, and the criteria, declared in the ruleMapping. It can be used to describe single rules or to describe groups of rules with similar criteria.",
                          "@apigee:url" : "https://api.isidorey.net/v0.9/RULESENGINE/rule/",
                          "@title" : ""
                        },
                      "request" : { "description" : [ { "@param" : "name",
                                "@text" : "This is the name of the rule"
                              },
                              { "@param" : "description",
                                "@text" : "This is the description of the rule"
                              },
                              { "@param" : "emailSubject",
                                "@text" : "This is the email subject of the rule"
                              },
                              { "@param" : "emailBody",
                                "@text" : "This parameter allows you to specify the email body of the SMS in 160 characters or less (variable depending on namespace, etc).  It will completely override the default SMS message. - replacements for emailSubject, emailBody and smsBody can be defined with the following replacement strings:     - @NAMESPACE@     - @RULE@     - @FIELD@     - @OPERATOR@     - @VALUE@"
                              },
                              { "@param" : "smsBody",
                                "@text" : "This parameter allows you to specify the message body of the SMS in 160 characters or less (variable depending on namespace, etc).  It will completely override the default SMS message. - replacements for emailSubject, emailBody and smsBody can be defined with the following replacement strings:     - @NAMESPACE@     - @RULE@     - @FIELD@     - @OPERATOR@     - @VALUE@"
                              },
                              { "@param" : "ruleId",
                                "@text" : "This parameter is used for updating, or upserting, a rule"
                              }
                            ],
                          "param" : [ { "@default" : "",
                                "@name" : "name",
                                "@required" : "true",
                                "@style" : "query"
                              },
                              { "@default" : "",
                                "@name" : "description",
                                "@required" : "true",
                                "@style" : "query"
                              },
                              { "@default" : "",
                                "@name" : "emailSubject",
                                "@required" : "false",
                                "@style" : "query"
                              },
                              { "@default" : "",
                                "@name" : "emailBody",
                                "@required" : "false",
                                "@style" : "query"
                              },
                              { "@default" : "",
                                "@name" : "smsBody",
                                "@required" : "false",
                                "@style" : "query"
                              },
                              { "@default" : "",
                                "@name" : "ruleId",
                                "@required" : "false",
                                "@style" : "query"
                              }
                            ]
                        }
                    }
                },
                { "@path" : "/RULESENGINE/rule",
                  "method" : { "@apigee:displayName" : "rule (GET)",
                      "@id" : "RULE_GET",
                      "@name" : "GET",
                      "@xmlns:apigee" : "http://api.apigee.com/wadl/2010/07/",
                      "apigee:authentication" : { "@required" : "true" },
                      "apigee:example" : { "@url" : "https://api.isidorey.net/v0.9/RULESENGINE/rule?ruleId={ruleId}" },
                      "apigee:tags" : { "apigee:tag" : { "#text" : "RULESENGINE API",
                              "@primary" : "true"
                            } },
                      "description" : { "@text" : "The rule ID to display",
                          "@uriparam" : "ruleId"
                        },
                      "doc" : { "#text" : "Get a rule.",
                          "@apigee:url" : "https://api.isidorey.net/v0.9/RULESENGINE/rule",
                          "@title" : ""
                        }
                    }
                },
                { "@path" : "/RULESENGINE/rule",
                  "method" : { "@apigee:displayName" : "rule (DELETE)",
                      "@id" : "RULE_DELETE",
                      "@name" : "DELETE",
                      "@xmlns:apigee" : "http://api.apigee.com/wadl/2010/07/",
                      "apigee:authentication" : { "@required" : "true" },
                      "apigee:example" : { "@url" : "https://api.isidorey.net/v0.9/RULESENGINE/rule?ruleId={ruleId}" },
                      "apigee:tags" : { "apigee:tag" : { "#text" : "RULESENGINE API",
                              "@primary" : "true"
                            } },
                      "description" : { "@text" : "The rule ID to delete",
                          "@uriparam" : "ruleId"
                        },
                      "doc" : { "#text" : "Delete a rule.",
                          "@apigee:url" : "https://api.isidorey.net/v0.9/RULESENGINE/rule",
                          "@title" : ""
                        }
                    }
                },
                { "@path" : "/RULESENGINE/topicMapping",
                  "method" : { "@apigee:displayName" : "topicMapping (POST)",
                      "@id" : "TOPICMAPPING_POST",
                      "@name" : "POST",
                      "@xmlns:apigee" : "http://api.apigee.com/wadl/2010/07/",
                      "apigee:authentication" : { "@required" : "true" },
                      "apigee:example" : { "@url" : "https://api.isidorey.net/v0.9/RULESENGINE/topicMapping/" },
                      "apigee:tags" : { "apigee:tag" : { "#text" : "RULESENGINE API",
                              "@primary" : "true"
                            } },
                      "doc" : { "#text" : "Create a topic mapping. A topic mapping maps a device's namespace to rules. This tells the engine to fire the rule when a matching namespace is active on the platform. You can go as high as the <company>/# attribute, effectivelychecking for a threshold on a criterion for every device that reports data.",
                          "@apigee:url" : "https://api.isidorey.net/v0.9/RULESENGINE/topicMapping/",
                          "@title" : ""
                        },
                      "request" : { "description" : [ { "@text" : "This parameter turns off the entire rule firing.  N amount of active criteria associated with this rule will still not be fired.  If there are two rules with two different topic mappings that have the same namespace, these will not affect each other",
                                "@uriparam" : "isActive"
                              },
                              { "@text" : "The namepsace in which we will trigger a rule check",
                                "@uriparam" : "namespace"
                              },
                              { "@text" : "This parameter is used for updating, or upserting, a topicMapping",
                                "@uriparam" : "topicID"
                              }
                            ],
                          "param" : [ { "@default" : "true||false",
                                "@name" : "isActive",
                                "@required" : "true",
                                "@style" : "query"
                              },
                              { "@default" : "",
                                "@name" : "namespace",
                                "@required" : "true",
                                "@style" : "query"
                              },
                              { "@default" : "",
                                "@name" : "topicId",
                                "@required" : "true",
                                "@style" : "query"
                              }
                            ]
                        }
                    }
                },
                { "@path" : "/RULESENGINE/topicMapping",
                  "method" : { "@apigee:displayName" : "topicMapping (GET ALL)",
                      "@id" : "TOPICMAPPING_GET_ALL",
                      "@name" : "GET",
                      "@xmlns:apigee" : "http://api.apigee.com/wadl/2010/07/",
                      "apigee:authentication" : { "@required" : "true" },
                      "apigee:example" : { "@url" : "https://api.isidorey.net/v0.9/RULESENGINE/topicMapping/" },
                      "apigee:tags" : { "apigee:tag" : { "#text" : "RULESENGINE API",
                              "@primary" : "true"
                            } },
                      "doc" : { "#text" : "Get all topic mappings.",
                          "@apigee:url" : "https://api.isidorey.net/v0.9/RULESENGINE/topicMapping",
                          "@title" : ""
                        }
                    }
                },
                { "@path" : "/RULESENGINE/topicMapping",
                  "method" : { "@apigee:displayName" : "topicMapping (GET)",
                      "@id" : "TOPICMAPPING_GET_MAPPING",
                      "@name" : "GET",
                      "@xmlns:apigee" : "http://api.apigee.com/wadl/2010/07/",
                      "apigee:authentication" : { "@required" : "true" },
                      "apigee:example" : { "@url" : "https://api.isidorey.net/v0.9/RULESENGINE/topicMapping?topicId={topicId}" },
                      "apigee:tags" : { "apigee:tag" : { "#text" : "RULESENGINE API",
                              "@primary" : "true"
                            } },
                      "description" : { "@text" : "The topic mapping to display based on topic ID",
                          "@uriparam" : "topicId"
                        },
                      "doc" : { "#text" : "Get a topic mapping by ID.",
                          "@apigee:url" : "https://api.isidorey.net/v0.9/RULESENGINE/topicMapping",
                          "@title" : ""
                        }
                    }
                },
                { "@path" : "/RULESENGINE/topicMapping",
                  "method" : { "@apigee:displayName" : "topicMapping (GET)",
                      "@id" : "TOPICMAPPING_GET_NAMESPACE",
                      "@name" : "GET",
                      "@xmlns:apigee" : "http://api.apigee.com/wadl/2010/07/",
                      "apigee:authentication" : { "@required" : "true" },
                      "apigee:example" : { "@url" : "https://api.isidorey.net/v0.9/RULESENGINE/topicMapping?namespace={namespace}" },
                      "apigee:tags" : { "apigee:tag" : { "#text" : "RULESENGINE API",
                              "@primary" : "true"
                            } },
                      "description" : { "@text" : "The namespace to get in regards to the topic mapping to display",
                          "@uriparam" : "namespace"
                        },
                      "doc" : { "#text" : "Get a topic mapping by namespace.",
                          "@apigee:url" : "https://api.isidorey.net/v0.9/RULESENGINE/topicMapping",
                          "@title" : ""
                        }
                    }
                },
                { "@path" : "/RULESENGINE/topicMapping",
                  "method" : { "@apigee:displayName" : "topicMapping (DELETE)",
                      "@id" : "TOPICMAPPING_DELETE",
                      "@name" : "DELETE",
                      "@xmlns:apigee" : "http://api.apigee.com/wadl/2010/07/",
                      "apigee:authentication" : { "@required" : "true" },
                      "apigee:example" : { "@url" : "https://api.isidorey.net/v0.9/RULESENGINE/topicMapping?topicMappingId={topicMappingId}" },
                      "apigee:tags" : { "apigee:tag" : [ { "#text" : "RULESENGINE API",
                                "@primary" : "true"
                              },
                              "Delete a topic mapping"
                            ] },
                      "description" : { "@text" : "The topic mapping ID to delete",
                          "@uriparam" : "topicId"
                        },
                      "doc" : { "#text" : "Delete a topic mapping.",
                          "@apigee:url" : "https://api.isidorey.net/v0.9/RULESENGINE/topicMapping",
                          "@title" : ""
                        }
                    }
                },
                { "@path" : "/RULESENGINE/ruleMapping",
                  "method" : { "@apigee:displayName" : "ruleMapping (POST)",
                      "@id" : "RULEMAPPING_POST",
                      "@name" : "POST",
                      "@xmlns:apigee" : "http://api.apigee.com/wadl/2010/07/",
                      "apigee:authentication" : { "@required" : "true" },
                      "apigee:example" : { "@url" : "https://api.isidorey.net/v0.9/RULESENGINE/ruleMapping/" },
                      "apigee:tags" : { "apigee:tag" : [ { "#text" : "RULESENGINE API",
                                "@primary" : "true"
                              },
                              "Create a rule mapping"
                            ] },
                      "doc" : { "#text" : "Create a rule mapping. A rule mapping is the final, relational step, between everything we've created so far. Here, we can specify the context in which the criteria get evaluated. Only one target can be specified; to push notifications to multiple targets would be a good use-case for <WEBSERVICE>.",
                          "@apigee:url" : "https://api.isidorey.net/v0.9/RULESENGINE/ruleMapping/",
                          "@title" : ""
                        },
                      "request" : { "description" : [ { "@param" : "ruleId",
                                "@text" : "This specifies the rule to group this mapping with.  Being able to change the name and description of the associated rule allows you to adapt and update as well"
                              },
                              { "@param" : "criteriaId1",
                                "@text" : "This specifies a single criterion to be associated with a rule and target"
                              },
                              { "@param" : "targetId",
                                "@text" : "This specifies a single target to be associated with a rule and criterion"
                              },
                              { "@param" : "andCriteria",
                                "@text" : "This specifies an AND evaluation of criteria1 && criteria2"
                              },
                              { "@param" : "orCriteria",
                                "@text" : "This specifies an OR evaluation of criteria1 && criteria2"
                              },
                              { "@param" : "criteriaId2",
                                "@text" : "If you want to specify another threshold to evaluate on, you must specify a second criterion"
                              },
                              { "@param" : "emailTarget",
                                "@text" : "If the target has this attribute available, you can specify an e-mail notification"
                              },
                              { "@param" : "smsTarget",
                                "@text" : "If the target has this attribute available, you can specify an SMS notification"
                              },
                              { "@param" : "webserviceTarget",
                                "@text" : "If the target has this attribute available, you can specify a webservice POST notification"
                              },
                              { "@param" : "ruleMappingId",
                                "@text" : "This parameter is used for updating, or upserting, a ruleMapping"
                              }
                            ],
                          "param" : [ { "@default" : "",
                                "@name" : "ruleId",
                                "@required" : "true",
                                "@style" : "query"
                              },
                              { "@default" : "",
                                "@name" : "criteriaId1",
                                "@required" : "true",
                                "@style" : "query"
                              },
                              { "@default" : "",
                                "@name" : "targetId",
                                "@required" : "true",
                                "@style" : "query"
                              },
                              { "@default" : "true||false",
                                "@name" : "andCriteria",
                                "@required" : "false",
                                "@style" : "query"
                              },
                              { "@default" : "true||false",
                                "@name" : "orCriteria",
                                "@required" : "false",
                                "@style" : "query"
                              },
                              { "@default" : "",
                                "@name" : "criteriaId2",
                                "@required" : "false",
                                "@style" : "query"
                              },
                              { "@default" : "true||false",
                                "@name" : "emailTarget",
                                "@required" : "false",
                                "@style" : "query"
                              },
                              { "@default" : "true||false",
                                "@name" : "smsTarget",
                                "@required" : "falase",
                                "@style" : "query"
                              },
                              { "@default" : "true||false",
                                "@name" : "webserviceTarget",
                                "@required" : "false",
                                "@style" : "query"
                              },
                              { "@default" : "",
                                "@name" : "ruleMappingId",
                                "@required" : "false",
                                "@style" : "query"
                              }
                            ]
                        }
                    }
                },
                { "@path" : "/RULESENGINE/ruleMapping",
                  "method" : { "@apigee:displayName" : "ruleMapping (GET)",
                      "@id" : "RULEMAPPING_GET_MAPPING",
                      "@name" : "GET",
                      "@xmlns:apigee" : "http://api.apigee.com/wadl/2010/07/",
                      "apigee:authentication" : { "@required" : "true" },
                      "apigee:example" : { "@url" : "https://api.isidorey.net/v0.9/RULESENGINE/ruleMapping?ruleMappingId={ruleMappingId}" },
                      "apigee:tags" : { "apigee:tag" : { "#text" : "RULESENGINE API",
                              "@primary" : "true"
                            } },
                      "description" : { "@text" : "The rule mapping to display",
                          "@uriparam" : "ruleMappingId"
                        },
                      "doc" : { "#text" : "Get a rule mapping.",
                          "@apigee:url" : "https://api.isidorey.net/v0.9/RULESENGINE/ruleMapping",
                          "@title" : ""
                        }
                    }
                },
                { "@path" : "/RULESENGINE/ruleMapping",
                  "method" : { "@apigee:displayName" : "ruleMapping (GET)",
                      "@id" : "RULEMAPPING_GET_RULE",
                      "@name" : "GET",
                      "@xmlns:apigee" : "http://api.apigee.com/wadl/2010/07/",
                      "apigee:authentication" : { "@required" : "true" },
                      "apigee:example" : { "@url" : "/v0.9/RULESENGINE/ruleMapping?ruleId={ruleId}" },
                      "apigee:tags" : { "apigee:tag" : { "#text" : "RULESENGINE API",
                              "@primary" : "true"
                            } },
                      "description" : { "@text" : "The rule mapping(s) to display based on rule ID",
                          "@uriparam" : "ruleId"
                        },
                      "doc" : { "#text" : "Get a rule mapping by rule ID.",
                          "@apigee:url" : "https://api.isidorey.net/v0.9/RULESENGINE/ruleMapping",
                          "@title" : ""
                        }
                    }
                },
                { "@path" : "/RULESENGINE/ruleMapping",
                  "method" : { "@apigee:displayName" : "ruleMapping (DELETE)",
                      "@id" : "RULEMAPPING_DELETE",
                      "@name" : "DELETE",
                      "@xmlns:apigee" : "http://api.apigee.com/wadl/2010/07/",
                      "apigee:authentication" : { "@required" : "true" },
                      "apigee:example" : { "@url" : "https://api.isidorey.net/v0.9/RULESENGINE/ruleMapping?ruleMappingId={ruleMappingId}" },
                      "apigee:tags" : { "apigee:tag" : { "#text" : "RULESENGINE API",
                              "@primary" : "true"
                            } },
                      "description" : { "@text" : "The rule mapping to delete",
                          "@uriparam" : "ruleMappingId"
                        },
                      "doc" : { "#text" : "Delete a rule mapping.",
                          "@apigee:url" : "https://api.isidorey.net/v0.9/RULESENGINE/ruleMapping",
                          "@title" : ""
                        }
                    }
                }
              ]
          },
          { "@name" : "CLOUDSANDRA API",
            "@text" : "Cloudsandra was integrated into the Isidorey API and replaced Metadata as the suggested method for mapping data to devices in v0.9. The most important thing to remember when it comes to the NoSQL world is data modeling: how you put data in is how you get data out. Cassandra documentation, located at http://wiki.apache.org/cassandra/DataModel, may help you with this. Cloudsandra documentation is not yet integrated with the Isidorey API doc, so please see http://www.cloudsandra.com/docs.",
            "resource" : [ { "@path" : "/COLUMNFAMILY",
                  "method" : { "@apigee:displayName" : "COLUMNFAMILY (POST)",
                      "@id" : "COLUMNFAMILY_POST",
                      "@name" : "POST",
                      "@xmlns:apigee" : "http://api.apigee.com/wadl/2010/07/",
                      "apigee:authentication" : { "@required" : "true" },
                      "apigee:example" : { "@url" : "https://api.isidorey.net/v0.9/COLUMNFAMILY/{cfName}/{cType}" },
                      "apigee:tags" : { "apigee:tag" : { "#text" : "CLOUDSANDRA API",
                              "@primary" : "true"
                            } },
                      "description" : [ { "@text" : "The name of the new column family, or table",
                            "@uriparam" : "cfName"
                          },
                          { "@text" : "The comparator type of column values can be one of the following: ASCIITYPE, BYTESTYPE, INTEGERTYPE, LEXICALUUIDTYPE, LONGTYPE, TIMEUUIDTYPE, UTF8TYPE, UUIDTYPE",
                            "@uriparam" : "cType"
                          }
                        ],
                      "doc" : { "#text" : "Creates a new column family.",
                          "@apigee:url" : "https://api.isidorey.net/v0.9/COLUMNFAMILY",
                          "@title" : ""
                        }
                    }
                },
                { "@path" : "/COLUMNFAMILY",
                  "method" : { "@apigee:displayName" : "COLUMNFAMILY (GET)",
                      "@id" : "COLUMNFAMILY_GET",
                      "@name" : "GET",
                      "@xmlns:apigee" : "http://api.apigee.com/wadl/2010/07/",
                      "apigee:authentication" : { "@required" : "true" },
                      "apigee:example" : { "@url" : "https://api.isidorey.net/v0.9/COLUMNFAMILY/{cfName}" },
                      "apigee:tags" : { "apigee:tag" : { "#text" : "CLOUDSANDRA API",
                              "@primary" : "true"
                            } },
                      "description" : { "@text" : "The name of the column family whose description you want to view",
                          "@uriparam" : "cfName"
                        },
                      "doc" : { "#text" : "Gets a column family's description.",
                          "@apigee:url" : "https://api.isidorey.net/v0.9/COLUMNFAMILY",
                          "@title" : ""
                        }
                    }
                },
                { "@path" : "/COLUMNFAMILY",
                  "method" : { "@apigee:displayName" : "COLUMNFAMILY (GET ALL)",
                      "@id" : "COLUMNFAMILY_GET_ALL",
                      "@name" : "GET",
                      "@xmlns:apigee" : "http://api.apigee.com/wadl/2010/07/",
                      "apigee:authentication" : { "@required" : "true" },
                      "apigee:example" : { "@url" : "https://api.isidorey.net/v0.9/COLUMNFAMILY" },
                      "apigee:tags" : { "apigee:tag" : [ { "#text" : "CLOUDSANDRA API",
                                "@primary" : "true"
                              },
                              "ColumnFamily Get All"
                            ] },
                      "doc" : { "#text" : "Gets all the column families associated with the company ID.",
                          "@apigee:url" : "https://api.isidorey.net/v0.9/COLUMNFAMILY",
                          "@title" : ""
                        }
                    }
                },
                { "@path" : "/COLUMNFAMILY",
                  "method" : { "@apigee:displayName" : "COLUMNFAMILY (DELETE)",
                      "@id" : "COLUMNFAMILY_DELETE",
                      "@name" : "DELETE",
                      "@xmlns:apigee" : "http://api.apigee.com/wadl/2010/07/",
                      "apigee:authentication" : { "@required" : "true" },
                      "apigee:example" : { "@url" : "https://api.isidorey.net/v0.9/COLUMNFAMILY/{cfName}" },
                      "apigee:tags" : { "apigee:tag" : { "#text" : "CLOUDSANDRA API",
                              "@primary" : "true"
                            } },
                      "description" : { "@text" : "The name of the column family to delete",
                          "@uriparam" : "cfName"
                        },
                      "doc" : { "#text" : "Deletes a specified column family.",
                          "@apigee:url" : "https://api.isidorey.net/v0.9/COLUMNFAMILY",
                          "@title" : ""
                        }
                    }
                },
                { "@path" : "/COLUMN",
                  "method" : { "@apigee:displayName" : "COLUMN (POST)",
                      "@id" : "COLUMN_POST",
                      "@name" : "POST",
                      "@xmlns:apigee" : "http://api.apigee.com/wadl/2010/07/",
                      "apigee:authentication" : { "@required" : "true" },
                      "apigee:example" : { "@url" : "https://api.isidorey.net/v0.9/COLUMN/{cfName}/{cName}/{cType}" },
                      "apigee:tags" : { "apigee:tag" : { "#text" : "CLOUDSANDRA API",
                              "@primary" : "true"
                            } },
                      "description" : [ { "@text" : "The name of the column family to create colum under",
                            "@uriparam" : "cfName"
                          },
                          { "@text" : "The name of the column to create",
                            "@uriparam" : "cName"
                          },
                          { "@text" : "The comparator type of the column can be one of the following: ASCIITYPE, BYTESTYPE, INTEGERTYPE, LEXICALUUIDTYPE, LONGTYPE, TIMEUUIDTYPE, UTF8TYPE, UUIDTYPE",
                            "@uriparam" : "cType"
                          }
                        ],
                      "doc" : { "#text" : "Creates a column that can be searchable in CQL if indexed.",
                          "@apigee:url" : "https://api.isidorey.net/v0.9/COLUMN",
                          "@title" : ""
                        },
                      "request" : { "description" : { "@param" : "isIndex",
                              "@text" : "Specify a true value to make the column searchable in a CQL query"
                            },
                          "param" : { "@default" : "true||false",
                              "@name" : "isIndex",
                              "@required" : "true",
                              "@style" : "query"
                            }
                        }
                    }
                },
                { "@path" : "/DATA",
                  "method" : { "@apigee:displayName" : "DATA (POST)",
                      "@id" : "DATA_POST",
                      "@name" : "POST",
                      "@xmlns:apigee" : "http://api.apigee.com/wadl/2010/07/",
                      "apigee:authentication" : { "@required" : "true" },
                      "apigee:example" : { "@url" : "https://api.isidorey.net/v0.9/DATA/{cfName}/{rowKey}?ttl={ttlInSeconds}&realtime={true/false}" },
                      "apigee:tags" : { "apigee:tag" : { "#text" : "CLOUDSANDRA API",
                              "@primary" : "true"
                            } },
                      "description" : [ { "@text" : "The name of the column family where the key is",
                            "@uriparam" : "cfName"
                          },
                          { "@text" : "The name of the row where data is being stored",
                            "@uriparam" : "rowKey"
                          },
                          { "@optional" : "true",
                            "@text" : "The time-to-live of the data in seconds",
                            "@uriparam" : "ttl"
                          },
                          { "@optional" : "true",
                            "@text" : "Sends data to a realtime channel as well",
                            "@uriparam" : "realtime"
                          }
                        ],
                      "doc" : { "#text" : "Posts data to a column family using the specified row.",
                          "@apigee:url" : "https://api.isidorey.net/v0.9/DATA",
                          "@title" : ""
                        },
                      "request" : { "description" : { "@param" : "key",
                              "@text" : "An limited amount of key/value pairs that represent data to be stored in the row"
                            },
                          "param" : { "@default" : "value",
                              "@name" : "key",
                              "@required" : "true",
                              "@style" : "query"
                            }
                        }
                    }
                },
                { "@path" : "/DATA",
                  "method" : { "@apigee:displayName" : "DATA (GET)",
                      "@id" : "DATA_GET",
                      "@name" : "GET",
                      "@xmlns:apigee" : "http://api.apigee.com/wadl/2010/07/",
                      "apigee:authentication" : { "@required" : "true" },
                      "apigee:example" : { "@url" : "https://api.isidorey.net/v0.9/DATA/{cfName}/{rowKey}?limit={limit}" },
                      "apigee:tags" : { "apigee:tag" : { "#text" : "CLOUDSANDRA API",
                              "@primary" : "true"
                            } },
                      "description" : [ { "@text" : "The name of the column family where the key is",
                            "@uriparam" : "cfName"
                          },
                          { "@text" : "The name of the key to get data from",
                            "@uriparam" : "rowKey"
                          },
                          { "@optional" : "true",
                            "@text" : "Specify the limit of the data to be returned",
                            "@uriparam" : "limit"
                          }
                        ],
                      "doc" : { "#text" : "Gets data from a column family with the given row key.",
                          "@apigee:url" : "https://api.isidorey.net/v0.9/DATA",
                          "@title" : ""
                        }
                    }
                },
                { "@path" : "/DATA",
                  "method" : { "@apigee:displayName" : "DATA DELETE (row)",
                      "@id" : "DATA_DELETE_ROW",
                      "@name" : "DELETE",
                      "@xmlns:apigee" : "http://api.apigee.com/wadl/2010/07/",
                      "apigee:authentication" : { "@required" : "true" },
                      "apigee:example" : { "@url" : "https://api.isidorey.net/v0.9/DATA/{cfName}/{rowKey}" },
                      "apigee:tags" : { "apigee:tag" : { "#text" : "CLOUDSANDRA API",
                              "@primary" : "true"
                            } },
                      "description" : [ { "@text" : "The name of the column family where the key is",
                            "@uriparam" : "cfName"
                          },
                          { "@text" : "The name of the row to delete",
                            "@uriparam" : "rowKey"
                          }
                        ],
                      "doc" : { "#text" : "Deletes all the data under a row. If a GET call is done after this, the key will return with no data.",
                          "@apigee:url" : "https://api.isidorey.net/v0.9/DATA",
                          "@title" : ""
                        }
                    }
                },
                { "@path" : "/DATA",
                  "method" : { "@apigee:displayName" : "DATA DELETE (key/value)",
                      "@id" : "DATA_DELETE_KEY",
                      "@name" : "DELETE",
                      "@xmlns:apigee" : "http://api.apigee.com/wadl/2010/07/",
                      "apigee:authentication" : { "@required" : "true" },
                      "apigee:example" : { "@url" : "https://api.isidorey.net/v0.9/DATA/{cfName}/{rowKey}/{field}" },
                      "apigee:tags" : { "apigee:tag" : { "#text" : "CLOUDSANDRA API",
                              "@primary" : "true"
                            } },
                      "description" : [ { "@text" : "The name of the column family where the key is",
                            "@uriparam" : "cfName"
                          },
                          { "@text" : "The name of the row",
                            "@uriparam" : "rowKey"
                          },
                          { "@text" : "The name of the key in the key/value pair to delete",
                            "@uriparam" : "field"
                          }
                        ],
                      "doc" : { "#text" : "Deletes a key/value pair under a key.",
                          "@apigee:url" : "https://api.isidorey.net/v0.9/DATA",
                          "@title" : ""
                        }
                    }
                },
                { "@path" : "/COUNTER",
                  "method" : { "@apigee:displayName" : "COUNTER (GET)",
                      "@id" : "COUNTER_GET",
                      "@name" : "GET",
                      "@xmlns:apigee" : "http://api.apigee.com/wadl/2010/07/",
                      "apigee:authentication" : { "@required" : "true" },
                      "apigee:example" : { "@url" : "https://api.isidorey.net/v0.9/COUNTER/{rowKey}/{cName}" },
                      "apigee:tags" : { "apigee:tag" : { "#text" : "CLOUDSANDRA API",
                              "@primary" : "true"
                            } },
                      "description" : [ { "@text" : "The name of the row key to associate a counter with",
                            "@uriparam" : "rowKey"
                          },
                          { "@text" : "The name of the counter",
                            "@uriparam" : "cName"
                          }
                        ],
                      "doc" : { "#text" : "Returns the current value of the specified counter.",
                          "@apigee:url" : "https://api.isidorey.net/v0.9/COUNTER",
                          "@title" : ""
                        }
                    }
                },
                { "@path" : "/COUNTER",
                  "method" : { "@apigee:displayName" : "COUNTER INCREMENT (POST)",
                      "@id" : "COUNTER_POST_INCREMENT",
                      "@name" : "POST",
                      "@xmlns:apigee" : "http://api.apigee.com/wadl/2010/07/",
                      "apigee:authentication" : { "@required" : "true" },
                      "apigee:example" : { "@url" : "https://api.isidorey.net/v0.9/COUNTER/{rowKey}/{cName}?increment={integer}" },
                      "apigee:tags" : { "apigee:tag" : { "#text" : "CLOUDSANDRA API",
                              "@primary" : "true"
                            } },
                      "description" : [ { "@text" : "The name of the row key to associate a counter with",
                            "@uriparam" : "rowKey"
                          },
                          { "@text" : "The name of the counter",
                            "@uriparam" : "cName"
                          },
                          { "@text" : "The value to change the counter",
                            "@uriparam" : "integer"
                          }
                        ],
                      "doc" : { "#text" : "Increments a counter.",
                          "@apigee:url" : "https://api.isidorey.net/v0.9/COUNTER",
                          "@title" : ""
                        }
                    }
                },
                { "@path" : "/COUNTER",
                  "method" : { "@apigee:displayName" : "COUNTER DECREMENT (POST)",
                      "@id" : "COUNTER_POST_DECREMENT",
                      "@name" : "POST",
                      "@xmlns:apigee" : "http://api.apigee.com/wadl/2010/07/",
                      "apigee:authentication" : { "@required" : "true" },
                      "apigee:example" : { "@url" : "https://api.isidorey.net/v0.9/COUNTER/{rowKey}/{cName}?decrement={integer}" },
                      "apigee:tags" : { "apigee:tag" : { "#text" : "CLOUDSANDRA API",
                              "@primary" : "true"
                            } },
                      "description" : [ { "@text" : "The name of the row key to associate a counter with",
                            "@uriparam" : "rowKey"
                          },
                          { "@text" : "The name of the counter",
                            "@uriparam" : "cName"
                          },
                          { "@text" : "The value to change the counter",
                            "@uriparam" : "integer"
                          }
                        ],
                      "doc" : { "#text" : "Decrements a counter.",
                          "@apigee:url" : "https://api.isidorey.net/v0.9/COUNTER",
                          "@title" : ""
                        }
                    }
                },
                { "@path" : "/CQL",
                  "method" : { "@apigee:displayName" : "CQL (GET)",
                      "@id" : "CQL_GET",
                      "@name" : "GET",
                      "@xmlns:apigee" : "http://api.apigee.com/wadl/2010/07/",
                      "apigee:authentication" : { "@required" : "true" },
                      "apigee:example" : { "@url" : "https://api.isidorey.net/v0.9/CQL/{cfName}?query={query}" },
                      "apigee:tags" : { "apigee:tag" : { "#text" : "CLOUDSANDRA API",
                              "@primary" : "true"
                            } },
                      "doc" : { "#text" : "CQL query example: SELECT * WHERE KEY = {rowKey} AND {index} = {value}",
                          "@apigee:url" : "https://api.isidorey.net/v0.9/CQL",
                          "@title" : ""
                        }
                    }
                }
              ]
          }
        ]
    }
}