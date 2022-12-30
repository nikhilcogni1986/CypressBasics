describe('Test For checkboxes', function(){
    it('Handling checkboxes', function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        
        //click all the checkboxes one by one with asserting each
        cy.get("#checkBoxOption1").should('not.be.checked').click().should('be.checked')
        cy.get("#checkBoxOption2").should('not.be.checked').click().should('be.checked')
        cy.get("#checkBoxOption3").should('not.be.checked').click().should('be.checked')

        //uncheck first and third checkbox
        cy.get("#checkBoxOption1").should('be.checked').uncheck().should('not.be.checked')
        cy.get("#checkBoxOption2").should('be.checked').uncheck()

        //click checkboxes based on value property
        cy.get("input[type='checkbox']").check(['option1','option2'])
    })
})