/// <reference types ='cypress' /> 
import { expect } from "chai"

describe('Handling HTML Web Table', ()=>{

    it('Extarct values from web table', ()=>{
        cy.visit("https://testautomationpractice.blogspot.com/")

        //1) check the value presence anywhere in the table
        cy.get("table[name='BookTable']>tbody tr").contains("td", "Learn Selenium").should('be.visible')

        //2)check the value in specific row and column find selenium as subject in 2nd row
        cy.get("table[name='BookTable']>tbody tr:nth-child(2) td:nth-child(3)").
        contains("Selenium").should('be.visible')

        //3) verify the book name Master in Java for the author name Amod
        cy.get("table[name='BookTable']>tbody tr td:nth-child(2)").each(($el, index, $list)=>
        {
            const author_text = $el.text()
            cy.log(author_text)
            if(author_text.includes('Amod'))
            {
                cy.get("table[name='BookTable']>tbody tr td:nth-child(1)").eq(index).then(function(book_name){

                    const actual_book_name = book_name.text()
                    cy.log(actual_book_name)
                    expect(actual_book_name).to.equal("Master In Java")
                })
            }
        })
    })
})