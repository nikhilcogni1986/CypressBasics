/// <reference types="cypress"/>
import 'cypress-iframe';


describe('Hamdling iFrames Demo', function(){

    it('iFrames Test in Cypress', function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.frameLoaded("#courses-iframe")
        cy.iframe().find("nav.main-menu ul li:nth-child(2) a[href*='courses']").eq(1).click({force:true})


    })
})