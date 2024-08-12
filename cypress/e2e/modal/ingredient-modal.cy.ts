describe('Проверяем работу модального окна ингридиента', function() {
  beforeEach(() => {
    cy.visit('http://localhost:4000');
  });
  
  it('Открытие модалки с проверкой содержимого (соло)', function() {
    const item = cy.get('[data-cy="643d69a5c3f7b9001cfa093c"]')
    item.click();
    const modal = cy.get('[data-cy="modal"]');
    modal.contains('Подробное описание');
    modal.get('[data-cy="modal-children"]').contains('Краторная булка N-200i');
  });

  it('Открытие и закрытие модалки на крестик, оверлэй и ESC (соло)', function() {
    const item = cy.get('[data-cy="643d69a5c3f7b9001cfa093c"]')

    item.click();
    cy.get('[data-cy="modal"]').should('exist');
    cy.get('[data-cy="modal-close-btn"]').click();
    cy.get('[data-cy="modal"]').should('not.exist');
    
    item.click();
    cy.get('[data-cy="modal"]').should('exist');
    cy.get('[data-cy="modal-overlay"]').click('topLeft', { force: true });
    cy.get('[data-cy="modal"]').should('not.exist');
    
    item.click();
    cy.get('[data-cy="modal"]').should('exist');
    cy.get('body').type('{esc}');
    cy.get('[data-cy="modal"]').should('not.exist');
  });

  it('Открытие-закрытие нескольких разных модалок', function() {
    const ingredientsId = [
      '643d69a5c3f7b9001cfa093c',
      '643d69a5c3f7b9001cfa0941',
      '643d69a5c3f7b9001cfa0942'
    ];
    ingredientsId.forEach((id) => {
      const item = cy.get(`[data-cy="${id}"]`)
      item.click();
      cy.get('[data-cy="modal"]').should('exist');
      cy.get('[data-cy="modal-close-btn"]').click();
      cy.get('[data-cy="modal"]').should('not.exist');

      item.click();
      cy.get('[data-cy="modal"]').should('exist');
      cy.get('[data-cy="modal-overlay"]').click('topLeft', { force: true });
      cy.get('[data-cy="modal"]').should('not.exist');

      item.click();
      cy.get('[data-cy="modal"]').should('exist');
      cy.get('body').type('{esc}');
      cy.get('[data-cy="modal"]').should('not.exist');
    });
  });
});

