describe('Проверяем добавления ингредиентов', function() {
  beforeEach(() => {
    cy.visit('http://localhost:4000');
  });

  it('Булки добавляются (соло)', function() {
    cy.get('[data-cy="643d69a5c3f7b9001cfa093c"]').contains('Добавить').click();
    cy.get('[data-cy="constructorBunTop"]').contains('Краторная булка N-200i');
    cy.get('[data-cy="constructorBunBottom"]').contains('Краторная булка N-200i');
  });

  it('Ингридиенты: мясо добавляется (соло)', function() {
    cy.get('[data-cy="643d69a5c3f7b9001cfa0941"]').contains('Добавить').click();
    cy.get('[data-cy="BurgerConstructorElements"]').contains('Биокотлета из марсианской Магнолии');
  });

  it('Ингридиенты: соус добавляется (соло)', function() {
    cy.get('[data-cy="643d69a5c3f7b9001cfa0942"]').contains('Добавить').click();
    cy.get('[data-cy="BurgerConstructorElements"]').contains('Соус Spicy-X');
  });

  it('Ингридиенты: несколько добавляется, сумма правильная', function() {
    cy.get('[data-cy="643d69a5c3f7b9001cfa093c"]').contains('Добавить').click();
    cy.get('[data-cy="643d69a5c3f7b9001cfa0941"]').contains('Добавить').click();
    cy.get('[data-cy="643d69a5c3f7b9001cfa0942"]').contains('Добавить').click();

    cy.get('[data-cy="constructorBunTop"]').contains('Краторная булка N-200i');
    cy.get('[data-cy="constructorBunBottom"]').contains('Краторная булка N-200i');

    cy.get('[data-cy="BurgerConstructorElements"]').contains('Биокотлета из марсианской Магнолии');

    cy.get('[data-cy="BurgerConstructorElements"]').contains('Соус Spicy-X');

    cy.get('[data-cy="BurgerConstructorPrice"]').contains('3024');
  });
});