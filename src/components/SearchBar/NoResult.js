import React from 'react';
import { VStack, HStack, Icon, Text, Flex, Box } from '@chakra-ui/core';
import { SearchIcon } from '../../assets'
import Chip from '../Chip';
import theme from '../../themes';

const NoResult = ({ searchValue }) => (
  <VStack w="full" mt="10px">
    <Flex borderRadius="9px" mx="20px" w="full" bg={theme.colors.lightGreen} alignItems="center" px="16px" py="2">
      <Icon as={SearchIcon} />
      <Text ml="6px" color={theme.colors.green} fontSize="18px">
        <Text as="span" fontWeight="bold">
          '{searchValue}'
        </Text>
        에 대한 검색결과가 없습니다
      </Text>
    </Flex>
    <Box w="full" px="16px" py="16.5px">
      <Flex w="full" align="center">
        <Text color={theme.colors.darkGray} fontSize="18px">
          지금 가장 인기있는 채소 검색어
        </Text>
      </Flex>
      <HStack spacing="0.5" w="full" mt="13px">
        <Chip text="고구마" />
        <Chip text="브로콜리" />
      </HStack>
    </Box>
  </VStack>
);

export default NoResult;
