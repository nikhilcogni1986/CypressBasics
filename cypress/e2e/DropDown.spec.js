describe('Test For Radio Buttons', function(){
    it('Handling Radio Buttons', function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        
        //select by text
        cy.get("#dropdown-class-example").select("Option1")

        //select by index
        cy.get("#dropdown-class-example").select(2).should('have.value',"option2")

        //Auto Sugggestions drop down
        cy.get("#autocomplete").type("Ind")
        cy.get(".ui-menu-item div").each(($el, index, $list) => {
            if($el.text()==='India')
            {
                cy.wrap($el).click()
            }
        })

    })
})