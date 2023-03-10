describe('Home page', () => {
  beforeEach(() => {
    cy.intercept("GET", 'https://api.magicthegathering.io/v1/cards?set=BRO&colors=W',
    {
      statusCode:200,
      ok: true,
      fixture: 'cardStubs'
    })
    cy.intercept("GET", 'https://api.magicthegathering.io/v1/cards?set=BRO&colors=B',
    {
      statusCode:200,
      ok: true,
      fixture: 'cardStubs'
    })
    cy.intercept("GET", 'https://api.magicthegathering.io/v1/cards?set=BRO&colors=U',
    {
      statusCode:200,
      ok: true,
      fixture: 'cardStubs'
    })
    cy.intercept("GET", 'https://api.magicthegathering.io/v1/cards?set=BRO&colors=R',
    {
      statusCode:200,
      ok: true,
      fixture: 'cardStubs'
    })
    cy.intercept("GET", 'https://api.magicthegathering.io/v1/cards?set=BRO&colors=G',
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

  it.skip('should select a color from the dropdown to sort by color.', () => {
    cy.get('select').click()
  })

})