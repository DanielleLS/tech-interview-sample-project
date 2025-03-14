describe('Validate Notes Features', () => {
  beforeEach(() => {
    cy.login();
  })

  it('Create, Update, and Delete a note', () => {
    cy.get('h4').contains('Create a new note').click();

    cy.get('#content').type('My note')
    cy.get('.LoaderButton').contains('Create').click()

    cy.get('.list-group').should('contain', 'My note')

    cy.get('.list-group').contains('My note').click()
    cy.get('#content').type(' updated')
    cy.get('button[type="submit"]').contains('Save').click();

    cy.get('.list-group').should('contain', 'My note updated')
    cy.get('.list-group:contains(My note updated)').should('be.visible')

    cy.get('.list-group').contains('My note updated').click()
    cy.get('button[type="button"]').contains('Delete').click();

    cy.get('h1').should('contain', 'Your Notes')
    cy.get('.list-group:contains(My note updated)').should('not.exist')
  })
})
