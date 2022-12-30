/// <reference types="cypress"/>

describe('Alert Test Demo', function(){

    it('Alert Test in Cypress', function(){

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        //click on alert
        cy.get('#name').type("Pranav")
        cy.get('#alertbtn').click()

        cy.on("window:alert", (str)=>{
            expect(str).to.equal('Hello Pranav, share this practice page and share your knowledge')
        })
        
        cy.get('#name').type("Pranav")
        cy.get("#confirmbtn").click()
        cy.on('window:confirm',(str)=>
        {
            //Mocha
            expect(str).to.equal('Hello Pranav, Are you sure you want to confirm?')
        })
    })
})