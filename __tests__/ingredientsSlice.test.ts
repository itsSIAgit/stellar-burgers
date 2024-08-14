import { expect, test, describe } from '@jest/globals';
import { ingredientsTestData } from './testData';
import ingredientsSliceReducer, { getIngredientsFromServer, initialState } from '../src/services/ingredientsSlice';

describe('Тестируем ingredientsSlice', () => {
  test('[getIngredientsFromServer] Запрос ингридиентов отправлен', () => {
    const action = { type: getIngredientsFromServer.pending.type };
    const state = ingredientsSliceReducer(initialState, action);
    
    expect(state).toEqual({
      isIngredientsError: false,
      isIngredientsLoading: true,
      ingredients: []
    });
  });

  test('[getIngredientsFromServer] Запрос ингридиентов неудачен', () => {
    const action = { type: getIngredientsFromServer.rejected.type };
    const state = ingredientsSliceReducer(initialState, action);

    expect(state).toEqual({
      isIngredientsError: true,
      isIngredientsLoading: false,
      ingredients: []
    });
  });

  test('[getIngredientsFromServer] Запрос ингридиентов успешен', () => {
    const action = { type: getIngredientsFromServer.fulfilled.type, payload: ingredientsTestData };
    const state = ingredientsSliceReducer(initialState, action);

    expect(state).toEqual({
      isIngredientsError: false,
      isIngredientsLoading: false,
      ingredients: ingredientsTestData
    });
  });
});