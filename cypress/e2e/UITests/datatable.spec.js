describe('Traversal techniques in Cypress', () => {

    beforeEach(() => {
        cy.visit("http://www.webdriveruniversity.com/index.html");
        cy.get("#data-table").invoke('removeAttr', 'target').click();
    });

    it('Fetching the data from the table', () => {

        var userdetails = [];
        let num = 0;

        cy.get("#thumbnail-1 td").each(($el, index, $list) => {
            userdetails[index] = $el.text();
        }).then(() => {
            var i;
            for (i = 0; i < userdetails.length; i++)
            {
                if (Number(userdetails[i])) {
                    num = num + Number(userdetails[i]);
                }
            }
            cy.log("Found Total Age:"+num);
            expect(num).to.eq(322);    
        });
    });
});
