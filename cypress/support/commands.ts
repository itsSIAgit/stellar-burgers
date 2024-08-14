/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

declare namespace Cypress {
  interface Chainable {
    doModalClicks(items: string[]): void;
  }
};

Cypress.Commands.add('doModalClicks', (items) => {
  items.forEach((item, index) => {
    const unit = cy.get(item);
    unit.click();

    if (!index) {
      cy.get('[data-cy="modal"]').as('modal').should('exist');
      cy.get('[data-cy="modal-close-btn"]').as('closeBtn').should('exist');
      cy.get('[data-cy="modal-overlay"]').as('overlay').should('exist');
    }

    cy.get('@closeBtn').click();
    cy.get('@modal').should('not.exist');
    
    unit.click();
    cy.get('@modal').should('exist');
    cy.get('@overlay').click('topLeft', { force: true });
    cy.get('@modal').should('not.exist');
    
    unit.click();
    cy.get('@modal').should('exist');
    cy.get('body').type('{esc}');
    cy.get('@modal').should('not.exist');
  });
});