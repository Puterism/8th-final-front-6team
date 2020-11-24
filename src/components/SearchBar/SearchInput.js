import React from 'react';
import { Input } from '@chakra-ui/core';

const SearchInput = ({ onChange, onKeyPress, searchValue }) => (
  <Input
    onChange={onChange}
    onKeyDown={onKeyPress}
    value={searchValue}
    placeholder="구입할 채소를 검색해주세요. 최저가 조합의 커머스를 알려드릴게요. ex) 양파 + 감자"
    color="main.500"
    border="none"
    boxShadow="none"
    fontSize="sm"
    _focus={{ border: 'none' }}
    _placeholder={{ color: '#2699fb' }}
  />
);

export default SearchInput;
