# Cypress Project - Automation Testing

This folder contains automation tests using Cypress.

## 📁 Project Structure
```
Cypress/
├── cypress/          # Contains e2e tests and support files
├── node_modules/      # Dependencies (ignored by .gitignore)
├── package.json       # npm configuration file
├── README.md          # Documentation for Cypress
└── .gitignore         # Ignoring node_modules
```

## 🔍 Installation
1. Install dependencies:
```bash
npm install
```
2. Open Cypress GUI:
```bash
npx cypress open
```

## 🔨 Running Tests
To run tests via the terminal:
```bash
npx cypress run
```

## 📌 Example Test
File: `cypress/e2e/3-example/example.cy.js`
```javascript
describe('Example Test', () => {
  it('Visits Example Website', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('type').click()
    cy.url().should('include', '/commands/actions')
  })
})
```

