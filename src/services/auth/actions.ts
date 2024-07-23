import {
  TLoginData,
  TRegisterData,
  forgotPasswordApi,
  getOrdersApi,
  getUserApi,
  loginUserApi,
  logoutApi,
  orderBurgerApi,
  refreshToken,
  registerUserApi,
  resetPasswordApi,
  updateUserApi
} from '@api';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { deleteCookie, getCookie } from '../../utils/cookie';
import {
  setHaveAuthError,
  setIsAuthChecked,
  setIsAuthLoading,
  setUser
} from './authSlice';

export const login = createAsyncThunk(
  'auth/login',
  async (data: TLoginData) => await loginUserApi(data)
);

//! Надо перекинуть на страницу входа
export const logout = createAsyncThunk(
  'auth/logout',
  async () => await logoutApi()
  // async (_, { dispatch }) => {
  //   console.log('СЕТЕВОЙ ЛОГАУТ ВЫЗВАН');

  //   await logoutApi()
  //     .then((res) => {
  //       console.log(res);
  //       dispatch(setUser(null));
  //       deleteCookie('accessToken');
  //       localStorage.removeItem('refreshToken');
  //     })
  //     .catch(() => dispatch(setHaveAuthError(true)));
  // }
);

//Работает
// Проверка учетки при загрузке приложения
export const checkAuth = createAsyncThunk(
  'auth/checkAuth',
  async (_, { dispatch }) => {
    dispatch(setIsAuthChecked(false));

    if (getCookie('accessToken')) {
      dispatch(setIsAuthLoading(true));
      dispatch(setHaveAuthError(false));
      await getUserApi()
        .then((res) => dispatch(setUser(res.user)))
        .catch(() => {
          dispatch(setUser(null));
          deleteCookie('accessToken');
          localStorage.removeItem('refreshToken');
        })
        .finally(() => {
          dispatch(setIsAuthLoading(false));
          dispatch(setIsAuthChecked(true));
        });
    } else {
      dispatch(setUser(null));
      dispatch(setIsAuthChecked(true));
    }
  }
);

// export const keepTokenActual = createAsyncThunk(
//   'auth/keepTokenActual',
//   async () => await refreshToken()
// );

//Работает
export const updateUser = createAsyncThunk(
  'auth/updateUser',
  async (user: Partial<TRegisterData>) => await updateUserApi(user)
);

//Работает
export const register = createAsyncThunk(
  'auth/register',
  async (data: TRegisterData) => await registerUserApi(data)
);

export const forgotPassword = createAsyncThunk(
  'auth/forgotPassword',
  async (data: { email: string }) => await forgotPasswordApi(data)
);

//! Не нужно асинхронно
export const resetPassword = createAsyncThunk(
  'auth/resetPassword',
  async (data: { password: string; token: string }) =>
    await resetPasswordApi(data)
);

export const orderBurger = createAsyncThunk(
  'auth/orderBurger',
  async (ingredients: string[]) => await orderBurgerApi(ingredients)
);

export const getUserOrders = createAsyncThunk(
  'auth/getUserOrders',
  async () => await getOrdersApi()
);
