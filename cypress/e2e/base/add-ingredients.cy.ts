describe('Проверяем добавления ингредиентов', function() {
  beforeEach(() => {
    cy.visit('/');
    cy.get('[data-cy="643d69a5c3f7b9001cfa093c"]').contains('Добавить').as('someBunAddBtn');
    cy.get('[data-cy="643d69a5c3f7b9001cfa0941"]').contains('Добавить').as('someMeatAddBtn');
    cy.get('[data-cy="643d69a5c3f7b9001cfa0942"]').contains('Добавить').as('someSauceAddBtn');
    cy.get('[data-cy="constructorBunTop"]').as('burgerTopInfo');
    cy.get('[data-cy="constructorBunBottom"]').as('burgerBottomInfo');
    cy.get('[data-cy="BurgerConstructorElements"]').as('burgerMiddleInfo');
  });

  it('Булки добавляются (соло)', function() {
    cy.get('@someBunAddBtn').click();
    cy.get('@burgerTopInfo').contains('Краторная булка N-200i');
    cy.get('@burgerBottomInfo').contains('Краторная булка N-200i');
  });

  it('Ингридиенты: мясо добавляется (соло)', function() {
    cy.get('@someMeatAddBtn').click();
    cy.get('@burgerMiddleInfo').contains('Биокотлета из марсианской Магнолии');
  });

  it('Ингридиенты: соус добавляется (соло)', function() {
    cy.get('@someSauceAddBtn').click();
    cy.get('@burgerMiddleInfo').contains('Соус Spicy-X');
  });

  it('Ингридиенты: несколько добавляется, сумма правильная', function() {
    cy.get('@someBunAddBtn').click();
    cy.get('@someMeatAddBtn').click();
    cy.get('@someSauceAddBtn').click();

    cy.get('@burgerTopInfo').contains('Краторная булка N-200i');
    cy.get('@burgerBottomInfo').contains('Краторная булка N-200i');

    cy.get('@burgerMiddleInfo').contains('Биокотлета из марсианской Магнолии');

    cy.get('@burgerMiddleInfo').contains('Соус Spicy-X');

    cy.get('[data-cy="BurgerConstructorPrice"]').contains('3024');
  });
});