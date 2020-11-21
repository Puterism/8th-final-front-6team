import { Flex, Input } from '@chakra-ui/core';
import React, { useState, useCallback } from 'react';
// import { FiSearch } from 'react-icons/fi';
import theme from '../../themes';

const inputStyle = { boxShadow: '0 0 1.5px 0 #9ad2ff', color: '#2699fb' };

const SearchBar = ({ placeholder, width }) => {
  const [keyword, setKeyword] = useState('');
  // const isActive = keyword.length > 0;

  const handleChange = useCallback((e) => {
    setKeyword(e.target.value);
  }, []);

  return (
    <Flex w={width}>
      <Input
        bg="white"
        onChange={handleChange}
        value={keyword}
        placeholder={placeholder}
        borderColor={theme.colors.green}
        border="solid 2px"
        borderRadius="30px"
        color={theme.colors.mediumGray}
        padding="25px 35px"
        boxShadow={inputStyle.boxShadow}
        fontSize="18px"
        _focus={inputStyle}
        _hover={inputStyle}
        _placeholder={{ color: theme.colors.mediumGray }}
      />
    </Flex>
  );
};

export default SearchBar;
