describe('Controls suite', function(){
    
    it('Input Box handling', function(){
        cy.visit('http://localhost:4200/pages/forms/layouts')
        
        //Inline Form operations
        cy.get("input[placeholder='Jane Doe']").should('be.enabled').clear().type("Michael Miller")
        cy.get("input[placeholder='Email'][type='text']").should('be.enabled').clear()
        cy.get("input[placeholder='Email'][type='text']").type('michael.miller@test.com')
        cy.get("form[class='form-inline'] span[class='custom-checkbox']").should('not.be.checked')
        cy.get("form[class='form-inline'] button[type='submit']").click()
    })
})