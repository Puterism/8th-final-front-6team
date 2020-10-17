import React, { useReducer, useCallback } from 'react';
import TestComponent from '../components/TestComponent';
import { testInitialState, testReducer } from '../reducers/testReducer';

const MainPage = () => {
  const [testState, testDispatch] = useReducer(testReducer, testInitialState);

  const handleTestButtonClick = useCallback(() => {
    testDispatch({ type: 'CLICK_BUTTON' });
  }, [testDispatch]);

  return (
    <div>
      <TestComponent number={testState.number} isEnd={testState.isEnd} onClickButton={handleTestButtonClick} />
    </div>
  );
};

export default MainPage;
