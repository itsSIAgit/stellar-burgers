import { Preloader } from '@ui';
import { FeedUI } from '@ui-pages';
import { TOrder } from '@utils-types';
import { FC } from 'react';
import { useDispatch, useSelector } from '../../services/store';
import {
  getIsOrdersLoading,
  getOrders,
  getOrdersFromServer
} from '../../services/ordersSlice';

export const Feed: FC = () => {
  const isOrdersLoading: boolean = useSelector(getIsOrdersLoading);
  const orders: TOrder[] = useSelector(getOrders);
  const dispatch = useDispatch();

  const handleGetFeeds = () => dispatch(getOrdersFromServer());

  return (
    <>
      {isOrdersLoading ? (
        <Preloader />
      ) : (
        <FeedUI orders={orders} handleGetFeeds={handleGetFeeds} />
      )}
      ;
    </>
  );
};
