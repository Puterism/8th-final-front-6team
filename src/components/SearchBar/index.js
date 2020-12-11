import { Flex, IconButton, Box } from '@chakra-ui/core';
import React, { useState, useCallback, useEffect, useRef } from 'react';
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
  const inputRef = useRef();
  const placeholder = isError ? '채소 종류를 한 개 이상 입력해 주세요' : props.placeholder;

  const reset = useCallback(() => {
    setIsEmptyAutoComplete(false);
    setAutoCompleteChips([]);
    setSearchValue('');
    if (inputRef.current.value === '') inputRef.current.focus();
  }, []);

  const handleSearch = useCallback(async () => {
    if (!isActive) return setIsError(true);
    props.onSearch && (await props.onSearch());
  }, [isActive, props.onSearch]);

  const handleChange = useCallback(async e => {
    setIsError(false);
    setSearchValue(e.target.value);
    fetchAutoCompleteChips(e.target.value);
  }, []);

  const handleKeyDown = useCallback(
    e => {
      const shouldMoveUp = e.keyCode === 38;
      const shouldMoveDown = e.keyCode === 40;
      if (shouldMoveUp) {
        setActiveItemIndex(prev => Math.max(0, prev - 1));
        return;
      }
      if (shouldMoveDown) {
        setActiveItemIndex(prev => Math.min(prev + 1, autoCompleteChips.length - 1));
      }
    },
    [autoCompleteChips]
  );

  const handleKeyPress = useCallback(
    async e => {
      const shouldSearch = e.key === 'Enter' && e.target.value === '' && !_.isEmpty(chips);
      const shouldAddChip = e.key === ' ' || e.key === 'Enter';

      if (shouldSearch) {
        await handleSearch();
        return;
      }

      if (shouldAddChip) {
        e.preventDefault();
        const chip = autoCompleteChips[activeItemIndex];
        if (_.isEmpty(chip)) return;
        addChip(chip);
        reset();
      }
    },
    [autoCompleteChips, activeItemIndex, addChip, reset, handleSearch, chips]
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
          <SearchInput ref={inputRef} isError={isError} onChange={handleChange} onKeyDown={handleKeyDown} onKeyPress={handleKeyPress} searchValue={searchValue} placeholder={placeholder} />
          {props.hasSearchIcon && !isActive && (
            <IconButton icon={<SearchBtn />} isLoading={isSubmitting} color="white" borderRadius="50%" background="lightGray" ml="auto" mr="-10px" onClick={handleSearch} />
          )}
          {props.hasSearchIcon && isActive && (
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
