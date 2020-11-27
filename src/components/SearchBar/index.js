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

function SearchBar({ placeholder }) {
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
    <Box position="relative">
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
          <SearchInput onChange={handleChange} onKeyPress={handleKeyPress} searchValue={searchValue} placeholder={placeholder} />
          {searchValue === '' && <IconButton
            icon={<SearchBtn />}
            isLoading={isSubmitting}
            color="white"
            borderRadius="50%"
            background={theme.colors.lightGray}
            ml="auto"
            mr="-10px"
            disabled={!isActive}
          />}
        </Flex>
        {!isNoSearch && <AutoComplete keywords={keywords} activeItemIndex={activeItemIndex} addChip={addChip} />}
        {isNoSearch && <NoResult searchValue={searchValue} />}
      </Box>
      {/* 이건 메인페이지로 옮겨주세요 결과페이지의 검색창에서는 없는 부분입니다 */}
      {/* {!_.isEmpty(chips) && (
        <HStack spacing="2" w="full">
          {chips.map(chip => (
            <Chip key={chip} text={chip} onClick={handleRemoveChip} removable />
          ))}
        </HStack>
      )} */}
    </Box>
  );
}

export default onClickOutside(SearchBar, {
  handleClickOutside: () => SearchBar.handleClickOutside
});
