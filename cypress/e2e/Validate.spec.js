describe('Validations on a web page', function(){

    before(function()
    {
        cy.fixture('example').then(function(credentials){
            globalThis.credentials = credentials
        })
    })

    it('Validations on a web page using assertions', function(){
        cy.visit("https://rahulshettyacademy.com/angularpractice/")
        cy.get("div.form-group input[name='name']").click()
        cy.get('input[name="name"]:nth-child(2)').should('have.attr','minLength',2)        
        //validate whether alert is displayed
        cy.get("div.form-group label").contains('Name').click()
        cy.get('.alert').should('be.visible')
        cy.get("select").select("Female")
        cy.get("div.form-group input[name='name']").type("Hello")

        //validate whether same text typed in name is displayed in two way field
        cy.get("h4 input[name='name']").then(($btn) =>{
            const text = $btn.val()
            cy.log(text)
        })

        //click on shop
        cy.get("a[href*='angularpractice/shop']").click()
        cy.url().should('include',"angularpractice/shop")

        //add a product to the cart
        //cy.SelectProduct('Blackberry')

        //parametrized data
        globalThis.credentials.product_name.forEach(function(element){
            cy.SelectProduct(element)          
        });        
    })
})