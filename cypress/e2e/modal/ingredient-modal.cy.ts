describe('Проверяем работу модального окна ингридиента', function() {
  beforeEach(() => {
    cy.visit('/');
    cy.get('[data-cy="643d69a5c3f7b9001cfa093c"]').as('item');
  });
  
  it('Открытие модалки с проверкой содержимого (соло)', function() {
    cy.get('@item').click();
    const modal = cy.get('[data-cy="modal"]');
    modal.contains('Подробное описание');
    modal.get('[data-cy="modal-children"]').contains('Краторная булка N-200i');
  });

  it('Открытие и закрытие модалки на крестик, оверлэй и ESC (соло)', function() {
    cy.doModalClicks(['@item']);
  });

  it('Открытие-закрытие нескольких разных модалок', function() {
    const ingredientsId = [
      '643d69a5c3f7b9001cfa0941',
      '643d69a5c3f7b9001cfa0942',
      '643d69a5c3f7b9001cfa0946',
      '643d69a5c3f7b9001cfa0947'
    ];
    const items = ingredientsId.map((id) => `[data-cy="${id}"]`);

    cy.doModalClicks(['@item', ...items]);
  });
});

