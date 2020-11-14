import { Flex, Input, IconButton, Box, Text, Icon, VStack, HStack, Button } from '@chakra-ui/core';
import React, { useState, useCallback } from 'react';
import { FiSearch } from 'react-icons/fi';
import onClickOutside from 'react-onclickoutside';
import axios from 'axios';
import _ from 'lodash';

const BoxStyle = { boxShadow: '0 0 0 1.5px #9ad2ff', color: '#2699fb' };

// const cancelToken = axios.CancelToken;
// const source =

function SearchBar() {
  const [keyword, setKeyword] = useState('');
  const [isNoSearch, setIsNoSearch] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentChip, setCurrentChip] = useState(false);
  const [keywords, setKeywords] = useState([]);
  const isActive = keyword.length > 0;

  const getChips = useCallback(_.debounce((searchValue) => {
    axios.get(`https://vegetable.tk/api/v1/chips/${searchValue}`).then((result) => {
      setKeywords(result.data.chips.map((chip) => chip.keyword));
    });
  }, 100), []);

  const handleChange = useCallback((e) => {
    setKeyword(e.target.value);
    getChips(e.target.value);
  }, []);

  // const handleKeyPress = useCallback(_.debounce(async (e) => {
  //   const shouldSubmit = e.key === ' ' || e.key === 'Enter';
  //   if (shouldSubmit) {
  //     setIsSubmitting(true);
  //   }
  // }, 500), []);

  // const openBox = useCallback(() => {
  //   setIsNoSearch(true);
  // }, []);
  const handleClickOutside = useCallback(() => {
    setIsNoSearch(false);
  }, []);

  SearchBar.handleClickOutside = handleClickOutside;

  return (
    <Flex w="full">
      <Box w="full" position="relative" borderColor="main" boxShadow={BoxStyle.boxShadow} _focus={BoxStyle} _hover={BoxStyle} borderRadius="md">
        <Input onChange={handleChange} value={keyword} placeholder="구입할 채소를 검색해주세요. 최저가 조합의 커머스를 알려드릴게요. ex) 양파 + 감자" color="main" border="none" boxShadow="none" fontSize="sm" _focus={{ border: 'none' }} _placeholder={{ color: '#2699fb' }} />
        {!isNoSearch && (
          <Flex direction="column">
            {keywords.map((keyword, index) => (
              <Flex align="center" w="full" px="4" py="2" color="main">
                <Icon as={FiSearch} w={3} h={3} mr="2" />
                <Text key={index} align="left" fontSize="sm">{keyword}</Text>
              </Flex>
            ))}
          </Flex>
        )}
        {isNoSearch && (
          <VStack w="full">
            <HStack w="full" spacing="2" color="main" background="bg" px="4" py="2">
              <Icon as={FiSearch} w={4} h={4} />
              <Text fontSize="sm">
                <Text as="span" fontWeight="bold">맥북</Text>
                에 대한 검색결과가 없습니다.
              </Text>
            </HStack>
            <VStack spacing="2" w="full" p="4">
              <Flex w="full" align="center">
                <Text color="main" fontSize="xs">지금 가장 인기있는 채소를 검색해보세요</Text>
                <Text color="gray" fontSize="7px" ml="2">10월 30일 기준 인기검색어</Text>
              </Flex>
              <HStack spacing="2" w="full">
                <Button color="sub" fontSize="xs" _focus={{ background: 'none' }} borderWidth="3px" bg="bg" borderColor="sub" width="56px" height="34px">고구마</Button>
              </HStack>
            </VStack>
          </VStack>
        )}
      </Box>
      <IconButton icon={<FiSearch color="white" />} isLoading={isSubmitting} color="white" background="main" ml="11px" disabled={!isActive} />
    </Flex>
  );
}

const clickOutsideConfig = {
  handleClickOutside: () => SearchBar.handleClickOutside,
};

export default onClickOutside(SearchBar, clickOutsideConfig);
