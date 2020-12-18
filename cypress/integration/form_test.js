
describe("Main Test", function () {
    it("MVP TESTS", function () {
   
      cy.visit("http://localhost:3000/");
  
      cy.contains("Pizza!").click();
      cy.get("input[name=name]").type("TEST INPUT");
      cy.get("input[name=chicken]").check();
      cy.get("input[name=onions]").check();
      cy.get("input[name=sauce]").check();
      cy.get("select[name=size]").select("large");
      cy.get("button").click();
    });
  });