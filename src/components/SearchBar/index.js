import { Flex, IconButton, Box } from '@chakra-ui/core';
import React, { useState, useCallback, useEffect } from 'react';
import onClickOutside from 'react-onclickoutside';
import _ from 'lodash';

import NoResult from './NoResult';
import AutoComplete from './AutoComplete';
import SearchInput from './SearchInput';
import { SearchBtn, ArrowRightBtn } from '../../assets';
import useChips from '../../hooks/useChips';
import useAutoComplete from '../../hooks/useAutoComplete';

function SearchBar(props) {
  const [searchValue, setSearchValue] = useState('');
  const [isSubmitting] = useState(false);
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [isError, setIsError] = useState(false);
  const { chips, recommendedChips, addChip, fetchRecommendedChips } = useChips();
  const { autoCompleteChips, setAutoCompleteChips, fetchAutoCompleteChips, isEmptyAutoComplete, setIsEmptyAutoComplete } = useAutoComplete();
  const [isActive, setIsActive] = useState(false);
  const placeholder = isError ? '채소 종류를 한 개 이상 입력해 주세요' : props.placeholder;

  const reset = useCallback(() => {
    setIsEmptyAutoComplete(false);
    setAutoCompleteChips([]);
    setSearchValue('');
  }, []);

  const handleSearch = useCallback(async () => {
    if (!isActive) return setIsError(true);
    props.onSearch && (await props.onSearch());
  }, [isActive, props.onSearch]);

  const handleChange = useCallback(
    async e => {
      const input = e.target.value;
      if (_.isEmpty(input)) {
        reset && reset();
      }

      setIsError(false);
      setSearchValue(input);
      fetchAutoCompleteChips(input);
    },
    [reset, fetchAutoCompleteChips]
  );

  const handleKeyPress = useCallback(
    e => {
      const shouldAddChip = e.key === ' ' || e.key === 'Enter';
      const shouldMoveUp = e.keyCode === 38;
      const shouldMoveDown = e.keyCode === 40;

      if (shouldAddChip) {
        const chip = autoCompleteChips[activeItemIndex];
        if (_.isEmpty(chip)) return;
        addChip(chip);
        reset();
        e.preventDefault();
        return;
      }

      if (shouldMoveUp) {
        setActiveItemIndex(prev => Math.max(0, prev - 1));
        e.preventDefault();
        return;
      }

      if (shouldMoveDown) {
        setActiveItemIndex(prev => Math.min(prev + 1, autoCompleteChips.length - 1));
        e.preventDefault();
      }
    },
    [autoCompleteChips, activeItemIndex, addChip, reset]
  );

  const handleAddChip = useCallback(
    chip => {
      addChip(chip);
      reset();
    },
    [addChip, reset]
  );

  useEffect(() => {
    if (isError) setSearchValue('');
  }, [isError]);

  useEffect(() => {
    if (isEmptyAutoComplete) {
      fetchRecommendedChips();
    }
  }, [isEmptyAutoComplete]);

  useEffect(() => {
    setIsActive(!_.isEmpty(chips));
  }, [chips]);

  useEffect(() => {
    typeof props.isActive === 'boolean' && setIsActive(props.isActive);
  }, []);

  SearchBar.handleClickOutside = reset || (() => {});
  return (
    <Box position="relative" h="54px">
      <Box border="solid 2px" borderColor={isError ? 'orange' : 'green'} bg="white" position="absolute" borderRadius="30px" overflow="hidden" px="20px" zIndex="3" w="full">
        <Flex alignItems="center">
          <SearchInput isError={isError} onChange={handleChange} onKeyPress={handleKeyPress} searchValue={searchValue} placeholder={placeholder} />
          {!isActive ? (
            <IconButton icon={<SearchBtn />} isLoading={isSubmitting} color="white" borderRadius="50%" background="lightGray" ml="auto" mr="-10px" onClick={handleSearch} />
          ) : (
            <IconButton icon={<ArrowRightBtn />} isLoading={isSubmitting} color="white" borderRadius="50%" background="green" ml="auto" mr="-10px" onClick={handleSearch} />
          )}
        </Flex>
        {!isEmptyAutoComplete && <AutoComplete searchValue={searchValue} chips={autoCompleteChips} activeItemIndex={activeItemIndex} addChip={handleAddChip} />}
        {isEmptyAutoComplete && <NoResult chips={recommendedChips} searchValue={searchValue} onClickChip={handleAddChip} />}
      </Box>
    </Box>
  );
}

export default onClickOutside(SearchBar, {
  handleClickOutside: () => SearchBar.handleClickOutside
});
