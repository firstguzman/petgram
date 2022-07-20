/* global describe, it, cy */

describe('Petgram', function () {
  it('los usuarios no registrados ven el formulario de inicio de sesion al ir a favs', function () {
    cy.visit('/favs')
    cy.get('form').should('have.length', 1)
  })
})
