import { Flex, Input, IconButton, Box, VStack, HStack } from '@chakra-ui/core';
import React, { useState, useCallback } from 'react';
import { FiSearch } from 'react-icons/fi';
import onClickOutside from 'react-onclickoutside';
import axios from 'axios';
import _ from 'lodash';
import NoResult from './NoResult';
import AutoComplete from './AutoComplete';
import Chip from '../Chip/index';
import SearchInput from './SearchInput';

const InputStyle = { boxShadow: '0 0 0 1.5px #9ad2ff', color: '#2699fb' };

function SearchBar() {
  const [searchValue, setSearchValue] = useState('');
  const [isNoSearch, setIsNoSearch] = useState(false);
  const [isSubmitting] = useState(false);
  const [chips, setChips] = useState([]);
  const [keywords, setKeywords] = useState([]);
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const isActive = !_.isEmpty(chips);

  const reset = useCallback(() => {
    setIsNoSearch(false);
    setSearchValue('');
    setKeywords([]);
  }, []);

  const fetchChips = useCallback(
    _.debounce(searchValue => {
      if (!searchValue) {
        setKeywords([]);
        return;
      }
      axios.get(`https://vegetable.tk/api/v1/chips/${searchValue}`).then(result => {
        const { chips } = result.data;
        if (_.isEmpty(chips)) {
          setIsNoSearch(true);
        } else {
          setIsNoSearch(false);
          setKeywords(result.data.chips.map(chip => chip.keyword));
        }
      });
    }, 200),
    []
  );

  const addChip = useCallback(
    searchText => {
      setChips(prev => _.uniq(prev.concat(searchText)));
      reset();
    },
    [reset]
  );

  const handleRemoveChip = useCallback(
    chip => {
      setChips(_.remove(chips, c => c !== chip));
    },
    [chips]
  );

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
    <>
      <VStack w="full" spacing="4">
        <Flex w="full">
          <Box
            w="full"
            position="relative"
            borderColor="main.500"
            boxShadow={InputStyle.boxShadow}
            _focus={InputStyle}
            _hover={InputStyle}
            borderRadius="md"
            overflow="hidden"
          >
            <SearchInput onChange={handleChange} onKeyPress={handleKeyPress} searchValue={searchValue} />
            {!isNoSearch && <AutoComplete keywords={keywords} activeItemIndex={activeItemIndex} addChip={addChip} />}
            {isNoSearch && <NoResult searchValue={searchValue} />}
          </Box>
          <IconButton
            icon={<FiSearch color="white" />}
            isLoading={isSubmitting}
            color="white"
            background="main.500"
            ml="11px"
            disabled={!isActive}
          />
        </Flex>
        {!_.isEmpty(chips) && (
          <HStack spacing="2" w="full">
            {chips.map(chip => (
              <Chip key={chip} text={chip} onClick={handleRemoveChip} removable />
            ))}
          </HStack>
        )}
      </VStack>
    </>
  );
}

export default onClickOutside(SearchBar, {
  handleClickOutside: () => SearchBar.handleClickOutside
});
