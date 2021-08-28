/// <reference types="Cypress" />

module.exports = { 

  //Enter details on leave form
    assignLeave : function assignLeave(){

      cy.get("input[name='assignleave[txtEmployee][empName]']").type("test")
      cy.get("select[name='assignleave[txtLeaveType]']").type("US-Vacation")
      cy.get("input[name='assignleave[txtFromDate]']").type("2021-08-28")
      cy.get("input[name='assignleave[txtToDate]]").type("2021-08-28")
 
      cy.get("button[type='button'][value='Assign']").click({force:true})
        
    },

    //Verify Text on leave page
    verifyText: function verifyText(){

    }
  
  }