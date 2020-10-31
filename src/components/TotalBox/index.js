import React from 'react';
import styled from 'styled-components';
import { Image } from '@chakra-ui/core';

const SelectedList = ({
  name, price, weight, num,
}) => (
  <ListBox>
    {name}
    {price}
    {weight}
    {num}
  </ListBox>
);

export default ({ mallName, totalPrice, list }) => (
  <Container>
    <Box>
      <Image
        rounded="full"
        size="150px"
        src="https://bit.ly/sage-adebayo"
        alt="Segun Adebayo"
      />
      <Name>{mallName}</Name>
      <Price>
        {totalPrice}
        <span>원</span>
      </Price>
      <Delivery>
        배송료 2500원
      </Delivery>
      {list.map((item) => (
        <SelectedList
          name={item.name}
          price={item.price}
          weight={item.weight}
          num={item.num}
        />
      ))}
    </Box>
  </Container>
);

const Container = styled.div``;
const Box = styled.div``;
const Name = styled.div``;
const Price = styled.div``;
const Delivery = styled.div``;
const ListBox = styled.div``;
