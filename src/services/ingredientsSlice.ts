import { getIngredientsApi } from '@api';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { TIngredient } from '@utils-types';

type TIngredientsData = {
  isIngredientsRequest: boolean;
  isIngredientsError: boolean;
  isIngredientsLoading: boolean;
  ingredients: TIngredient[];
};

const initialState: TIngredientsData = {
  isIngredientsRequest: false,
  isIngredientsError: false,
  isIngredientsLoading: true,
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
        state.isIngredientsRequest = true;
        state.isIngredientsError = false;
        state.isIngredientsLoading = true;
      })
      .addCase(getIngredientsFromServer.rejected, (state) => {
        state.isIngredientsRequest = false;
        state.isIngredientsError = true;
      })
      .addCase(getIngredientsFromServer.fulfilled, (state, action) => {
        state.ingredients = action.payload;
        state.isIngredientsRequest = false;
        state.isIngredientsLoading = false;
      });
  }
});

export const {
  getIngredients,
  getIsIngredientsLoading,
  getIsIngredientsError,
  getBuns,
  getMains,
  getSauces
} = ingredientsSlice.selectors;
// export const { } = ingredientsSlice.actions;
export default ingredientsSlice.reducer;
