/// <reference types="cypress"/>
describe('Login test scenario', function(){
    it('Login To Lambda Test', function(){
        cy.visit("https://ecommerce-playground.lambdatest.io/index.php?route=account/login")
        cy.url().should('include','account/login')
        cy.get("#input-email").clear().type("nikhiltest@test.com")
        cy.get("#input-password").clear().type("Password1234")
        cy.get("input.btn.btn-primary").click()

        //Valid whether login was successful
        cy.get("#entry_217838").should('be.visible')

        //logout
        cy.get("a[href*='logout'] i").click()
    })
})    