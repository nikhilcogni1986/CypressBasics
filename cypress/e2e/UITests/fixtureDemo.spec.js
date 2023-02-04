describe('Demo on how to use fixtures',()=>{

    //declare fixtures under before so that data is loaded
    //before use in test cases
    before(()=>{
        cy.fixture("contact-us.json").then((data)=>{
            globalThis.data = data;
        });
    });
    it("use fixtures to fill contact us form", ()=>{
        cy.visit("http://www.webdriveruniversity.com/index.html");
        cy.get("#contact-us").invoke('removeAttr','target').click();
        
        //fill the data using fixtures
        cy.get("input[name='first_name']").type(data.firstname);
        cy.get("input[name='last_name']").type(data.lastname);
        cy.get("input[name='email']").type(data.email);
        cy.get("textarea[name='message']").type(data.comments);
        cy.get("input[type='submit']").click();

        //verify the success message
        cy.get("#contact_reply h1").should('contain.text',"Thank You for your Message!")

    });
});