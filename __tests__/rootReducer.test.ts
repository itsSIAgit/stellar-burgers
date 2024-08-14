import { expect, test, describe } from '@jest/globals';
import { rootReducer } from '../src/services/store'
import { rootReducerInitialStateTestData } from './testData';

describe('Тестируем rootReducer', () => {
  test('Вызов rootReducer с undefined состоянием и экшеном', () => {
    const testState = rootReducer(undefined, { type: 'UNKNOWN_ACTION' });
    expect(testState).toEqual(rootReducerInitialStateTestData);
  });
});