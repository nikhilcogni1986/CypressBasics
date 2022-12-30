/// <reference types="cypress"/>

describe('Test Suite', ()=>{

    it('First Test Case', ()=>{
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.wait(2)

        //we use find() to get descendant elements of dom provided in get()
        cy.get('.products').find('.product').each(($el, index, $list)=>{
        const vegetable_text_name = $el.find('h4.product-name').text()
        if(vegetable_text_name.includes('Cashews'))
        {
                cy.wrap($el).find('button').click()
        }
        })
    })
})