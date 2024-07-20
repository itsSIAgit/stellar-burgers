import { useDispatch, useSelector } from '../../services/store';

import styles from './constructor-page.module.css';

import { BurgerIngredients, Modal } from '../../components';
import { BurgerConstructor } from '../../components';
import { Preloader } from '../../components/ui';
import { FC, useEffect } from 'react';
import {
  getIngredientsFromServer,
  getIsIngredientsError,
  getIsIngredientsLoading
} from '../../services/ingredientsSlice';

export const ConstructorPage: FC = () => {
  const isIngredientsLoading: boolean = useSelector(getIsIngredientsLoading);
  const isIngredientsError: boolean = useSelector(getIsIngredientsError);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getIngredientsFromServer());
  }, []);

  return (
    <>
      {isIngredientsError ? (
        <Modal title={'Ошибка'} onClose={() => window.location.reload()}>
          <p>Ошибка первичной загрузки.</p>
          <p>Попробуйте перезагрузить страницу.</p>
        </Modal>
      ) : null}
      {isIngredientsLoading ? (
        <Preloader />
      ) : (
        <main className={styles.containerMain}>
          <h1
            className={`${styles.title} text text_type_main-large mt-10 mb-5 pl-5`}
          >
            Соберите бургер
          </h1>
          <div className={`${styles.main} pl-5 pr-5`}>
            <BurgerIngredients />
            <BurgerConstructor />
          </div>
        </main>
      )}
    </>
  );
};
