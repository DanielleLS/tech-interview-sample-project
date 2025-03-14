Cypress.Commands.add("login", () => {
    cy.visit('/');

    cy.get('a[href="/login"]').contains('Login').click();

    cy.get('#email').type(Cypress.env('USER_EMAIL'));
    cy.get('#password').type(Cypress.env('USER_PASSWORD'), { log: false });

    cy.get('button[type="submit"]').contains('Login').click();
});