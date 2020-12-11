import React, { useEffect, useState, useCallback } from 'react';
import { Button, Flex, Text, Box, HStack } from '@chakra-ui/core';
import { useRecoilState } from 'recoil';
import Axios from 'axios';
import { isEmpty } from 'lodash';
import { Link } from 'react-router-dom';
import SearchBar from '../../components/SearchBar';
import Chip from '../../components/Chip';
import theme from '../../themes';
import DetailModal from '../../components/DetailModal';
import Header from '../../components/Header';
import { ChipsState } from '../../states/atoms';
import useChips from '../../hooks/useChips';
import TotalBox from '../../components/TotalBox';
import './ResultPage.css';

const ResultPage = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [selectedMall, setSelectedMall] = useState(null);
  const [selectedVegi, setSelectedVegi] = useState(null);
  const [changedItem, setChangedItem] = useState(null);
  const [chips] = useRecoilState(ChipsState);
  const [markets, setMarkets] = useState(null);
  const { removeChip } = useChips();

  const closeModal = () => {
    setSelectedVegi(null);
    setIsModalOpened(false);
  };

  const openModal = item => {
    window.scroll(0, 0);

    setSelectedVegi(item);
    setChangedItem(item.product);
    setIsModalOpened(true);
  };

  const fetchMarkets = useCallback(async chips => {
    if (isEmpty(chips)) return;
    const chipIds = chips.map(chip => chip.id).join(',');
    const { data } = await Axios.get(`https://vegetable.tk/api/v1/markets/result`, {
      params: { chipIds }
    });
    for (let i = 0; i < data.markets.length; i += 1) {
      data.markets[i].chips.forEach(item => {
        item.product.num = 1;
      });
    }
    setMarkets(data.markets);
    setSelectedMall(data.markets[0]);
  }, []);

  const handleSearch = useCallback(async () => {
    await fetchMarkets(chips);
  }, [chips]);

  useEffect(() => {
    fetchMarkets(chips);
  }, []);

  const changeItem = (item, num) => {
    for (let i = 0; i < markets.length; i += 1) {
      if (item.marketId === markets[i].id) {
        for (let j = 0; j < markets[i].chips.length; j += 1) {
          if (item.chipId === markets[i].chips[j].id) {
            markets[i].chips[j].product = item;
            markets[i].totalPrice = 0;
            if (num) {
              markets[i].chips[j].product.num += num;
            }
            markets[i].chips.forEach(chip => {
              markets[i].totalPrice += chip.product.num * chip.product.price;
            });

            setChangedItem(markets[i].chips[j].product);
          }
        }
      }
    }
  };

  return (
    <Flex overflow="scroll" flexDir="column" height="100vh" w="full" maxW="1210px" mx="auto">
      <Header px="0" />
      <Flex flexDir="column" height="100%" py="12">
        <div>
          <Text fontSize="22px" color="#666666" fontWeight="bold" mb="20px">
            가장 합리적인 조합을 찾았어요!
          </Text>
          <Flex alignItems="center" mr="-110px">
            <Box w="40%">
              <SearchBar placeholder="채소를 추가하여 조합을 다시 검색할 수 있어요." isActive={false} onSearch={handleSearch} />
            </Box>
            <Flex ml="16px" w="60%" alignItems="center" overflowY="scroll" className="no-scrollbar">
              {chips.map(chip => (
                <Chip key={chip.id} chip={chip} onClickDelete={removeChip} removable />
              ))}
            </Flex>
          </Flex>
        </div>
        <HStack spacing="8" w="full" pt="67px" pb="79px">
          {markets &&
            selectedMall &&
            markets.map(item => {
              return (
                <div key={item.id} style={{ cursor: 'pointer' }} onClick={() => setSelectedMall(item)}>
                  <TotalBox market={item} isSelected={selectedMall.id === item.id} selectedVegi={selectedVegi} setSelectedVegi={openModal} />
                </div>
              );
            })}
        </HStack>
        <Link
          to={{
            pathname: '/selection',
            state: {
              selectedMarket: selectedMall
            }
          }}
        >
          <Button w="full" bg={theme.colors.green} py="40px" fontSize="28px" fontWeight="bold" borderRadius="48px" color="white">
            이 조합 선택하기
          </Button>
        </Link>
      </Flex>
      {isModalOpened && <DetailModal closeModal={closeModal} selectedVegi={selectedVegi} marketId={selectedMall.id} changeItem={changeItem} changedItem={changedItem} />}
    </Flex>
  );
};

export default ResultPage;
