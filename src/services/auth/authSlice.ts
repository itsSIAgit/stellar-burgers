import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TUser } from '@utils-types';
import { login, logout, register, updateUser } from './actions';
import { deleteCookie, setCookie } from '../../utils/cookie';

type TAuth = {
  haveError: boolean;
  isAuthChecked: boolean;
  isLoading: boolean; //! а надо? ========================================
  user: TUser | null;
};

const initialState: TAuth = {
  haveError: false,
  isLoading: false,
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
    getUser: (state) => state.user, //?? { email: '', name: '' },
    getIsAuthChecked: (state) => state.isAuthChecked
  },
  extraReducers: (builder) => {
    builder
      //Проверка учетки при загрузке приложения
      // .addCase(checkAuth.pending, (state) => {
      //   // console.log('PENDING-0');
      //   state.isAuthChecked = false;
      //   state.isLoading = true;
      //   state.haveError = false;
      // })
      // .addCase(checkAuth.rejected, (state) => {
      //   // console.log('REJECTED-0');
      //   state.isLoading = false;
      //   state.isAuthChecked = true;
      //   state.user = null;
      //   deleteCookie('accessToken');
      //   localStorage.removeItem('refreshToken');
      // })
      // .addCase(checkAuth.fulfilled, (state, action) => {
      //   // console.log('FULFILLED-0');
      //   state.isLoading = false;
      //   state.isAuthChecked = true;
      //   if (action.payload.success) {
      //     state.user = action.payload.user;
      //   } else {
      //     state.haveError = true;
      //   }
      // })

      // Регистрация нового пользователя
      .addCase(register.pending, (state) => {
        state.isLoading = true;
        state.haveError = false;
      })
      .addCase(register.rejected, (state) => {
        state.isLoading = false;
        state.haveError = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
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

      // Пользователь обновляет свои данные
      .addCase(updateUser.pending, (state) => {
        state.isLoading = true;
        state.haveError = false;
      })
      .addCase(updateUser.rejected, (state) => {
        state.isLoading = false;
        state.haveError = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload.success) {
          state.user = action.payload.user;
        } else {
          state.haveError = true;
        }
      })

      // Выход пользователя из системы
      .addCase(logout.pending, (state) => {
        state.isLoading = true;
        state.haveError = false;
        // console.log('PENDING');
      })
      .addCase(logout.rejected, (state) => {
        state.isLoading = false;
        state.haveError = true;
        // console.log('REJECTED');
      })
      .addCase(logout.fulfilled, (state, action) => {
        // console.log('FULFILLED');
        state.isLoading = false;
        if (action.payload.success) {
          // console.log('УДАЛЯЕМ ТОКЕНЫ');
          state.user = null;
          deleteCookie('accessToken');
          localStorage.removeItem('refreshToken');
        } else {
          state.haveError = true;
        }
      })

      // Вход пользователя
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.haveError = false;
        // console.log('PENDING2');
      })
      .addCase(login.rejected, (state) => {
        state.isLoading = false;
        state.haveError = true;
        // console.log('REJECTED2');
      })
      .addCase(login.fulfilled, (state, action) => {
        // console.log('FULFILLED2');
        state.isLoading = false;
        if (action.payload.success) {
          // console.log('СТАВИМ ТОКЕНЫ');
          const accessToken = action.payload.accessToken;
          const refreshToken = action.payload.refreshToken;
          setCookie('accessToken', accessToken);
          localStorage.setItem('refreshToken', refreshToken);
          state.user = action.payload.user;
          // console.log(state.user);
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
