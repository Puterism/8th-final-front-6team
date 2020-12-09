import { useCallback, useState } from 'react';
import _ from 'lodash';
import axios from 'axios';

const useAutoComplete = () => {
  const [autoCompleteChips, setAutoCompleteChips] = useState([]);
  const [isEmptyAutoComplete, setIsEmptyAutoComplete] = useState(false);

  const fetchAutoCompleteChips = useCallback(
    _.debounce(searchValue => {
      if (!searchValue) {
        setAutoCompleteChips([]);
        return;
      }

      axios.get(`https://vegetable.tk/api/v1/chips/${searchValue}`).then(result => {
        const { chips } = result.data;
        if (_.isEmpty(chips)) {
          setIsEmptyAutoComplete(true);
        } else {
          setIsEmptyAutoComplete(false);
          setAutoCompleteChips(result.data.chips);
        }
      });
    }, 200),
    []
  );

  return { fetchAutoCompleteChips, autoCompleteChips, setAutoCompleteChips, isEmptyAutoComplete, setIsEmptyAutoComplete };
};

export default useAutoComplete;
