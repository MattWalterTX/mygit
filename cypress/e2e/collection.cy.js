describe('Collection page', () => {
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
    
    cy.visit('http://localhost:3000/')
  })

  it('should select a card and add it to my collection', () => {
    cy.get(':nth-child(2) > .css-1hbt8sp-MuiTableCell-root > .MuiButtonBase-root').click()
    .url().should('eq', 'http://localhost:3000/card2')
  })

  it('should add the card to collection', () => {
    cy.get('.css-1clyo4s-MuiStack-root > button.MuiButtonBase-root').click()
  })

})