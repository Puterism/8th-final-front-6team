import React from 'react';
import { VStack, HStack, Icon, Text, Flex, Button } from '@chakra-ui/core';
import { FiSearch } from 'react-icons/fi';
import dayjs from 'dayjs';

const NoResult = ({ searchValue }) => (
  <VStack w="full">
    <HStack w="full" spacing="2" color="main.500" background="bg" px="4" py="2">
      <Icon as={FiSearch} w={4} h={4} />
      <Text fontSize="sm">
        <Text as="span" fontWeight="bold">
          {searchValue}
        </Text>
        에 대한 검색결과가 없습니다.
      </Text>
    </HStack>
    <VStack spacing="2" w="full" p="4">
      <Flex w="full" align="center">
        <Text color="main.500" fontSize="xs">
          지금 가장 인기있는 채소를 검색해보세요
        </Text>
        <Text color="gray" fontSize="7px" ml="2">
          {dayjs().format('MM월 DD일')} 기준 인기검색어
        </Text>
      </Flex>
      <HStack spacing="2" w="full">
        <Button
          color="sub"
          fontSize="xs"
          _focus={{ background: 'none' }}
          borderWidth="3px"
          bg="bg"
          borderColor="sub"
          width="56px"
          height="34px"
        >
          고구마
        </Button>
      </HStack>
    </VStack>
  </VStack>
);

export default NoResult;
