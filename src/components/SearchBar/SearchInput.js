import React from 'react';
import { Input } from '@chakra-ui/core';
import theme from '../../themes';

const SearchInput = ({ onChange, onKeyPress, searchValue, placeholder }) => (
  <Input
    onChange={onChange}
    onKeyDown={onKeyPress}
    value={searchValue}
    placeholder={placeholder}
    color={theme.colors.mediumGray}
    border="none"
    boxShadow="none"
    fontSize="18px"
    _focus={{ border: 'none' }}
    _placeholder={{ color: theme.colors.mediumGray }}
    my="5px"
  />
);

export default SearchInput;
