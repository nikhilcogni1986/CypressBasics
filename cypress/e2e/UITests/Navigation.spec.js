describe('Navigation controls', ()=>{

    it("Navigation commands in Cypress", ()=>{
        cy.visit("http://www.webdriveruniversity.com/")
        cy.xpath("//a[contains(@href,'contactus.html')]").invoke('removeAttr', 'target').click();
        cy.url().should('contain','contactus.html');

        //navigate back to home page
        cy.go('back');
        cy.url().should('contain','webdriveruniversity');
        
        //navigate forward again
        cy.go('forward')
        cy.url().should('contain','contactus.html');


    });
});