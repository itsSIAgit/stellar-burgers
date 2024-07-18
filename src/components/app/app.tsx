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
import { Route, Routes } from 'react-router-dom';

const App = () => (
  <div className={styles.app}>
    <AppHeader />
    <Routes>
      <Route path='/' element={<ConstructorPage />} />
      <Route path='*' element={<NotFound404 />} />
      <Route path='/feed' element={<Feed />} />

      {/* Защищенные роуты: юзер залогинен */}
      <Route path='/profile' element={<Profile />} />
      <Route path='/profile/orders' element={<ProfileOrders />} />

      {/* Защищенные роуты: залогиненный не должен попасть */}
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/forgot-password' element={<ForgotPassword />} />
      <Route path='/reset-password' element={<ResetPassword />} />

      {/* Модалки */}
      <Route
        path='/feed/:number'
        element={
          <Modal
            title={''}
            onClose={function (): void {
              throw new Error('Function not implemented.');
            }}
          >
            <OrderInfo />{' '}
          </Modal>
        }
      />
      <Route
        path='/ingredients/:id'
        element={
          <Modal
            title={''}
            onClose={function (): void {
              throw new Error('Function not implemented.');
            }}
          >
            <IngredientDetails />{' '}
          </Modal>
        }
      />
      {/* Защищенные модалки */}
      <Route
        path='/profile/orders/:number'
        element={
          <Modal
            title={''}
            onClose={function (): void {
              throw new Error('Function not implemented.');
            }}
          >
            <OrderInfo />{' '}
          </Modal>
        }
      />
    </Routes>
  </div>
);

export default App;
