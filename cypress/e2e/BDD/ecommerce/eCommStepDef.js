const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

import HomePage from '../../../support/pageObjects/HomePage';
import ProductPage from '../../../support/pageObjects/ProductPage';

const homePage = new HomePage()
const productPage = new ProductPage()

Given('I open ecommerce website', function () {
    cy.visit(Cypress.env('url') + "/angularpractice/")
})

When('I add items to cart', function(){
    homePage.getShopTab().click()
    this.data.product_name.forEach(function (element) 
    {
      cy.SelectProduct(element)
    });
    productPage.checkOutButton().click()
})

When('validate the total prices', ()=>{
    var sum = 0
    cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => 
    {
        const amount = $el.text()
        var res = amount.split(" ")
        res = res[1].trim()
        sum = Number(sum) + Number(res)
    }).then(function () 
    {
      cy.log(sum)
    })
    cy.get('h3 strong').then(function (element) {
      const amount = element.text()
      var res = amount.split(" ")
      var total = res[1].trim()
      expect(Number(total)).to.equal(sum)
    })
})

Then('select the country submit and verify the success',()=>{
    cy.contains('Checkout').click()
    cy.get('#country').type('India')
    Cypress.config('defaultCommandTimeout', 8000)
    cy.get('.suggestions > ul > li > a').click()
    cy.get('#checkbox2').click({ force: true })
    cy.get('input[type="submit"]').click()
    //cy.get('.alert').should('have.text','Success! Thank you! Your order will be delivered in next few weeks :-).')
    cy.get('.alert').then(function (element)
    {
      const actualText = element.text()
      expect(actualText.includes("Success")).to.be.true
    })
})