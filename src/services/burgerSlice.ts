import { PayloadAction, createSlice, nanoid } from '@reduxjs/toolkit';
import { TConstructorIngredient, TIngredient } from '@utils-types';

type TBurgerConstructor = {
  bun: TConstructorIngredient | null;
  ingredients: TConstructorIngredient[];
};

export const initialState: TBurgerConstructor = {
  bun: null,
  ingredients: []
};

export const burgerSlice = createSlice({
  name: 'burger',
  initialState,
  reducers: {
    addIngredient: {
      reducer: (state, action: PayloadAction<TConstructorIngredient>) => {
        if (action.payload.type === 'bun') {
          state.bun = action.payload;
        } else {
          state.ingredients.push(action.payload);
        }
      },
      prepare: (ingredient: TIngredient) => ({
        payload: { ...ingredient, id: nanoid() }
      })
    },

    // Сокращение ing = ingredient
    ingredientMoveDown: (
      state,
      action: PayloadAction<TConstructorIngredient>
    ) => {
      const ings = state.ingredients;
      const ingId = action.payload.id;
      const ingIndex = ings.findIndex((item) => item.id === ingId);
      if (ingIndex > -1 && ingIndex < ings.length - 1) {
        ings.splice(ingIndex, 2, ings[ingIndex + 1], ings[ingIndex]);
      }
    },
    ingredientMoveUp: (
      state,
      action: PayloadAction<TConstructorIngredient>
    ) => {
      const ings = state.ingredients;
      const ingId = action.payload.id;
      const ingIndex = ings.findIndex((item) => item.id === ingId);
      if (ingIndex > 0) {
        ings.splice(ingIndex - 1, 2, ings[ingIndex], ings[ingIndex - 1]);
      }
    },
    ingredientDelete: (
      state,
      action: PayloadAction<TConstructorIngredient>
    ) => {
      const ings = state.ingredients;
      const ingId = action.payload.id;
      const ingIndex = ings.findIndex((item) => item.id === ingId);
      if (ingIndex > -1) {
        ings.splice(ingIndex, 1);
      }
    },
    clearOrder: (state) => {
      state.bun = null;
      state.ingredients = [];
    }
  },
  selectors: {
    getBurgerItems: (state) => state,
    getOrderIngredients: (state) => {
      const order: string[] = [];
      const bunId = state.bun?._id;
      if (bunId) {
        order.push(bunId);
        state.ingredients.forEach((item) => order.push(item._id));
        order.push(bunId);
      }
      return order;
    }
  }
});

export const { getBurgerItems, getOrderIngredients } = burgerSlice.selectors;
export const {
  addIngredient,
  ingredientMoveDown,
  ingredientMoveUp,
  ingredientDelete,
  clearOrder
} = burgerSlice.actions;

export default burgerSlice.reducer;
