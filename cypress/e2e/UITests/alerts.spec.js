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

    it('Alert test on another practice website', ()=>{
        cy.visit("https://testautomationpractice.blogspot.com/")

        //click on Alert button
        cy.get('#HTML9 > .widget-content > button').click()
        cy.on('window:confirm',(alert_text)=>
        {
            //Mocha
            expect(alert_text).to.equal('Press a button!')
        })
    })

    it('Click on Confirm button on Javascript Alert', ()=>{
        cy.visit(Cypress.env("webdriveruni_url"));
        cy.get("a[href*='Popup-Alerts']").invoke('removeAttr','target').click();

        cy.get("#button4").click();
        cy.on('window:confirm',(text)=>{
            expect(text).to.equal('Press a button!');
        });
        cy.get('#confirm-alert-text').should('contain.text',"You pressed OK!");
    });

    it('Click on Cancel button on Javascript Alert', ()=>{
        cy.visit("http://www.webdriveruniversity.com");
        cy.get("a[href*='Popup-Alerts']").invoke('removeAttr','target').click();

        cy.get("#button4").click();
        cy.on('window:confirm',(text)=>{
            expect(text).to.equal('Press a button!');
            return false;
        });
        cy.get('#confirm-alert-text').should('contain.text',"You pressed Cancel!");
    });

    it.only('Javascript Alert example', ()=>{
        cy.visit("http://www.webdriveruniversity.com");
        cy.get("a[href*='Popup-Alerts']").invoke('removeAttr','target').click();
        cy.get("#button1").click();
        cy.on('window:alert', (alert_text)=>{
            expect(alert_text).to.equal("I am an alert box!");
        });
    });
})