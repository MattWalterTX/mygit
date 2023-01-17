describe('About page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/about')
  })

  it('should see the title banner', () => {
    cy.get('.MuiToolbar-root > h2').contains('myGit')
  })

  it('should see about page content', () => {
    cy.get('div.info-container').contains('myGit: the Hubbening is an application designed to view cards from the newest set from Magic: the Gathering. On load the cards of all 5 colors will load in. They can be further sorted down by color selection, clicked to view the card and added to a collection.')
  })

  it('should be able to return Home', () => {
    cy.get('#long-button').click().get('#Home > .little-link').click()
    .url().should('eq', 'http://localhost:3000/')
  })
})