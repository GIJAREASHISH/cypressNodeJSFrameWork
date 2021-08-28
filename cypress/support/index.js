
const home = require('../support/home');
const leave = require('../support/leave');
const admin = require('../support/admin');


const addContext = require('mochawesome/addContext')
import "./commands"

// module.exports = { home};
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})



module.exports = { leave,home,admin
};


Cypress.on('test:after:run', (test, runnable) => {
    if (test.state === 'failed') {
        cy.screenshot()
        const screenshotFileName = `${runnable.parent.title} -- ${test.title} (failed).png`
        addContext({ test }, `assets/${Cypress.spec.name}/${screenshotFileName}`)
    }
})