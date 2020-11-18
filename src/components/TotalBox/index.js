import { Flex, Box, Avatar, Text, Button } from '@chakra-ui/core';
import React from 'react';

const SelectedList = () => <Box />;

const DeliveryCost = ({ deliveryCost }) => (
  <Box padding="8px 12px" borderRadius="25px" bg="#edf7ff" border="solid 1px #bce0fd" fontSize="11px">
    배송료
    {' '}
    {deliveryCost}
    원
  </Box>
);

export default ({
  mallName, totalPrice, list, isSelected,
}) => (
  <Flex marginRight="34px" flexDirection="column" width="full">
    <Box border={isSelected && 'solid 3px #2699fb'} cursor="pointer" maxWidth="384px" height="475.2px" bg="#f7fbff" color="#2699fb" display="flex" flexDirection="column" alignItems="center" borderRadius="8px" boxShadow="0 3px 8px 0 rgba(68, 67, 77, 0.29)">
      {isSelected && <Text textAlign="center" position="absolute" marginTop="-43px" fontSize="20px" fontWeight="bold" color="#2699fb">가장 합리적인 조합을 찾았어요!</Text>}
      <Avatar
        size="xl"
        marginTop="6"
        background="white"
        border="solid 1px #2699fb"
      />
      <Text fontSize="16px">{mallName}</Text>
      <Text marginTop="3" fontSize="45px">
        {totalPrice}
        <span style={{ fontSize: '17px', marginLeft: '5px' }}>원</span>
      </Text>
      <Text marginTop="1" fontSize="11px">
        10월 24일, 오후 3:45 기준
      </Text>
      <Flex marginTop="3" alignItems="center">
        <DeliveryCost deliveryCost={2500} />
        <Text marginLeft="2" fontSize="12px">3만원 이상 무료배송</Text>
      </Flex>
      <SelectedList />
      {/* {list.map((item) => (
        <SelectedList
          name={item.name}
          price={item.price}
          weight={item.weight}
          num={item.num}
        />
      ))} */}
    </Box>
    <Button color="white" background={isSelected ? '#2699fb' : '#b2dcff'} maxWidth="384px" height="61px" marginTop="4" fontSize="20px">이 조합으로 선택</Button>
  </Flex>
);
