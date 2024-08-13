import { expect, test, describe } from '@jest/globals';
import { orderResponseTestData, userOrdersResponseTestData } from './testData';
import userOrdersSliceReducer, { clearModalData, clearOrderError, getUserOrdersFromServer, orderBurger } from '../src/services/userOrderSlice';

describe('Тестируем userOrdersSlice', () => {
  const initialState = {
    isUserOrdersError: false,
    isUserOrdersLoading: false,
    orderRequest: false,
    orderModalData: null,
    isOrderError: false,
    userOrders: []
  };

  describe('Тестируем основные редьюсеры', () => {
    test('[clearOrderError] Очищаем state от ошибки отправки заказа', () => {
      const state = userOrdersSliceReducer({ ...initialState, isOrderError: true }, clearOrderError());
      expect(state.isOrderError).toBe(false);
    });

    test('[clearModalData] Очищаем state от ошибки отправки заказа', () => {
      const order = {
        _id: '1',
        status: '1',
        name: '1',
        createdAt: '1',
        updatedAt: '1',
        number: 123,
        ingredients: ['1', '2', '3']
      }
      const state = userOrdersSliceReducer({ ...initialState, orderModalData: order }, clearModalData());
      expect(state.orderModalData).toBeNull();
    });
  });

  describe('[getUserOrdersFromServer] Тестируем запрос списка заказов пользователя', () => {
    test('Запрос отправлен', () => {
      const action = { type: getUserOrdersFromServer.pending.type };
      const state = userOrdersSliceReducer(initialState, action);
      
      expect(state).toEqual({
        isUserOrdersError: false,
        isUserOrdersLoading: true,
        orderRequest: false,
        orderModalData: null,
        isOrderError: false,
        userOrders: []
      });
    });

    test('Запрос неудачен', () => {
      const action = { type: getUserOrdersFromServer.rejected.type };
      const state = userOrdersSliceReducer(initialState, action);

      expect(state).toEqual({
        isUserOrdersError: true,
        isUserOrdersLoading: false,
        orderRequest: false,
        orderModalData: null,
        isOrderError: false,
        userOrders: []
      });
    });

    test('Запрос успешен', () => {
      const action = { type: getUserOrdersFromServer.fulfilled.type, payload: userOrdersResponseTestData.orders };
      const state = userOrdersSliceReducer(initialState, action);

      expect(state).toEqual({
        isUserOrdersError: false,
        isUserOrdersLoading: false,
        orderRequest: false,
        orderModalData: null,
        isOrderError: false,
        userOrders: userOrdersResponseTestData.orders
      });
    });
  });

  describe('[orderBurger] Тестируем запрос пользовательского заказа', () => {
    test('Запрос отправлен', () => {
      const action = { type: orderBurger.pending.type };
      const state = userOrdersSliceReducer(initialState, action);
      
      expect(state).toEqual({
        isUserOrdersError: false,
        isUserOrdersLoading: false,
        orderRequest: true,
        orderModalData: null,
        isOrderError: false,
        userOrders: []
      });
    });

    test('Запрос неудачен', () => {
      const action = { type: orderBurger.rejected.type };
      const state = userOrdersSliceReducer(initialState, action);

      expect(state).toEqual({
        isUserOrdersError: false,
        isUserOrdersLoading: false,
        orderRequest: false,
        orderModalData: null,
        isOrderError: true,
        userOrders: []
      });
    });

    test('Запрос успешен', () => {
      const action = { type: orderBurger.fulfilled.type, payload: orderResponseTestData };
      const state = userOrdersSliceReducer(initialState, action);

      expect(state).toEqual({
        isUserOrdersError: false,
        isUserOrdersLoading: false,
        orderRequest: false,
        orderModalData: orderResponseTestData.order,
        isOrderError: false,
        userOrders: []
      });
    });
  });
});