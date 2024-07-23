import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TUser } from '@utils-types';
import { checkAuth, register, updateUser } from './actions';
import { setCookie } from '../../utils/cookie';

type TAuth = {
  haveError: boolean;
  isAuthChecked: boolean;
  isPending: boolean;
  user: TUser | null;
};

const initialState: TAuth = {
  haveError: false,
  isPending: false,
  isAuthChecked: false,
  user: null
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearAuthError: (state) => {
      state.haveError = false;
    },
    setIsAuthChecked: (state, action: PayloadAction<boolean>) => {
      state.isAuthChecked = action.payload;
    }
  },
  selectors: {
    getHaveAuthError: (state) => state.haveError,
    getUserName: (state) => state.user?.name ?? '',
    getUser: (state) => state.user ?? { email: '', name: '' }
  },
  extraReducers: (builder) => {
    builder
      // Проверка учетки при загрузке приложения
      .addCase(checkAuth.pending, (state) => {
        state.isPending = true;
        state.haveError = false;
      })
      .addCase(checkAuth.rejected, (state) => {
        state.isPending = false;
        state.isAuthChecked = true;
      })
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.isPending = false;
        state.isAuthChecked = true;
        if (action.payload.success) {
          state.user = action.payload.user;
        } else {
          state.haveError = true;
        }
      })

      // Регистрация нового пользователя
      .addCase(register.pending, (state) => {
        state.isPending = true;
        state.haveError = false;
      })
      .addCase(register.rejected, (state) => {
        state.isPending = false;
        state.haveError = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isPending = false;
        if (action.payload.success) {
          const accessToken = action.payload.accessToken;
          const refreshToken = action.payload.refreshToken;
          setCookie('accessToken', accessToken);
          localStorage.setItem('refreshToken', refreshToken);
          state.user = action.payload.user;
        } else {
          state.haveError = true;
        }
      })

      // Обновление данных авторизованного пользователя
      .addCase(updateUser.pending, (state) => {
        state.isPending = true;
        state.haveError = false;
      })
      .addCase(updateUser.rejected, (state) => {
        state.isPending = false;
        state.haveError = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.isPending = false;
        if (action.payload.success) {
          state.user = action.payload.user;
        } else {
          state.haveError = true;
        }
      });
  }
});

export const { getHaveAuthError, getUserName, getUser } = authSlice.selectors;
export const { clearAuthError } = authSlice.actions;

export default authSlice.reducer;
