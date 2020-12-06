import React from 'react';
import { Input, Icon } from '@chakra-ui/core';
import theme from '../../themes';
import { Caution } from '../../assets/index';

const SearchInput = ({ isError, onChange, onKeyPress, searchValue, placeholder }) => {
  return (
    <>
      {isError && <Icon as={Caution} w="6" h="6" mr="-12px" />}
      <Input
        onChange={onChange}
        onKeyDown={onKeyPress}
        value={searchValue}
        placeholder={placeholder}
        color="mediumGray"
        border="none"
        boxShadow="none"
        fontSize="18px"
        _focus={{ border: 'none' }}
        _placeholder={{ color: isError ? 'orange' : 'mediumGray', fontWeight: isError ? 'bold' : 'normal' }}
        my="5px"
      />
    </>
  );
};

export default SearchInput;
