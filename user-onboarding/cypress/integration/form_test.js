describe('Input Information', () => {
  it('connects to the website', () => {
    // eslint-disable-next-line no-undef
    cy.visit('http://localhost:3000/')
    // eslint-disable-next-line no-undef
    cy.url().should('include', 'http://localhost:3000/')
  })

  it('enters name, email, and password data', () => {
    cy.get('input[type=submit]')
    .should('be.disabled') // submit button disabled

    // eslint-disable-next-line no-undef
    cy.get('input[name=name]')
      .type('John Doe')
      .should('have.value', 'John Doe')

    // eslint-disable-next-line no-undef
    cy.get('input[name=email]')
      .type('John@doe.org')
      .should('have.value', 'John@doe.org')

    cy.get('input[type=submit]')
      .should('be.disabled') // submit button disabled

    cy.get('input[name=password]')
      .type('1234567')
      .should('have.value', '1234567')
    
    cy.get('input[type=submit]')
      .should('be.disabled') // submit button disabled

    // eslint-disable-next-line no-undef
    cy.get('input[name=password]')
      .type('8')
      .should('have.value', '12345678')
    
    cy.get('input[type=submit]')
      .should('not.be.disabled') // submit button ENABLED
  })

  it('checks the terms of service checkbox', () => {
    cy.get('input[name=termsOfService]')
      .click()
      .should('be.checked')
  })

  it('submits the form', () => {
    cy.get('input[type=submit]')
      .click()
  })

  it('results are appended to the page', () => {
    cy.get('div.App div p:nth-of-type(2)')
      .should('exist')
  })
})

describe('Validation Checking', () => {
  it('enters bad email', () => {
    cy.get('input[name=email]')
      .type('bad-email')
      .should('have.value', 'bad-email')
  })

  it('displays validation error with bad email entered', () => {
    cy.get('div.errors div:nth-of-type(2)')
      .should('have.text', 'Must be a valid email address.')
  })

  it('cleans up', () => {
    cy.visit('http://localhost:3000/')
  })
})