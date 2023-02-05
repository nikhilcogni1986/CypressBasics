// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
require('cypress-xpath');

// -- This is a parent command --
Cypress.Commands.add('SelectProduct', product_name => {
    cy.get("h4.card-title a").each(($el, index, $list) =>{
        const product_name = $el.text()
        if(product_name.includes('Blackberry'))
        {
            cy.get("button.btn.btn-info").eq(index).click()
        }
    })    
})

Cypress.Commands.add('addProductToBasket', product_name => {
    cy.get("div.fixed_wrapper .fixed a").each(($el, index, $list) =>{
        if($el.text() === product_name)
        {
            cy.log($el.text())
            cy.get(".productcart").eq(index).click();
        }
    });    
});

//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })