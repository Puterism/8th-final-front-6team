import React, { useState, useCallback } from 'react';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import _ from 'lodash';
import { ChipsState } from '../states/atoms';

const useChips = () => {
  const [chips, setChips] = useRecoilState(ChipsState);
  const [recommendedChips, setRecommendedChips] = useState([]);

  const addChip = useCallback(searchText => {
    setChips(prev => _.uniq(prev.concat(searchText)));
  }, []);

  const removeChip = useCallback(chip => {
    setChips(prev => prev.filter(c => c !== chip));
  }, []);

  const fetchRecommendedChips = useCallback(async () => {
    const { chips } = (await axios.get(`https://vegetable.tk/api/v1/chips`)).data;
    setRecommendedChips(chips);
  }, []);

  return { addChip, removeChip, fetchRecommendedChips, recommendedChips, chips };
};

export default useChips;
