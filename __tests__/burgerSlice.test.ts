import { expect, test, describe } from '@jest/globals';
import { configureStore } from '@reduxjs/toolkit';
import { ingredientsTestData } from './testData';
import burgerSliceReducer, { addIngredient, clearOrder, ingredientDelete, ingredientMoveDown, ingredientMoveUp, initialState } from '../src/services/burgerSlice';

describe('Тестируем burgerSlice', () => {
  describe('Базовые функции', () => {
    test('[addIngredient] Добавить ингридиент: булка', () => {
      const { bun } = burgerSliceReducer(initialState, addIngredient(ingredientsTestData[0]));
      
      expect(bun).not.toBeNull();
      if (bun) {
        expect(bun.id).toBeDefined();
        expect(bun).toMatchObject(ingredientsTestData[0]);
      }
    });
    
    test('[addIngredient] Добавить ингридиент: мясо', () => {
      const { ingredients } = burgerSliceReducer(initialState, addIngredient(ingredientsTestData[1]));
      
      expect(ingredients[0].id).toBeDefined();
      expect(ingredients).toMatchObject([ingredientsTestData[1]]);
    });

    test('[clearOrder] Заполнить и очистить состав', () => {
      const store = configureStore({
        reducer: { burger: burgerSliceReducer }
      });
      ingredientsTestData.forEach((item) => {
        store.dispatch(addIngredient(item));
      });

      expect(store.getState().burger.bun).not.toBeNull();
      expect(store.getState().burger.ingredients.length).not.toBe(0);

      store.dispatch(clearOrder());

      expect(store.getState().burger.bun).toBeNull();
      expect(store.getState().burger.ingredients.length).toBe(0);
    });
  });

  describe('Манипулируем составом бургера', () => {
      const store = configureStore({
        reducer: { burger: burgerSliceReducer }
      });

      store.dispatch(addIngredient(ingredientsTestData[0])); //булка
      store.dispatch(addIngredient(ingredientsTestData[1])); //main [0]
      store.dispatch(addIngredient(ingredientsTestData[2])); //main [1]
      store.dispatch(addIngredient(ingredientsTestData[3])); //соус [2]

      const ingredient = store.getState().burger.ingredients[1];

    test('[ingredientMoveUp] Переместить ингридиент выше', () => {
      store.dispatch(ingredientMoveUp(ingredient));

      expect(store.getState().burger.ingredients).toMatchObject([
        ingredientsTestData[2],
        ingredientsTestData[1],
        ingredientsTestData[3]
      ]);
    });

    test('[ingredientMoveDown] Переместить ингридиент ниже', () => {
      store.dispatch(ingredientMoveDown(ingredient));

      expect(store.getState().burger.ingredients).toMatchObject([
        ingredientsTestData[1],
        ingredientsTestData[2],
        ingredientsTestData[3]
      ]);
    });

    test('[ingredientDelete] Удалить ингридиент', () => {
      store.dispatch(ingredientDelete(ingredient));

      expect(store.getState().burger.ingredients.length).toBe(2);
      expect(store.getState().burger.ingredients).toMatchObject([
        ingredientsTestData[1],
        ingredientsTestData[3]
      ]);
    });
  });
});