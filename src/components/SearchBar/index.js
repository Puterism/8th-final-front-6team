import { Flex, IconButton, Box } from '@chakra-ui/core';
import React, { useState, useCallback } from 'react';
import onClickOutside from 'react-onclickoutside';
import axios from 'axios';
import _ from 'lodash';
import NoResult from './NoResult';
import AutoComplete from './AutoComplete';
import SearchInput from './SearchInput';
import theme from '../../themes';
import { SearchBtn } from '../../assets';

function SearchBar({
  placeholder,
  keywords,
  reset,
  setKeywords,
  setIsNoSearch,
  isNoSearch,
  fetchChips,
  addChip,
  isActive,
  chips
}) {
  const [searchValue, setSearchValue] = useState('');
  const [isSubmitting] = useState(false);
  const [activeItemIndex, setActiveItemIndex] = useState(0);

  const handleChange = useCallback(
    e => {
      const input = e.target.value;
      if (_.isEmpty(input)) {
        reset();
      }

      setSearchValue(input);
      fetchChips(input);
    },
    [reset, fetchChips]
  );

  const handleKeyPress = useCallback(
    e => {
      const shouldAddChip = e.key === ' ' || e.key === 'Enter';
      const shouldMoveUp = e.keyCode === 38;
      const shouldMoveDown = e.keyCode === 40;

      if (shouldAddChip) {
        const chip = keywords[activeItemIndex];
        if (_.isEmpty(chip)) return;
        addChip(chip);
        setSearchValue('');
        e.preventDefault();
        return;
      }

      if (shouldMoveUp) {
        setActiveItemIndex(prev => Math.max(0, prev - 1));
        e.preventDefault();
        return;
      }

      if (shouldMoveDown) {
        setActiveItemIndex(prev => Math.min(prev + 1, keywords.length - 1));
        e.preventDefault();
      }
    },
    [keywords, activeItemIndex, addChip]
  );

  SearchBar.handleClickOutside = reset;

  return (
    <Box position="relative" h="54px">
      <Box
        border="solid 2px"
        borderColor={theme.colors.green}
        bg="white"
        position="absolute"
        borderRadius="30px"
        overflow="hidden"
        px="20px"
        zIndex="3"
        w="full"
      >
        <Flex alignItems="center">
          <SearchInput
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            searchValue={searchValue}
            placeholder={placeholder}
          />
          {searchValue === '' && (
            <IconButton
              icon={<SearchBtn />}
              isLoading={isSubmitting}
              color="white"
              borderRadius="50%"
              background={theme.colors.lightGray}
              ml="auto"
              mr="-10px"
              disabled={!isActive}
            />
          )}
        </Flex>
        {!isNoSearch && (
          <AutoComplete
            searchValue={searchValue}
            keywords={keywords}
            activeItemIndex={activeItemIndex}
            addChip={addChip}
          />
        )}
        {isNoSearch && <NoResult chips={chips} searchValue={searchValue} />}
      </Box>
    </Box>
  );
}

export default onClickOutside(SearchBar, {
  handleClickOutside: () => SearchBar.handleClickOutside
});
