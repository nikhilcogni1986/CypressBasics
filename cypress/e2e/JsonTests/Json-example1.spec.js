const { use } = require("chai");

describe('Json Examples',()=>{
    it('Read the JSON',()=>{
        const object1 = {"key1":"value1", "key2":"value2"};
        const objectArrayValues = ["Sophie", "Rose", "Howard"];
        cy.log(object1.key1);
        cy.log(object1.key2);

        cy.log(object1["key1"]);
        cy.log(object1["key2"]);

        //Accessing array values
        cy.log(objectArrayValues[0]);
        cy.log(objectArrayValues[1]);

        const users ={
            "firstName": "John",
            "lastName": "Smith",
            "Age":"30",
            "Students": [
                {
                    "firstName":"Joe",
                    "lastName":"Blogs"
                },
                {
                    "firstName":"Sarah",
                    "lastName":"Parker"
                }
            ]
        }

        cy.log(users.firstName)
        cy.log(users.lastName)

        cy.log(users.Students);
        cy.log(users.Students[0]);
        cy.log(users.Students[1]);

        cy.log(users.Students[0].firstName);
        cy.log(users.Students[0].lastName);
        cy.log(users.Students[1].firstName);
        cy.log(users.Students[1].lastName);


    });
})