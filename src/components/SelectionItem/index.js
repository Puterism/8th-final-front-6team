import React from 'react';
import { Box, Flex, Stack, Text, Button, ControlBox, VisuallyHidden, Image } from '@chakra-ui/core';
import { currencyFormat } from '../../utils';
import theme from '../../themes';
import { CheckSmallIcon } from '../../assets';

const SelectionItem = props => {
  const { id, image, title, description, amount, num, price, marketLink, checked, onToggle } = props;

  const handleChange = e => {
    onToggle(id, e.target.checked);
  };

  return (
    <Flex width="full" minHeight="152px" alignItems="center" marginBottom="45px">
      <Box as="label" height="47px" marginRight="5">
        <VisuallyHidden as="input" type="checkbox" checked={checked} onChange={handleChange} />
        <ControlBox
          borderWidth="3px"
          borderColor="#ededed"
          width="38px"
          height="38px"
          rounded="19px"
          _checked={{ color: theme.colors.white, backgroundColor: theme.colors.green, borderColor: theme.colors.green }}
          cursor="pointer"
        >
          <Text as="span" fontWeight="bold" fontSize={30}>
            <CheckSmallIcon />
          </Text>
        </ControlBox>
      </Box>
      <Flex width="full" padding="22px" border="solid 2px" borderColor={checked ? theme.colors.green : '#ededed'} borderRadius="10px">
        <Image src={image} alt={title} width="95px" height="95px" borderRadius="8px" margin="6px" marginRight="33px" />
        <Stack direction="column" spacing={0}>
          <Text fontSize={25} fontWeight="bold" marginBottom="1">
            {title}
          </Text>
          <Text fontSize={20} fontWeight="normal" color="#aaaaaa" marginBottom="2">
            {description}
          </Text>
          <Text color={theme.colors.green} fontSize="20px">
            <Text as="span">{currencyFormat(price)}원</Text>
            <Text as="span" opacity="0.2" marginX="2">
              |
            </Text>
            <Text as="span">{amount}</Text>
          </Text>
        </Stack>
        <Stack direction="column" spacing={0} textAlign="right" flex="1">
          {/* <Box>
          <Text as="span" fontSize={24} fontWeight="800" marginRight="2">
            { weight }
          </Text>
          <Text as="span" fontSize={16} fontWeight="500">
            (
            { pricePerGram }
            )
          </Text>
        </Box> */}
          <Flex justifyContent="flex-end" alignItems="flex-end" marginBottom="15px">
            {/* <NumberInput defaultValue={1} min={1} height="33px" borderColor="boxBorder">
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
          </NumberInput> */}
            <Flex alignItems="baseline">
              <Text fontSize={32} marginRight="5px" fontWeight="bold">
                {currencyFormat(price * num)}
              </Text>
              <Text fontSize={17} fontWeight="bold">
                원
              </Text>
            </Flex>
          </Flex>
          <Flex justifyContent="flex-end" alignItems="center" whiteSpace="nowrap">
            <Text as="span" fontSize="22px" color={theme.colors.mediumGray} marginRight="19px">
              {num}개 선택
            </Text>
            <Button
              as="a"
              href={marketLink}
              target="_blank"
              borderColor={theme.colors.green}
              color={theme.colors.green}
              variant="outline"
              height="auto"
              fontSize="22px"
              borderWidth={2}
              borderRadius="23px"
              textAlign="center"
              paddingX="28px"
              paddingY="7px"
            >
              구매하기
            </Button>
          </Flex>
        </Stack>
      </Flex>
    </Flex>
  );
};

SelectionItem.defaultProps = {
  id: '',
  image: null,
  title: '',
  description: '',
  amount: '0g',
  price: 0,
  onToggle: () => {}
};

export default SelectionItem;
