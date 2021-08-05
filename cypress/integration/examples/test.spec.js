
/// <reference types="Cypress" />
const supportModules = require('../../support');
let users = require('../../support/users.js');



context('Payment Scenario Verification ', () => {
  beforeEach(() => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test if uncaught exceptions from the application appear
      return false;
    });
    // Cypress.Cookies.defaults({
    //   preserve: /session|remember/
    // })
  })


  it('Verify signup page', () => {

    cy.viewport(1366, 768)

    cy.visit("https://facebook.com/")
    cy.get(':nth-child(11) > ._sv4').click({force:true})
    
    //Click on Signup
    cy.task('log','----Click on Signup-----')
    cy.contains("Sign Up").click({force:true})
    cy.wait(3000)

    //Verify Signup page text
    supportModules.signup.verifyText()
    //Enter details on signup page
    supportModules.signup.enterDetails()
    
  
  }),

  it('Verify Login', () => {

    cy.loginIn({ username: users.email, password: users.password });
 
})

})