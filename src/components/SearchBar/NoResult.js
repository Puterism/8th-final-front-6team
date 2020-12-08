import React from 'react';
import { VStack, Icon, Text, Flex, Box } from '@chakra-ui/core';
import { SearchIcon } from '../../assets';
import Chip from '../Chip';

const NoResult = ({ searchValue, chips, onClickChip }) => {
  return (
    <VStack w="full" mt="10px">
      <Flex borderRadius="9px" mx="20px" w="full" bg="lightGreen" alignItems="center" px="16px" py="2">
        <Icon as={SearchIcon} color="gray" />
        <Text ml="6px" color="green" fontSize="18px">
          <Text as="span" fontWeight="bold">
            {`'${searchValue}'`}
          </Text>
          에 대한 검색결과가 없습니다
        </Text>
      </Flex>
      <Box w="full" px="16px" py="16.5px">
        <Flex w="full" align="center">
          <Text color="darkGray" fontSize="18px" fontWeight="bold">
            지금 가장 인기있는 채소 검색어
          </Text>
        </Flex>
        <Flex w="full" mt="13px" flexWrap="wrap">
          {chips.map((chip, index) => {
            return <Chip key={chip.id} text={chip.keyword} onClick={() => onClickChip(chip.keyword)} />;
          })}
        </Flex>
      </Box>
    </VStack>
  );
};
export default NoResult;
