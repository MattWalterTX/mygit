describe('Home page', () => {
  beforeEach(() => {
    cy.intercept('https://api.magicthegathering.io/v1/cards',
    {
      statusCode:200,
      ok: true,
      fixture: 'cardStubs'
    })
    
    cy.visit('http://localhost:3000')
  })

  it('should see the title banner', () => {
    cy.get('.MuiToolbar-root > h2').contains('myGit')
  })

  it('should use the menu to nav to the collection', () => {
    cy.get('#long-button').click().get('#Collection > .little-link').click()
    .url().should('eq', 'http://localhost:3000/collection').go('back')
  })

  it('should use the menu to nav to the collection', () => {
    cy.get('#long-button').click().get('#About > .little-link').click()
    .url().should('eq', 'http://localhost:3000/about').go('back')
  })

  it('should be able to use the browser router arrows for navigation', () => {
    cy.get('#long-button').click().get('#About > .little-link').click()
    .url().should('eq', 'http://localhost:3000/about').go('back')
    .url().should('eq', 'http://localhost:3000/').go('forward')
    .url().should('eq', 'http://localhost:3000/about').go('back')
  })

  it('should be able to navigate to the project repo via the footer link "Matt Walter"', () => {
    cy.get('.MuiTypography-body2 > .MuiTypography-root').should('exist')
  })

  // sort form is there?
  // test table display items
  // test sorting
  // test clicking through card to destination /:id
  // badURL
})