import React from 'react';
import { Flex, Icon, Text } from '@chakra-ui/core';
import { FiSearch } from 'react-icons/fi';

const AutoComplete = ({ keywords, activeItemIndex, addChip }) => {
  const abc = '';

  return (
    <Flex direction="column">
      {keywords.map((keyword, index) => (
        <Flex
          align="center"
          w="full"
          px="4"
          py="2"
          color="main.500"
          key={index}
          onClick={() => addChip(keyword)}
          background={activeItemIndex === index ? 'main.10' : null}
        >
          <Icon as={FiSearch} w={3} h={3} mr="2" />
          <Text key={index} align="left" fontSize="sm">
            {keyword}
          </Text>
        </Flex>
      ))}
    </Flex>
  );
};

export default AutoComplete;
