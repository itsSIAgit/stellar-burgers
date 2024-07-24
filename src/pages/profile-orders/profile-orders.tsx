import { Preloader } from '@ui';
import { ProfileOrdersUI } from '@ui-pages';
import { TOrder } from '@utils-types';
import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from '../../services/store';
import {
  getIsUserOrdersError,
  getIsUserOrdersLoading,
  getUserOrders,
  getUserOrdersFromServer
} from '../../services/userOrderSlice';
import { Modal } from '@components';
import { useNavigate } from 'react-router-dom';

export const ProfileOrders: FC = () => {
  const orders: TOrder[] = useSelector(getUserOrders);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoading = useSelector(getIsUserOrdersLoading);
  const haveUserOrderError = useSelector(getIsUserOrdersError);

  useEffect(() => {
    dispatch(getUserOrdersFromServer());
  }, []);

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <>
      {haveUserOrderError && (
        <Modal
          title={'Ошибка'}
          onClose={() => {
            navigate(-1);
          }}
        >
          <p>Загрузка заказов не удалась.</p>
          <p>Попробуйте позже...</p>
        </Modal>
      )}

      <ProfileOrdersUI orders={orders} />
    </>
  );
};
