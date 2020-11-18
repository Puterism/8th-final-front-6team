import { Flex, Input, IconButton } from '@chakra-ui/core';
import React, { useState, useCallback } from 'react';
import { FiSearch } from 'react-icons/fi';

const inputStyle = { boxShadow: '0 0 1.5px 0 #9ad2ff', color: '#2699fb' };

const SearchBar = () => {
  const [keyword, setKeyword] = useState('');
  const isActive = keyword.length > 0;

  const handleChange = useCallback((e) => {
    setKeyword(e.target.value);
  }, []);

  return (
    <Flex w="full">
      <Input bg="white" onChange={handleChange} value={keyword} placeholder="구입할 채소를 검색해주세요. 최저가 조합의 커머스를 알려드릴게요. ex) 양파 + 감자" borderColor="sub" color="main" boxShadow={inputStyle.boxShadow} fontSize="15px" _focus={inputStyle} _hover={inputStyle} _placeholder={{ color: '#2699fb' }} />
      <IconButton icon={<FiSearch color="white" />} background="main" ml="11px" disabled={!isActive} />
    </Flex>
  );
};

export default SearchBar;
