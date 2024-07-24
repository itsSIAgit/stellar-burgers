import { getIngredientsApi } from '@api';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { TIngredient } from '@utils-types';

type TIngredientsData = {
  isIngredientsError: boolean;
  isIngredientsLoading: boolean;
  ingredients: TIngredient[];
};

const initialState: TIngredientsData = {
  isIngredientsError: false,
  isIngredientsLoading: false,
  ingredients: []
};

export const getIngredientsFromServer = createAsyncThunk(
  'ingredients/getIngredients',
  async () => await getIngredientsApi()
);

export const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState,
  reducers: {},
  selectors: {
    getIngredients: (state) => state.ingredients,
    getIsIngredientsLoading: (state) => state.isIngredientsLoading,
    getIsIngredientsError: (state) => state.isIngredientsError,
    getBuns: (state) => state.ingredients.filter((item) => item.type === 'bun'),
    getMains: (state) =>
      state.ingredients.filter((item) => item.type === 'main'),
    getSauces: (state) =>
      state.ingredients.filter((item) => item.type === 'sauce')
  },
  extraReducers: (builder) => {
    builder
      .addCase(getIngredientsFromServer.pending, (state) => {
        state.isIngredientsError = false;
        state.isIngredientsLoading = true;
      })
      .addCase(getIngredientsFromServer.rejected, (state) => {
        state.isIngredientsLoading = false;
        state.isIngredientsError = true;
      })
      .addCase(getIngredientsFromServer.fulfilled, (state, action) => {
        state.ingredients = action.payload;
        state.isIngredientsLoading = false;
      });
  }
});

export const {
  getIsIngredientsError,
  getIsIngredientsLoading,
  getIngredients,
  getBuns,
  getMains,
  getSauces
} = ingredientsSlice.selectors;

export default ingredientsSlice.reducer;
