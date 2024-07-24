import { FC, useMemo } from 'react';
import { TConstructorIngredient } from '@utils-types';
import { BurgerConstructorUI } from '@ui';
import { useDispatch, useSelector } from '../../services/store';
import {
  clearOrder,
  getBurgerItems,
  getOrderIngredients
} from '../../services/burgerSlice';
import {
  clearModalData,
  clearOrderError,
  getIsOrderError,
  getOrderModalData,
  getOrderRequest,
  orderBurger
} from '../../services/userOrderSlice';
import { Modal } from '@components';
import { useNavigate } from 'react-router-dom';
import { getOrdersFromServer } from '../../services/ordersSlice';
import { getUser } from '../../services/auth/authSlice';

export const BurgerConstructor: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const orderRequest = useSelector(getOrderRequest);
  const orderModalData = useSelector(getOrderModalData);
  const constructorItems = useSelector(getBurgerItems);
  const IsOrderError = useSelector(getIsOrderError);
  const order = useSelector(getOrderIngredients);
  const user = useSelector(getUser);

  const onOrderClick = () => {
    if (!constructorItems.bun || orderRequest) return;
    if (!user) {
      navigate('/login');
      return;
    }
    dispatch(orderBurger(order));
  };

  const closeOrderModal = () => {
    if (orderRequest) return;
    if (!IsOrderError) {
      dispatch(getOrdersFromServer());
      navigate('/profile/orders');
      dispatch(clearOrder());
      dispatch(clearModalData());
    }
  };

  const price = useMemo(
    () =>
      (constructorItems.bun ? constructorItems.bun.price * 2 : 0) +
      constructorItems.ingredients.reduce(
        (s: number, v: TConstructorIngredient) => s + v.price,
        0
      ),
    [constructorItems]
  );

  return (
    <>
      {IsOrderError && (
        <Modal
          title={'Ошибка'}
          onClose={() => {
            dispatch(clearOrderError());
          }}
        >
          <p>Заказ не удался.</p>
          <p>Попробуйте позже...</p>
        </Modal>
      )}

      <BurgerConstructorUI
        price={price}
        orderRequest={orderRequest}
        constructorItems={constructorItems}
        orderModalData={orderModalData}
        onOrderClick={onOrderClick}
        closeOrderModal={closeOrderModal}
      />
    </>
  );
};
