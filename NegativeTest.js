describe("POST https://swapi.dev/api/planets/3/", function () {
    it("verify header", async function () {
      const response = await request
        .post("https://swapi.dev/api/planets/3/");
  
      expect(response.status).to.eql(200);

//Chec error message
test("Response Body", () => {
  const responseJson = pm.response.json();
  expect(responseJson.detail).to.eql("Method 'POST' not allowed.")
 
});
});
});
