/// <reference types="Cypress" />

module.exports = { 

    //Verify search admin user
      searchAdminUserandVerify : function searchAdminUserandVerify(){
  
        cy.get("input[name='searchSystemUser[userName]']").type("Alice.Duval")
        cy.get('input[class="searchbutton"]').click({force:true})
       var count= cy.readFile('cypress/fixtures/employee.json')
       var totalLength=Object. keys(count). length;
        cy.fixture('employee.json').then((employee) => {
            for(var i=0;i<totalLength;i++){
        cy.get('tr[class="odd"]>td[class="left"]').contains(employee[i])
            }
            })
          
      },
  
      //Verify Text on leave page
      verifyText: function verifyText(){
  
      }
    
    }