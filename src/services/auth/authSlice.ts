import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TUser } from '@utils-types';
import { login, logout, register, updateUser } from './actions';
import { deleteCookie, setCookie } from '../../utils/cookie';

type TAuth = {
  haveError: boolean;
  isAuthChecked: boolean;
  user: TUser | null;
};

const initialState: TAuth = {
  haveError: false,
  isAuthChecked: false,
  user: null
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setHaveAuthError: (state, action: PayloadAction<boolean>) => {
      state.haveError = action.payload;
    },
    setIsAuthChecked: (state, action: PayloadAction<boolean>) => {
      state.isAuthChecked = action.payload;
    },
    setIsAuthLoading: (state, action: PayloadAction<boolean>) => {
      state.isAuthChecked = action.payload;
    },
    setUser: (state, action: PayloadAction<TUser | null>) => {
      state.user = action.payload;
    }
  },
  selectors: {
    getHaveAuthError: (state) => state.haveError,
    getUserName: (state) => state.user?.name ?? '',
    getUser: (state) => state.user,
    getIsAuthChecked: (state) => state.isAuthChecked
  },
  extraReducers: (builder) => {
    builder

      // Регистрация нового пользователя
      .addCase(register.pending, (state) => {
        state.haveError = false;
      })
      .addCase(register.rejected, (state) => {
        state.haveError = true;
      })
      .addCase(register.fulfilled, (state, action) => {
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

      // Вход пользователя
      .addCase(login.pending, (state) => {
        state.haveError = false;
      })
      .addCase(login.rejected, (state) => {
        state.haveError = true;
      })
      .addCase(login.fulfilled, (state, action) => {
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

      // Выход пользователя из системы
      .addCase(logout.pending, (state) => {
        state.haveError = false;
      })
      .addCase(logout.rejected, (state) => {
        state.haveError = true;
      })
      .addCase(logout.fulfilled, (state, action) => {
        if (action.payload.success) {
          state.user = null;
          deleteCookie('accessToken');
          localStorage.removeItem('refreshToken');
        } else {
          state.haveError = true;
        }
      })

      // Пользователь обновляет свои данные
      .addCase(updateUser.pending, (state) => {
        state.haveError = false;
      })
      .addCase(updateUser.rejected, (state) => {
        state.haveError = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        if (action.payload.success) {
          state.user = action.payload.user;
        } else {
          state.haveError = true;
        }
      });
  }
});

export const { getHaveAuthError, getUserName, getUser, getIsAuthChecked } =
  authSlice.selectors;
export const { setHaveAuthError, setIsAuthChecked, setIsAuthLoading, setUser } =
  authSlice.actions;

export default authSlice.reducer;
