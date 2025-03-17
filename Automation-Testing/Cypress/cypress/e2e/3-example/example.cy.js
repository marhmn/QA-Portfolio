describe('Example Test', () => {
    it('Visits Example Website', () => {
      cy.visit('https://example.cypress.io')
      cy.contains('type').click()
      cy.url().should('include', '/commands/actions')
    })
  })
  