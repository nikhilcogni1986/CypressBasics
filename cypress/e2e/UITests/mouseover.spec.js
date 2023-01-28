describe('Mouse over test events', function(){

    it('mouse over', function(){
        cy.visit("https://www.browserstack.com/guide/mouse-hover-in-selenium")
        cy.get("a[aria-label='Automate'] div.dropdown-link-heading").should('not.be.visible')
        cy.get(".product-dropdown-toggle.dropdown-toggle.hide-sm.hide-xs").trigger('mouseover')
        cy.get("a[aria-label='Automate'] div.dropdown-link-heading").should('be.visible')
        cy.get("a[aria-label='Automate'] div.dropdown-link-heading").click()
    })

    it('Right click test Approach1', function(){
        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html")
        cy.get("span.context-menu-one.btn.btn-neutral").rightclick()
        cy.get("li.context-menu-item.context-menu-icon.context-menu-icon-edit").should('be.visible')
    })

    it('Right click test Approach2', function(){
        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html")
        cy.get("span.context-menu-one.btn.btn-neutral").trigger('contextmenu')
        cy.get("li.context-menu-item.context-menu-icon.context-menu-icon-edit").should('be.visible')
    })

    it('Double click test approach1', function(){
        cy.visit("http://www.uitestpractice.com/Students/Actions")
        cy.get("button[name='dblClick']").trigger("dblclick",{force:true})
    })

    //install cypress drag and drop plugin
    it('Drag and Drop test', function(){
        cy.visit("http://www.uitestpractice.com/Students/Actions")
        cy.get("#draggable").should('be.visible')
        cy.get('#draggable').drag('#droppable')
    })


})