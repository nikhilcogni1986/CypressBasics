/// <reference types="cypress"/>
describe('Login test scenario', function(){
    it('Login To App', function(){
        cy.visit("https://demo.nopcommerce.com/login?returnUrl=%2F")
        cy.get("#Email").clear().type("nikhiltest@test.com")
        cy.get("#Password").clear().type("Password1234")
        cy.get("button[class='button-1 login-button']").click()

        //mouse hover on Computers
        cy.get("ul.top-menu.notmobile li a[href*='computers']").invoke('show')
        cy.get("ul.top-menu.notmobile ul.sublist.first-level li a[href*='desktops']").click({force:true});
        cy.get(".page-title h1").should('be.visible')
        cy.url().should('include','desktops')

        //get the product names of all desktops

        cy.get("div.product-grid .item-grid .item-box .details").each(($el, index, $list) =>{
            const product_title = $el.find('h2 a').text()
            const product_price = $el.find('.add-info .prices span').text()
            cy.log("ProductName:=>"+ product_title+"Product Price=> "+product_price)
        })
 
        //get the details for all the notebooks
        cy.get(".list .active .sublist .inactive a[href*='notebooks']").click({force:true})
        cy.get(".product-grid .details").each(($el, index, $list) => {
            const notebook_name = $el.find('h2 a').text()
            const notebook_short_description = $el.find('.description').text()
            cy.log(notebook_name)
            cy.log(notebook_short_description)
        })

    })
})    