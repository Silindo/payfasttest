const superTest = require('supertest');
const chai = require('chai');
const expect = chai.expect;

const request = require("supertest")("https://swapi.dev/api/planets/3/");
const expect = require("chai").expect;


describe("POST https://swapi.dev/api/planets/3/", function () {
    it("verify JSDON Schema", async function () {
      const response = await request
        .post("https://swapi.dev/api/planets/3/");
  
      expect(response.status).to.eql(200);

      //Schema 
      const schema = {
          "$schema": "http://json-schema.org/draft-07/schema",
          "$id": "http://example.com/example.json",
          "type": "object",
          "title": "The root schema",
          "description": "The root schema comprises the entire JSON document.",
          "default": {},
          "examples": [
              {
                  "name": "Yavin IV",
                  "rotation_period": "24",
                  "orbital_period": "4818",
                  "diameter": "10200",
                  "climate": "temperate, tropical",
                  "gravity": "1 standard",
                  "terrain": "jungle, rainforests",
                  "surface_water": "8",
                  "population": "1000",
                  "residents": [],
                  "films": [
                      "https://swapi.dev/api/films/1/"
                  ],
                  "created": "2014-12-10T11:37:19.144000Z",
                  "edited": "2014-12-20T20:58:18.421000Z",
                  "url": "https://swapi.dev/api/planets/3/"
              }
          ],
          "required": [
              "name",
              "rotation_period",
              "orbital_period",
              "diameter",
              "climate",
              "gravity",
              "terrain",
              "surface_water",
              "population",
              "residents",
              "films",
              "created",
              "edited",
              "url"
          ],
          "properties": {
              "name": {
                  "$id": "#/properties/name",
                  "type": "string",
                  "title": "The name schema",
                  "description": "An explanation about the purpose of this instance.",
                  "default": "",
                  "examples": [
                      "Yavin IV"
                  ]
              },
              "rotation_period": {
                  "$id": "#/properties/rotation_period",
                  "type": "string",
                  "title": "The rotation_period schema",
                  "description": "An explanation about the purpose of this instance.",
                  "default": "",
                  "examples": [
                      "24"
                  ]
              },
              "orbital_period": {
                  "$id": "#/properties/orbital_period",
                  "type": "string",
                  "title": "The orbital_period schema",
                  "description": "An explanation about the purpose of this instance.",
                  "default": "",
                  "examples": [
                      "4818"
                  ]
              },
              "diameter": {
                  "$id": "#/properties/diameter",
                  "type": "string",
                  "title": "The diameter schema",
                  "description": "An explanation about the purpose of this instance.",
                  "default": "",
                  "examples": [
                      "10200"
                  ]
              },
              "climate": {
                  "$id": "#/properties/climate",
                  "type": "string",
                  "title": "The climate schema",
                  "description": "An explanation about the purpose of this instance.",
                  "default": "",
                  "examples": [
                      "temperate, tropical"
                  ]
              },
              "gravity": {
                  "$id": "#/properties/gravity",
                  "type": "string",
                  "title": "The gravity schema",
                  "description": "An explanation about the purpose of this instance.",
                  "default": "",
                  "examples": [
                      "1 standard"
                  ]
              },
              "terrain": {
                  "$id": "#/properties/terrain",
                  "type": "string",
                  "title": "The terrain schema",
                  "description": "An explanation about the purpose of this instance.",
                  "default": "",
                  "examples": [
                      "jungle, rainforests"
                  ]
              },
              "surface_water": {
                  "$id": "#/properties/surface_water",
                  "type": "string",
                  "title": "The surface_water schema",
                  "description": "An explanation about the purpose of this instance.",
                  "default": "",
                  "examples": [
                      "8"
                  ]
              },
              "population": {
                  "$id": "#/properties/population",
                  "type": "string",
                  "title": "The population schema",
                  "description": "An explanation about the purpose of this instance.",
                  "default": "",
                  "examples": [
                      "1000"
                  ]
              },
              "residents": {
                  "$id": "#/properties/residents",
                  "type": "array",
                  "title": "The residents schema",
                  "description": "An explanation about the purpose of this instance.",
                  "default": [],
                  "examples": [
                      []
                  ],
                  "additionalItems": true,
                  "items": {
                      "$id": "#/properties/residents/items"
                  }
              },
              "films": {
                  "$id": "#/properties/films",
                  "type": "array",
                  "title": "The films schema",
                  "description": "An explanation about the purpose of this instance.",
                  "default": [],
                  "examples": [
                      [
                          "https://swapi.dev/api/films/1/"
                      ]
                  ],
                  "additionalItems": true,
                  "items": {
                      "$id": "#/properties/films/items",
                      "anyOf": [
                          {
                              "$id": "#/properties/films/items/anyOf/0",
                              "type": "string",
                              "title": "The first anyOf schema",
                              "description": "An explanation about the purpose of this instance.",
                              "default": "",
                              "examples": [
                                  "https://swapi.dev/api/films/1/"
                              ]
                          }
                      ]
                  }
              },
              "created": {
                  "$id": "#/properties/created",
                  "type": "string",
                  "title": "The created schema",
                  "description": "An explanation about the purpose of this instance.",
                  "default": "",
                  "examples": [
                      "2014-12-10T11:37:19.144000Z"
                  ]
              },
              "edited": {
                  "$id": "#/properties/edited",
                  "type": "string",
                  "title": "The edited schema",
                  "description": "An explanation about the purpose of this instance.",
                  "default": "",
                  "examples": [
                      "2014-12-20T20:58:18.421000Z"
                  ]
              },
              "url": {
                  "$id": "#/properties/url",
                  "type": "string",
                  "title": "The url schema",
                  "description": "An explanation about the purpose of this instance.",
                  "default": "",
                  "examples": [
                      "https://swapi.dev/api/planets/3/"
                  ]
              }
          },
          "additionalProperties": true
      };
      
      //check schema
      test("Validate schema", () => {
          response.to.have.jsonSchema(schema);
      });
});
});

