import { PayloadAction, createSlice, nanoid } from '@reduxjs/toolkit';
import { TConstructorIngredient, TIngredient } from '@utils-types';

type TBurgerConstructor = {
  bun: TIngredient | null;
  ingredients: TConstructorIngredient[];
};

const initialState: TBurgerConstructor = {
  bun: null,
  ingredients: []
};

export const burgerSlice = createSlice({
  name: 'burger',
  initialState,
  reducers: {
    addIngredient: (state, action: PayloadAction<TIngredient>) => {
      if (action.payload.type === 'bun') {
        state.bun = action.payload;
      } else {
        const newId = nanoid();
        state.ingredients.push({
          id: newId,
          ...action.payload
        });
      }
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
    }
  },
  selectors: {
    getBurgerItems: (state) => state,
    getOrderIngredients: (state) => {
      const order: string[] = [];
      const bunId = state.bun?._id;
      if (bunId) {
        order.push(bunId, bunId);
        state.ingredients.forEach((item) => order.push(item._id));
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
  ingredientDelete
} = burgerSlice.actions;

export default burgerSlice.reducer;
