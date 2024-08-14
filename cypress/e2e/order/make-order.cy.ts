describe('Формируем заказ', function() {
  beforeEach(() => {
    //Организуем фейк-пользователя
    localStorage.setItem('refreshToken', 'TESTrefreshToken');
    cy.setCookie('accessToken', 'Bearer TESTaccessToken');

    cy.intercept('GET', '*/auth/user', {
      statusCode: 200,
      body: {
        'success': true,
        'user': {
          'email': 'test@yandex.ru',
          'name': 'TEST'
        }
      }
    });

    cy.intercept('POST', '*/orders', {
      statusCode: 200,
      body: {
        'success': true,
        'order': {
          'number': 49498
        }
      }
    });

    cy.visit('/');
    cy.get('[data-cy="constructorBunTop"]').as('burgerTopInfo');
    cy.get('[data-cy="constructorBunBottom"]').as('burgerBottomInfo');
    cy.get('[data-cy="BurgerConstructorElements"]').as('burgerMiddleInfo');
  });

  after(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  it('Проверяем что фейк-пользователь подключен', function() {
    const user = cy.get('[data-cy="userName-header"]');
    user.contains('TEST').should('exist');
    user.click();

    const info = cy.get('[data-cy="userProfile-info"]');
    info.get('[value="TEST"]').should('exist');
    info.get('[value="test@yandex.ru"]').should('exist');
  });

  it('Формируем заказ', function() {
    const ingredientsId = [
      '643d69a5c3f7b9001cfa093c',
      '643d69a5c3f7b9001cfa0941',
      '643d69a5c3f7b9001cfa0942'
    ];
    ingredientsId.forEach((id) => {
      const item = cy.get(`[data-cy="${id}"]`)
      item.contains('Добавить').click();
    });

    cy.get('[data-cy="BurgerConstructorOrder"]').contains('Оформить заказ').as('orderBtn');
    cy.get('@orderBtn').click();

    cy.get('[data-cy="modal"]').as('modal');
    cy.get('@modal').get('[data-cy="modal-children"]').as('children');
    cy.get('@children').contains('идентификатор заказа');
    cy.get('@children').contains('49498');

    cy.get('[data-cy="modal-close-btn"]').click();
    cy.get('@modal').should('not.exist');

    cy.get('@burgerTopInfo').contains('Выберите булки');
    cy.get('@burgerBottomInfo').contains('Выберите булки');
    cy.get('@burgerMiddleInfo').contains('Выберите начинку');
  });
});

