/// <reference types="cypress"/>

describe('Child Tab Demo', function(){

    it('Child Tab Test in Cypress', function(){

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        //click on child Tab
        cy.get("#opentab").invoke('removeAttr', 'target').click()
        cy.url().should('include','https://www.rahulshettyacademy.com/')
        cy.go('back')
    })
})