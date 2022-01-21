const superTest = require('supertest');
const chai = require('chai');
const expect = chai.expect;

const request = require("supertest")("https://swapi.dev/api/planets/3/");
const expect = require("chai").expect;


describe("POST https://swapi.dev/api/planets/3/", function () {
    it("verify body data", async function () {
      const response = await request
        .post("https://swapi.dev/api/planets/3/")
  
      expect(response.status).to.eql(200);
  
      const attributes = response.body.data.attributes;
      expect(attributes).to.include.keys("name", "rotation_period", "orbital_period", "diameter", "climate", "gravity", "terrain", "surface_water", "population", "residents","films", "created", "edited","url");
      expect(attributes.name).to.eql('Yavin IV');
      expect(attributes.rotation_period).to.eql(24);
      expect(attributes.orbital_period).to.eql(4818);
      expect(attributes.diameter).to.eql(10200);
      expect(attributes.climate).to.eql("temperate, tropical");
      expect(attributes.gravity).to.eql("1 standard");
      expect(attributes.terrain).to.eql("jungle, rainforests");
      expect(attributes.surface_water).to.eql(8);
      expect(attributes.population).to.eql(1000);
      expect(attributes.residents).to.eql();
      expect(attributes.films).to.eql("https://swapi.dev/api/films/1/");
      expect(attributes.created).to.eql( "2014-12-10T11:37:19.144000Z");
      expect(attributes.edited).to.eql("2014-12-20T20:58:18.421000Z");
      expect(attributes.url).to.eql( "https://swapi.dev/api/planets/3/");

    });
  });





