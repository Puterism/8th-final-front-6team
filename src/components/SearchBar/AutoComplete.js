import React from 'react';
import { Flex, Icon, Text, Box } from '@chakra-ui/core';
import { FiSearch } from 'react-icons/fi';

const AutoComplete = ({ searchValue, keywords, activeItemIndex, addChip }) => {
  keywords = keywords.map(keyword => {
    return keyword.replace(searchValue, `<span style="color: #36c66f; font-weight: bold">${searchValue}</span>`);
  });

  return (
    <Flex direction="column">
      {keywords.map((keyword, index) => (
        <Flex
          align="center"
          w="full"
          px="4"
          py="2"
          key={index}
          onClick={() => addChip(keyword)}
          background={activeItemIndex === index ? 'main.40' : null}
          h="52px"
          borderRadius="9px"
          justify="space-between"
        >
          <Flex align="center">
            <Icon as={FiSearch} w={3} h={3} mr="2" />
            <Text fontSize="lg" key={index} align="left" dangerouslySetInnerHTML={{ __html: keyword }} />
          </Flex>
          {activeItemIndex === index && (
            <Text fontWeight="normal" color="green">
              Space 또는 Enter로 선택
            </Text>
          )}
        </Flex>
      ))}
    </Flex>
  );
};

export default AutoComplete;
