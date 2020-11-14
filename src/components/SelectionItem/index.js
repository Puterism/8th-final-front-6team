import React from 'react';
import {
  Box, Flex, Stack, Text, Button, ControlBox, VisuallyHidden, Image,
  NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper,
} from '@chakra-ui/core';
import { ChevronUpIcon, ChevronDownIcon, CheckIcon } from '@chakra-ui/icons';
import { currencyFormat } from '../../utils';

const SelectionItem = (props) => {
  const {
    image, title, description, weight, pricePerGram, price,
  } = props;

  return (
    <Flex
      width="full"
      minHeight="211px"
      border="solid 2px"
      borderColor="boxBorder"
      borderRadius="10px"
      backgroundColor="bg"
      paddingY="9"
      paddingLeft="9"
      paddingRight="11"
    >
      <Box as="label" height="47px">
        <VisuallyHidden as="input" type="checkbox" defaultChecked />
        <ControlBox
          borderWidth="3px"
          borderColor="checkboxBorder"
          width="47px"
          height="47px"
          rounded="4px"
          _checked={{ color: 'main.500', borderColor: 'checkboxBorder' }}
          cursor="pointer"
        >
          <Text as="span" fontWeight="bold" fontSize="24">
            <CheckIcon />
          </Text>
        </ControlBox>
      </Box>
      <Image src={image} alt={title} width="142px" height="142px" marginLeft="8" />
      <Stack direction="column" marginLeft="4" spacing={5}>
        <Text fontSize={24} fontWeight="bold" lineHeight="1.21">
          { title }
        </Text>
        <Text maxWidth="508px" fontSize={18} fontWeight="normal" lineHeight="1.33">
          { description }
        </Text>
      </Stack>
      <Stack direction="column" spacing={2} textAlign="right" flex="1">
        <Box>
          <Text as="span" fontSize={24} fontWeight="800" marginRight="2">
            { weight }
          </Text>
          <Text as="span" fontSize={16} fontWeight="500">
            (
            { pricePerGram }
            )
          </Text>
        </Box>
        <Flex justifyContent="flex-end" alignItems="flex-end">
          <NumberInput defaultValue={1} min={1} height="33px" borderColor="boxBorder">
            <NumberInputField width="80px" height="33px" borderRadius="25px" border="solid 2px" fontSize={14} />
            <NumberInputStepper right={1}>
              <NumberIncrementStepper
                height="50%"
                border="none"
              >
                <ChevronUpIcon w={4} h={4} color="main.500" />
              </NumberIncrementStepper>
              <NumberDecrementStepper
                height="50%"
                border="none"
              >
                <ChevronDownIcon w={4} h={4} color="main.500" />
              </NumberDecrementStepper>
            </NumberInputStepper>
          </NumberInput>
          <Text as="span" fontSize={40} fontWeight="900" lineHeight="1" marginLeft="6">
            { currencyFormat(price) }
          </Text>
        </Flex>
        <Box>
          <Button colorScheme="main.500" variant="outline" marginTop="3" borderWidth={2}>
            구매하기
          </Button>
        </Box>
      </Stack>
    </Flex>
  );
};

SelectionItem.defaultProps = {
  image: null,
  title: '',
  description: '',
  weight: '0g',
  pricePerGram: '100g당 0원',
  price: 0,
};

export default SelectionItem;
