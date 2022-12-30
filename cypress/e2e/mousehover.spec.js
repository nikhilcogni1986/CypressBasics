describe('Advanced Interactions', function(){
    it('Mouse Hover test', function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        //hover the mouse using show method of jquery
        cy.get(".mouse-hover-content").invoke('show') 
        cy.contains('Top').click()
        cy.url().should('include','#top')

        //clicking invisible elements
        cy.contains('Reload').click({force:true})
    })
})