describe('Test For Radio Buttons', function(){
    it('Handling Radio Buttons', function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        
        cy.get("input[value='radio1']").check()
        cy.get("input[value='radio2']").check()
        cy.get("input[value='radio3']").check()

    })
})