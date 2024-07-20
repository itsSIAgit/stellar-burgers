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

const App = () => {
  const location = useLocation();
  const backgroundLocation = location.state?.background;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const haveErrorLoading = [
    useSelector(getIsIngredientsError),
    useSelector(getIsOrdersError)
  ].some((err) => err === true);

  useEffect(() => {
    dispatch(getIngredientsFromServer());
    dispatch(getOrdersFromServer());
  }, []);

  return (
    <div className={styles.app}>
      <AppHeader />
      {haveErrorLoading ? (
        <Modal title={'Ошибка'} onClose={() => window.location.reload()}>
          <p>Ошибка загрузки.</p>
          <p>Попробуйте перезагрузить страницу.</p>
        </Modal>
      ) : null}

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
        <Route path='/profile' element={<Profile />} />
        <Route path='/profile/orders' element={<ProfileOrders />} />

        {/* Защищенные роуты: залогиненный не должен попасть */}
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/reset-password' element={<ResetPassword />} />
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
              <Modal title={''} onClose={() => navigate(-1)}>
                <OrderInfo />
              </Modal>
            }
          />
        </Routes>
      )}
    </div>
  );
};

export default App;
