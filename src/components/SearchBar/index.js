import { Flex, Input, IconButton, Box, Text, Icon, VStack, HStack, Button, Tag, TagLabel } from '@chakra-ui/core';
import { CloseIcon } from '@chakra-ui/icons';
import React, { useState, useCallback } from 'react';
import { FiSearch } from 'react-icons/fi';
import onClickOutside from 'react-onclickoutside';
import axios from 'axios';
import _ from 'lodash';
import dayjs from 'dayjs';

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

  const fetchChips = useCallback(_.debounce((searchValue) => {
    if (!searchValue) { setKeywords([]); return; }
    axios.get(`https://vegetable.tk/api/v1/chips/${searchValue}`).then((result) => {
      const { chips } = result.data;
      if (_.isEmpty(chips)) {
        setIsNoSearch(true);
      } else {
        setIsNoSearch(false);
        setKeywords(result.data.chips.map((chip) => chip.keyword));
      }
    });
  }, 200), []);

  const addChip = useCallback((searchText) => {
    setChips((prev) => _.uniq(prev.concat(searchText)));
    reset();
  }, [reset]);

  const handleRemoveChip = useCallback((chip) => {
    setChips(_.remove(chips, (c) => c !== chip));
  }, [chips]);

  const handleChange = useCallback((e) => {
    const input = e.target.value;
    if (_.isEmpty(input)) { reset(); }

    setSearchValue(input);
    fetchChips(input);
  }, [reset, fetchChips]);

  const handleKeyPress = useCallback((e) => {
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
      setActiveItemIndex((prev) => (Math.max(0, prev - 1)));
      e.preventDefault();
      return;
    }

    if (shouldMoveDown) {
      setActiveItemIndex((prev) => (Math.min(prev + 1, keywords.length - 1)));
      e.preventDefault();
    }
  }, [keywords, activeItemIndex, addChip]);

  SearchBar.handleClickOutside = reset;

  return (
    <>
      <VStack w="full" spacing="4">
        <Flex w="full">
          <Box w="full" position="relative" borderColor="main.500" boxShadow={InputStyle.boxShadow} _focus={InputStyle} _hover={InputStyle} borderRadius="md" overflow="hidden">
            <Input onChange={handleChange} onKeyDown={handleKeyPress} value={searchValue} placeholder="구입할 채소를 검색해주세요. 최저가 조합의 커머스를 알려드릴게요. ex) 양파 + 감자" color="main.500" border="none" boxShadow="none" fontSize="sm" _focus={{ border: 'none' }} _placeholder={{ color: '#2699fb' }} />
            {!isNoSearch && (
            <Flex direction="column">
              {keywords.map((keyword, index) => (
                <Flex align="center" w="full" px="4" py="2" color="main.500" key={index} onClick={() => addChip(keyword)} background={activeItemIndex === index ? 'main.10' : null}>
                  <Icon as={FiSearch} w={3} h={3} mr="2" />
                  <Text key={index} align="left" fontSize="sm">{keyword}</Text>
                </Flex>
              ))}
            </Flex>
            )}
            {isNoSearch && (
            <VStack w="full">
              <HStack w="full" spacing="2" color="main.500" background="bg" px="4" py="2">
                <Icon as={FiSearch} w={4} h={4} />
                <Text fontSize="sm">
                  <Text as="span" fontWeight="bold">{searchValue}</Text>
                  에 대한 검색결과가 없습니다.
                </Text>
              </HStack>
              <VStack spacing="2" w="full" p="4">
                <Flex w="full" align="center">
                  <Text color="main.500" fontSize="xs">지금 가장 인기있는 채소를 검색해보세요</Text>
                  <Text color="gray" fontSize="7px" ml="2">
                    {dayjs().format('MM월 DD일')}
                    {' '}
                    기준 인기검색어
                  </Text>
                </Flex>
                <HStack spacing="2" w="full">
                  <Button color="sub" fontSize="xs" _focus={{ background: 'none' }} borderWidth="3px" bg="bg" borderColor="sub" width="56px" height="34px">고구마</Button>
                </HStack>
              </VStack>
            </VStack>
            )}

          </Box>
          <IconButton icon={<FiSearch color="white" />} isLoading={isSubmitting} color="white" background="main.500" ml="11px" disabled={!isActive} />
        </Flex>
        {!_.isEmpty(chips) && (
        <HStack spacing="2" w="full">
          {chips.map((chip) => (
            <Tag
              size="sm"
              key={chip}
              borderRadius="4px"
              variant="solid"
              bg="bg"
              border="3px solid"
              borderColor="boxBorder"
              color="main.500"
              px="2"
              py="1"
              spacing="0"
            >
              <TagLabel>{chip}</TagLabel>
              <Icon
                as={CloseIcon}
                width="8px"
                height="8px"
                cursor="pointer"
                ml="2"
                onClick={() => handleRemoveChip(chip)}
              />
            </Tag>
          ))}
        </HStack>
        )}
      </VStack>
      {/* <Flex w={width}>
        <Input
          bg="white"
          onChange={handleChange}
          value={keyword}
          placeholder={placeholder}
          borderColor={theme.colors.green}
          border="solid 2px"
          borderRadius="30px"
          color={theme.colors.mediumGray}
          p="25px 35px"
          boxShadow={inputStyle.boxShadow}
          fontSize="18px"
          _focus={inputStyle}
          _hover={inputStyle}
          _placeholder={{ color: theme.colors.mediumGray }}
        />
      </Flex> */}
    </>
  );
}

export default onClickOutside(SearchBar, {
  handleClickOutside: () => SearchBar.handleClickOutside,
});
