import React, { useCallback } from 'react';
import { TestComponentStyled } from './index.styles';

const TestComponent = (props) => {
  const { onClickButton, number, isEnd } = props;

  const handleClick = useCallback(
    () => {
      // 여기서는 UI와 관련된 작업을 처리함
      onClickButton && onClickButton(); // 여기서는 비즈니스 로직, 라우팅처리
    },
    [onClickButton],
  );

  return (
    <TestComponentStyled>
      <div>{number}</div>
      <div>{isEnd ? 'end' : 'notEnd'}</div>
      <button type="button" onClick={handleClick}>dispatch</button>
    </TestComponentStyled>
  );
};

export default TestComponent;
