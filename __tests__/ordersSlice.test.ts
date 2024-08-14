import { expect, test, describe } from '@jest/globals';
import { feedsResponseTestData } from './testData';
import ordersSliceReducer, { getOrdersFromServer, initialState } from '../src/services/ordersSlice';

describe('Тестируем ordersSlice', () => {
  test('[getOrdersFromServer] Запрос общего списка заказов отправлен', () => {
    const action = { type: getOrdersFromServer.pending.type };
    const state = ordersSliceReducer(initialState, action);
    
    expect(state).toEqual({
      isOrdersError: false,
      isOrdersLoading: true,
      ordersData: {
        orders: [],
        total: 0,
        totalToday: 0
      }
    });
  });

  test('[getOrdersFromServer] Запрос общего списка заказов неудачен', () => {
    const action = { type: getOrdersFromServer.rejected.type };
    const state = ordersSliceReducer(initialState, action);

    expect(state).toEqual({
      isOrdersError: true,
      isOrdersLoading: false,
      ordersData: {
        orders: [],
        total: 0,
        totalToday: 0
      }
    });
  });

  test('[getOrdersFromServer] Запрос общего списка заказов успешен', () => {
    const action = { type: getOrdersFromServer.fulfilled.type, payload: feedsResponseTestData };
    const state = ordersSliceReducer(initialState, action);

    expect(state).toEqual({
      isOrdersError: false,
      isOrdersLoading: false,
      ordersData: {
        orders: feedsResponseTestData.orders,
        total: feedsResponseTestData.total,
        totalToday: feedsResponseTestData.totalToday
      }
    });
  });
});