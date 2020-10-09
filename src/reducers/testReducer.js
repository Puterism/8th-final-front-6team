import produce from 'immer';

export const testInitialState = {
  number: 0,
  isEnd: false,
};

export const testReducer = (state, action) => {
  switch (action.type) {
    case 'CLICK_BUTTON':
      return produce(state, (draft) => {
        draft.number++;
        draft.isEnd = !draft.isEnd;
      });
    default:
      return state;
  }
};
