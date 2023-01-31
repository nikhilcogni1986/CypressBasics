describe('Test For Auto Suggest Lists', function(){

    it('Select a food item from the Auto suggestion list', ()=>{
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get("#autocomplete-textfield").invoke('removeAttr','target').click();
        
        //Type an input
        cy.get("#myInput").type("A");

        //get the options and select based on the required food item
        cy.get("div.autocomplete-items div").each(($el, index, $list)=>{

            const food_text = $el.text();
            const food_toBe_selected = "Avacado";
            if(food_text === food_toBe_selected)
            {
                cy.wrap($el).click();
                cy.get("#submit-button").click();
                cy.url().should('include', food_toBe_selected);
            }
        });
    });
})