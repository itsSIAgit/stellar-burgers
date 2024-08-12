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

    cy.visit('http://localhost:4000');
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

    const orderBtn = cy.get('[data-cy="BurgerConstructorOrder"]').contains('Оформить заказ');
    orderBtn.click();

    const modal = cy.get('[data-cy="modal"]');
    modal.should('exist');
    modal.get('[data-cy="modal-children"]').contains('идентификатор заказа');
    modal.get('[data-cy="modal-children"]').contains('49498');

    cy.get('[data-cy="modal-close-btn"]').click();
    cy.get('[data-cy="modal"]').should('not.exist');

    cy.get('[data-cy="constructorBunTop"]').contains('Выберите булки');
    cy.get('[data-cy="constructorBunBottom"]').contains('Выберите булки');
    cy.get('[data-cy="BurgerConstructorElements"]').contains('Выберите начинку');
  });
});

