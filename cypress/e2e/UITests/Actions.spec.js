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
        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html");
        cy.get("span.context-menu-one.btn.btn-neutral").trigger('contextmenu');
        cy.get("li.context-menu-item.context-menu-icon.context-menu-icon-edit").should('be.visible');
    });

    it('Double click test approach1', function(){
        cy.visit("http://www.uitestpractice.com/Students/Actions");
        cy.get("button[name='dblClick']").trigger("dblclick",{force:true});
    })

    //install cypress drag and drop plugin
    it('Drag and Drop test', function(){
        cy.visit("http://www.uitestpractice.com/Students/Actions");
        cy.get("#draggable").should('be.visible');
        cy.get('#draggable').drag('#droppable');
    });

    //drag and drop example on webdriveruniversity.com
    it('Drag and Drop example',()=>{
        cy.visit("http://www.webdriveruniversity.com/index.html");
        cy.get("#actions").invoke('removeAttr','target').click();

        //press the left mouse and drag and move it to draggable object
        cy.get("#draggable").trigger('mousedown',{which:1});
        cy.get("#droppable").trigger('mousemove').trigger('mouseup',{force:true});
    });

    it.only('Double click example', ()=>{
        cy.visit("http://www.webdriveruniversity.com/index.html");
        cy.get("#actions").invoke('removeAttr','target').click();
        
        cy.get("#click-box").trigger('mousedown').then(($element) =>{
            expect($element).to.have.css('background-color','rgb(0, 255, 0)' );
        });
    });

})