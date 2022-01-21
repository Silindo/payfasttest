const superTest = require('supertest');
const chai = require('chai');
const expect = chai.expect;

const request = require("supertest")("https://swapi.dev/api/planets/3/");
const expect = require("chai").expect;

describe("POST https://swapi.dev/api/planets/3/", function () {
    it("verify header", async function () {
      const response = await request
        .post("https://swapi.dev/api/planets/3/");
  
      expect(response.status).to.eql(200);

test("Status code is 200", function () { pm.response.to.have.status(200); });

//Check Server
test("Check Server", function () {
        response.to.have.header("Server");
    });

//Check date
test("Check date", function () {
        response.to.have.header("Date");
    });

//Check Content-Type
test("//Check Content-Type", function () {
        response.to.have.header("Content-Type");
    });

//Check Transfer-Encoding
test("Check Transfer-Encoding", function () {
        response.to.have.header("Transfer-Encoding");
    });

//Check Connection
test("Check Connection", function () {
        response.to.have.header("Connection");
    });

//Check Vary
test("Check Vary", function () {
        response.to.have.header("Vary");
    });

//Check X-Frame-Options
test("Check X-Frame-Options", function () {
        response.to.have.header("X-Frame-Options");
    });
//Check ETag
test("Check ETag", function () {
        response.to.have.header("ETag");
    });
}); 

});