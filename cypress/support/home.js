const cypress = require("cypress")


module.exports = { 

    verifyMenu : function verifyMenu(){

    var menu=["Admin","PIM","Leave","Time","Recruitment","My Info","Performance","Dashboard","Directory","Maintenance","Buzz"]

    cy.get("main-menu-first-level-list-item").each(($menu,index)=>{

      cy.wrap($menu).invoke('text').then((text)=>{
        cy.wrap({menuNew:menu[index]}).its('menuNew').should('eq',text)

      })

    })

    }
  
  }