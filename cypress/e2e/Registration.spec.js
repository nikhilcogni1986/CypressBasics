/// <reference types="cypress"/>

describe('Login Test', function(){
    it('Registration Test To No Commerce App', function(){
        cy.visit("https://demo.nopcommerce.com/login?returnUrl=%2F")
        cy.get(".button-1.register-button").click()
        cy.title().should('eq',"nopCommerce demo store. Register")
        cy.get("div[class='page-title'] h1").should('have.text',"Register")

        //Registration Page
        cy.get("#gender-male").should('not.be.selected').click()
        cy.get("#FirstName").clear().type("nikhil")
        cy.get("#LastName").clear().type("rao")
        cy.get("[name='DateOfBirthDay']").select("20")
        cy.get("[name='DateOfBirthMonth']").select("September")
        cy.get("[name='DateOfBirthYear']").select("2020")
        cy.get("#Email").clear().type("nikhiltest@test.com")
        cy.get("#Password").clear().type("Password1234")
        cy.get("#ConfirmPassword").clear().type("Password1234")
        cy.get("#register-button").click()
    })

    it('Login To App', function(){
        cy.visit("https://demo.nopcommerce.com/login?returnUrl=%2F")
        cy.get("#Email").clear().type("nikhiltest@test.com")
        cy.get("#Password").clear().type("Password1234")
        cy.get("button[class='button-1 login-button']").click()

        //mouse hover on Computers
        cy.get("ul.top-menu.notmobile li a[href*='computers']").invoke('show')
        cy.get("ul.top-menu.notmobile ul.sublist.first-level li a[href*='desktops']").click({force:true});
        cy.get(".page-title h1").should('be.visible')

    })
})