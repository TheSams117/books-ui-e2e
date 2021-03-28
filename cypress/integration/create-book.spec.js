const bookName = "Mi libro luna de pluton";
const bookAuthor = "Dross";

describe("When the user wants to register a cat", () => {
  before(() => {
    cy.visit("https://books-icesi-front.herokuapp.com/dashboard");
    cy.get('.ant-btn-primary > .ng-star-inserted').click()
    cy.get('#name').type(bookName)
    cy.get('#author').type(bookAuthor)
    cy.get('.ant-modal-footer > .ant-btn-primary > .ng-star-inserted').click()
});
it("The the book should be listed with the right name and author", () => {
    cy.get('table').contains('td');
    cy.get('table').contains('td');
});
});