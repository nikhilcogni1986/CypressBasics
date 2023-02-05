describe('Addition of products to the cart', ()=>{

    before(function() {
        cy.fixture("products").then(function(data){
            this.data = data;
        });
    });
    
    it("Add multiple products to the cart", function(){
        cy.visit("https://automationteststore.com/");
        cy.get("ul.nav-pills.categorymenu li a[href*='&path=52']").contains("Hair Care").click();

        this.data.productName.forEach(element => {
            cy.addProductToBasket(element);
        });
        cy.get("li.dropdown.hover a[href*='checkout/cart'][class='dropdown-toggle']").click();
    });
});