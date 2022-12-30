/// <reference types="cypress"/>

describe('Test Suite', ()=>{

    it('First Test Case', ()=>{
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.wait(2)
        cy.get('.product:visible').should('have.length', 4)

        //we use find() to get descendant elements of dom provided in get()
        cy.get('.products').find('.product').should('have.length', 4)
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click() 
    })
})