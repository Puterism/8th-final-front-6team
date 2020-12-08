import { useCallback, useState } from 'react';
import _ from 'lodash';
import axios from 'axios';

const useAutoComplete = () => {
  const [autoCompleteKeywords, setAutoCompleteKeywords] = useState([]);
  const [isEmptyAutoCompleteKeywords, setIsEmptyAutoCompleteKeywords] = useState(false);

  const fetchAutoCompleteKeywords = useCallback(
    _.debounce(searchValue => {
      if (!searchValue) {
        setAutoCompleteKeywords([]);
        return;
      }
      console.log(123);
      axios.get(`https://vegetable.tk/api/v1/chips/${searchValue}`).then(result => {
        const { chips } = result.data;
        if (_.isEmpty(chips)) {
          setIsEmptyAutoCompleteKeywords(true);
        } else {
          setIsEmptyAutoCompleteKeywords(false);
          setAutoCompleteKeywords(result.data.chips.map(chip => chip.keyword));
        }
      });
    }, 200),
    []
  );

  return { fetchAutoCompleteKeywords, autoCompleteKeywords, setAutoCompleteKeywords, isEmptyAutoCompleteKeywords, setIsEmptyAutoCompleteKeywords };
};

export default useAutoComplete;
