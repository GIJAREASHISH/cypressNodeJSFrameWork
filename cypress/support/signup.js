/// <reference types="Cypress" />

module.exports = { 

  //Enter personal details for signup Page
    enterDetails : function enterDetails(){

      cy.get("input[name='firstname']").type("test")
      cy.get("input[name='lastname']").type("test")
      cy.get("input[name='reg_email__']").type("test@test.com")
      cy.get("input[name='reg_passwd__']").type("test@test.com")
      cy.get("input[type='radio'][value='2']").click()
   
      cy.get('#year').type(1986)
      cy.get("button[type='submit'][name='websubmit']").click({force:true})

 

        
    },

    //Verify Text on signup page
    verifyText: function verifyText(){
      cy.contains("Sign Up")
      cy.contains("It's quick and easy.")
      cy.contains("By clicking Sign Up, you agree to our Terms, Data Policy and Cookie Policy. You may receive SMS notifications from us and can opt out at any time.")

    }
  
  }