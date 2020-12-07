import React, { useState } from 'react';
import { Button, Flex, Text, Box } from '@chakra-ui/core';
import { useRecoilState } from 'recoil';
import SearchBar from '../../components/SearchBar';
import Chip from '../../components/Chip';
import TotalBox from '../../components/TotalBox';
import theme from '../../themes';
import DetailModal from '../../components/DetailModal';
import Header from '../../components/Header';
import { ChipsState } from '../../states/atoms';

const list = [
  {
    key: 1,
    name: '양파',
    price: '3,000',
    weight: '100g',
    num: '3개'
  },
  {
    key: 2,
    name: '브로콜리',
    price: '3,000',
    weight: '100g',
    num: '3개'
  },
  {
    key: 3,
    name: '고구마',
    price: '3,000',
    weight: '100g',
    num: '3개'
  },
  {
    key: 4,
    name: '양상추',
    price: '3,000',
    weight: '100g',
    num: '3개'
  },
  {
    key: 5,
    name: '청경채',
    price: '3,000',
    weight: '100g',
    num: '3개'
  },
  {
    key: 6,
    name: '토마토',
    price: '3,000',
    weight: '100g',
    num: '3개'
  },
  {
    key: 7,
    name: '콜리플라워',
    price: '3,000',
    weight: '100g',
    num: '3개'
  },
  {
    key: 8,
    name: '단호박',
    price: '3,000',
    weight: '100g',
    num: '3개'
  },
  {
    key: 9,
    name: '새송이버섯',
    price: '3,000',
    weight: '100g',
    num: '3개'
  }
];

const mallList = [
  {
    key: 1,
    mallName: '이마트',
    totalPrice: '12,500',
    list
  },
  {
    key: 2,
    mallName: '쿠팡',
    totalPrice: '12,500',
    list
  },
  {
    key: 3,
    mallName: '마켓컬리',
    totalPrice: '12,500',
    list
  }
];

const ResultPage = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [selectedMall, setSelectedMall] = useState(mallList[0].mallName);
  const [selectedVegi, setSelectedVegi] = useState(null);
  const [chips, setChips] = useRecoilState(ChipsState);
  const closeModal = () => {
    setSelectedVegi(null);
    setIsModalOpened(false);
  };
  const openModal = name => {
    setSelectedVegi(name);
    setIsModalOpened(true);
  };

  return (
    <Flex flexDir="column">
      <Header />
      <Flex flexDir="column" p="47px 110px">
        <Text fontSize="22px" color="#666666" fontWeight="bold" mb="20px">
          가장 합리적인 조합을 찾았어요!
        </Text>
        <Flex alignItems="center" mr="-110px" mb="50px">
          <Box w="40%">
            <SearchBar placeholder="채소를 추가하여 조합을 다시 검색할 수 있어요." />
          </Box>
          <Flex ml="16px" w="60%" alignItems="center" overflowY="scroll" className="no-scrollbar">
            {chips.map(chip => (
              <Chip key={chip} text={chip} removable />
            ))}
          </Flex>
        </Flex>
        <Flex mt="20" justifyContent="space-between">
          {mallList.map(item => (
            <div style={{ cursor: 'pointer' }} onClick={() => setSelectedMall(item.mallName)}>
              <TotalBox mallName={item.mallName} totalPrice={item.totalPrice} list={item.list} isSelected={selectedMall === item.mallName} selectedVegi={selectedVegi} setSelectedVegi={openModal} />
            </div>
          ))}
        </Flex>
        <Button w="full" bg={theme.colors.green} py="40px" fontSize="28px" fontWeight="bold" borderRadius="48px" color="white" mt="51px">
          이 조합 선택하기
        </Button>
      </Flex>
      {isModalOpened && <DetailModal closeModal={closeModal} name={selectedVegi} />}
    </Flex>
  );
};

export default ResultPage;
