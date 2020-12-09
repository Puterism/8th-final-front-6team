import React, { useState, useCallback } from 'react';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import _ from 'lodash';
import { ChipsState } from '../states/atoms';

const useChips = () => {
  const [chips, setChips] = useRecoilState(ChipsState);
  const [recommendedChips, setRecommendedChips] = useState([]);

  const addChip = useCallback(chip => {
    setChips(prev => {
      if (prev && prev.findIndex(prevChip => prevChip.keyword === chip.keyword) === -1) {
        return prev.concat(chip);
      }
      return prev;
    });
  }, []);

  const removeChip = useCallback(chip => {
    console.log(chip);
    setChips(prev => prev.filter(c => c.keyword !== chip.keyword));
  }, []);

  const fetchRecommendedChips = useCallback(async () => {
    const { chips } = (await axios.get(`https://vegetable.tk/api/v1/chips/recommend`)).data;
    setRecommendedChips(chips);
  }, []);

  return { addChip, removeChip, fetchRecommendedChips, recommendedChips, chips };
};

export default useChips;
