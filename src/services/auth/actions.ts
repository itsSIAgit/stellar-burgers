import {
  TLoginData,
  TRegisterData,
  getUserApi,
  loginUserApi,
  logoutApi,
  registerUserApi,
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

// Вход пользователя
export const login = createAsyncThunk(
  'auth/login',
  async (data: TLoginData) => await loginUserApi(data)
);

// Выход пользователя из системы
export const logout = createAsyncThunk(
  'auth/logout',
  async () => await logoutApi()
);

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

// Пользователь обновляет свои данные
export const updateUser = createAsyncThunk(
  'auth/updateUser',
  async (user: Partial<TRegisterData>) => await updateUserApi(user)
);

// Регистрация нового пользователя
export const register = createAsyncThunk(
  'auth/register',
  async (data: TRegisterData) => await registerUserApi(data)
);
