import {
  ConstructorPage,
  Feed,
  ForgotPassword,
  Login,
  NotFound404,
  Profile,
  ProfileOrders,
  Register,
  ResetPassword
} from '@pages';
import '../../index.css';
import styles from './app.module.css';

import { AppHeader, IngredientDetails, Modal, OrderInfo } from '@components';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from '../../services/store';
import { useEffect } from 'react';
import {
  getIngredientsFromServer,
  getIsIngredientsError
} from '../../services/ingredientsSlice';
import {
  getIsOrdersError,
  getOrdersFromServer
} from '../../services/ordersSlice';
import {
  setHaveAuthError,
  getHaveAuthError
} from '../../services/auth/authSlice';
import { checkAuth } from '../../services/auth/actions';
import { OnlyAuth, OnlyUnAuth } from '../protected-route';

const App = () => {
  const location = useLocation();
  const backgroundLocation = location.state?.background;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const haveErrorLoading = [
    useSelector(getIsIngredientsError),
    useSelector(getIsOrdersError)
  ].some((err) => err === true);

  const haveAuthError = useSelector(getHaveAuthError);

  useEffect(() => {
    dispatch(getIngredientsFromServer());
    dispatch(checkAuth());

    // Если пользователь откроет больше 1го окна - это позволит
    // автоматически обновить или выкинуть пользователя в других окнах
    // Прим.: событие происходит только в других окнах, а не в том
    // что совершило изменение хранилища
    window.addEventListener('storage', (e) => {
      if (e.key === 'refreshToken') {
        dispatch(checkAuth());
      }
    });
  }, []);

  return (
    <div className={styles.app}>
      <AppHeader />

      {/* Покажем критическую ошибку, при которой
          позволять пользователю дальше тыкать не стоит */}
      {haveErrorLoading && (
        <Modal
          title={'Ошибка'}
          onClose={() => {
            window.location.reload();
          }}
        >
          <p>Важные данные загрузить не удалось.</p>
          <p>Попробуйте перезагрузить страницу.</p>
        </Modal>
      )}

      {/* Покажем уведомление об ошибке auth и сбросим,
          чтобы показать один раз, и позволить пользователю дальше тыкать */}
      {haveAuthError && (
        <Modal
          title={'Ошибка'}
          onClose={() => {
            dispatch(setHaveAuthError(false));
          }}
        >
          <p>Операция не удалась.</p>
          <p>Попробуйте снова.</p>
        </Modal>
      )}

      <Routes location={backgroundLocation || location}>
        <Route path='/' element={<ConstructorPage />} />
        <Route path='*' element={<NotFound404 />} />
        <Route path='/feed' element={<Feed />} />

        {/* Страницы с детальной информацией при переходе по ссылке*/}
        <Route
          path='/ingredients/:id'
          element={
            <main className={styles.detailPageWrap}>
              <IngredientDetails />
            </main>
          }
        />
        <Route
          path='/feed/:number'
          element={
            <main className={styles.detailPageWrap}>
              <OrderInfo />
            </main>
          }
        />

        {/* Защищенные роуты: юзер залогинен */}
        <Route path='/profile' element={<OnlyAuth component={<Profile />} />} />
        <Route
          path='/profile/orders'
          element={<OnlyAuth component={<ProfileOrders />} />}
        />
        <Route
          path='/profile/orders/:number'
          element={
            <OnlyAuth
              component={
                <main className={styles.detailPageWrap}>
                  <OrderInfo />
                </main>
              }
            />
          }
        />

        {/* Защищенные роуты: залогиненный не должен попасть */}
        <Route path='/login' element={<OnlyUnAuth component={<Login />} />} />
        <Route
          path='/register'
          element={<OnlyUnAuth component={<Register />} />}
        />
        <Route
          path='/forgot-password'
          element={<OnlyUnAuth component={<ForgotPassword />} />}
        />
        <Route
          path='/reset-password'
          element={<OnlyUnAuth component={<ResetPassword />} />}
        />
      </Routes>

      {backgroundLocation && (
        <Routes>
          {/* Модалки */}
          <Route
            path='/feed/:number'
            element={
              <Modal title={'Состав заказа'} onClose={() => navigate(-1)}>
                <OrderInfo />
              </Modal>
            }
          />
          <Route
            path='/ingredients/:id'
            element={
              <Modal title={'Подробное описание'} onClose={() => navigate(-1)}>
                <IngredientDetails />
              </Modal>
            }
          />
          {/* Защищенные модалки */}
          <Route
            path='/profile/orders/:number'
            element={
              <OnlyAuth
                component={
                  <Modal title={'Состав заказа'} onClose={() => navigate(-1)}>
                    <OrderInfo />
                  </Modal>
                }
              />
            }
          />
        </Routes>
      )}
    </div>
  );
};

export default App;
