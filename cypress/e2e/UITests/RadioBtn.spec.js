describe('Test For Radio Buttons', function(){
    it('Handling Radio Buttons', function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        
        cy.get("input[value='radio1']").check();
        cy.get("input[value='radio2']").check();
        cy.get("input[value='radio3']").check();
    });

    it.only("Validate radio buttons are selected", ()=>{
        cy.visit("http://www.webdriveruniversity.com/");
        cy.get("#dropdown-checkboxes-radiobuttons").invoke('removeAttr','target').click();

        //select the first Radio button
        cy.get("div.section-title form input[type='radio']").first().check();
        cy.get('[value="green"]').should('be.checked');
        cy.get('[value="blue"]').should('not.be.checked');

        //2nd set of drop downs
        cy.get("input[value='pumpkin']").should('be.checked');
        cy.get("input[value='lettuce']").should('not.be.checked');

        //select lettuce
        cy.get("input[value='lettuce']").check();
        cy.get("input[value='pumpkin']").should('not.be.checked');   
    });
})