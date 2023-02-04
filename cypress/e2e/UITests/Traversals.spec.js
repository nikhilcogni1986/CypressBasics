describe('Traversal techniques in Cypress', ()=>{

    beforeEach(()=>{
        cy.visit("http://www.webdriveruniversity.com/index.html");
        cy.get("#data-table").invoke('removeAttr','target').click();
    })
    it('Finding elements using children function', ()=>{
        cy.get(".breadcrumb.traversal-breadcrumb").children('.active').should('contain','Contact Us');
        cy.get(".breadcrumb.traversal-breadcrumb").children('li').should('have.length',3);
    });

    it('Finding closest DOM element using closest function', ()=>{
        cy.get("span.badge.traversal-badge").closest("ul").should('have.class',"list-group");
    });

    it('eq() to retrieve the specific element using index', ()=>{
        cy.get("ul.traversal-drinks-list li").eq(2).should('contain',"Milk");
    });

    it('Using filter() to find specific element', ()=>{
        cy.get(".btn-group-toggle >*").filter(".active").should('contain','Button-1');
    });

    it('Using find() to retrieve DOM elements', ()=>{
        cy.get(".pagination.traversal-pagination").find("li").find("a").should('have.length',7);
    });

    it('Using first() to retrieve first DOM element within elements', ()=>{
        cy.get(".traversal-table > tbody >tr >td").first().should('contain','Andy');
    });

    it('Using last() to retrieve last DOM element within elements', ()=>{
        cy.get(".traversal-table > tbody >tr >td").last().should('contain','Scott');
    });

    it('Using NextAll() to retrieve all sibling DOM elements within elements', ()=>{
        cy.get("ul.traversal-drinks-list #tea").nextAll().should('have.length',3);
    });

    it('Using NextUntill() to retrieve all sibling DOM elements untill the selector is provided', ()=>{
        cy.get("#coffee").nextUntil('#milk');
    });

    it('Not() to remove DOM elements from set of elements', ()=>{
        cy.get(".traversal-button-states").not('.disabled').should('not.have.class','disabled');
    });






})