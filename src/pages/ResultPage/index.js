import React, { useState } from 'react';
import {
  Box,
  Button,
  Flex, Text,
} from '@chakra-ui/core';
import SearchBar from '../../components/SearchBar';
import Chip from '../../components/Chip';
import TotalBox from '../../components/TotalBox';
import theme from '../../themes';
import DetailModal from '../../components/DetailModal';

const list = [
  {
    key: 1, name: '양파', price: '3,000', weight: '100g', num: '3개',
  },
  {
    key: 2, name: '브로콜리', price: '3,000', weight: '100g', num: '3개',
  },
  {
    key: 3, name: '고구마', price: '3,000', weight: '100g', num: '3개',
  },
  {
    key: 4, name: '양상추', price: '3,000', weight: '100g', num: '3개',
  },
  {
    key: 5, name: '청경채', price: '3,000', weight: '100g', num: '3개',
  },
  {
    key: 6, name: '토마토', price: '3,000', weight: '100g', num: '3개',
  },
];

const mallList = [
  {
    key: 1, mallName: '이마트', totalPrice: '12,500', list,
  },
  {
    key: 2, mallName: '쿠팡', totalPrice: '12,500', list,
  },
  {
    key: 3, mallName: '마켓컬리', totalPrice: '12,500', list,
  },
];

const ResultPage = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [selectedMall, setSelectedMall] = useState(mallList[0].mallName);
  const closeModal = () => setIsModalOpened(false);
  const openModal = () => setIsModalOpened(true);

  return (
    <Flex flexDir="column">
      <Flex flexDir="column" p="64px 110px">
        <Text fontSize="22px" color="#666666" fontWeight="bold" mb="20px">가장 합리적인 조합을 찾았어요!</Text>
        <Flex alignItems="center">
          <div style={{ width: '40%' }}>
            <SearchBar placeholder="채소를 추가하여 조합을 다시 검색할 수 있어요." />
          </div>
          <Flex ml="16px">
            {list.map((item) => <Chip text={item.name} removeable />)}
          </Flex>
        </Flex>
        <Flex mt="20" justifyContent="space-between">
          {mallList.map((item) => (
            <div style={{ cursor: 'pointer' }} onClick={() => setSelectedMall(item.mallName)}>
              <TotalBox
                openModal={openModal}
                mallName={item.mallName}
                totalPrice={item.totalPrice}
                list={item.list}
                isSelected={selectedMall === item.mallName}
              />
            </div>
          ))}
        </Flex>
        <Button
          w="full"
          bg={theme.colors.green}
          py="35px"
          fontSize="28px"
          fontWeight="bold"
          borderRadius="48px"
          color="white"
          mt="51px"
        >
          이 조합 선택하기
        </Button>
      </Flex>
      {isModalOpened && <DetailModal closeModal={closeModal} openModal={openModal} />}
    </Flex>
  );
};

export default ResultPage;
