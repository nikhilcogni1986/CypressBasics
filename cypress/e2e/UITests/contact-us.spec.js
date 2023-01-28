///<reference types = "cypress"/>

describe('Contact Us Page', () => {
    it('Add contact details', ()=>{
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        cy.xpath("//input[@name='first_name']").type("Rajesh");
        cy.xpath("//input[@name='last_name']").type("Rao");
        cy.xpath("//input[@name='email']").type("rajeshtest@test.com");
        cy.get('textarea.feedback-input').type("Hi My Name is Rajesh");
        cy.get("input[class='contact_button'][value='SUBMIT']").click();
        cy.get('h1').should('contain.text','Thank You for your Message!');
    })
});