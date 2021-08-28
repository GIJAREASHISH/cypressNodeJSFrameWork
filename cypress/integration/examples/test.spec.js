
/// <reference types="Cypress" />
const supportModules = require('../../support');
let users = require('../../support/users.js');



context('HRM Scenario Verification ', () => {
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

  it('Verify Login ', () => {

    cy.visit("https://opensource-demo.orangehrmlive.com")

    cy.loginIn({ username: users.email, password: users.password });


  })

  it('Verify Home page ', () => {

    supportModules.home.verifyMenu()


  })

  it('Verify leave page ', () => {

    supportModules.leave.assignLeave()


  })

  it('Verify admin page ', () => {

    supportModules.admin.searchAdminUserandVerify()


  })
})