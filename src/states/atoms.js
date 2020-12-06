import { atom } from 'recoil';

export const CountState = atom({
  key: 'CountState',
  default: 0
});

export const ChipsState = atom({
  key: 'ChipsState',
  default: []
});
