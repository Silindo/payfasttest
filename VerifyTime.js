describe("POST https://swapi.dev/api/planets/3/", function () {
    it("verify header", async function () {
      const response = await request
        .post("https://swapi.dev/api/planets/3/");
  
      expect(response.status).to.eql(200);

//verify response time
test("Check that time does not exceed 3ms", function () {
    expect(pm.response.responseTime).to.be.below(3);
});
});
});