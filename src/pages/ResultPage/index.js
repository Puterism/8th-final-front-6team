import React, { useEffect, useState, useCallback } from 'react';
import { Button, Flex, Text, Box } from '@chakra-ui/core';
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

const ResultPage = ({ history }) => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [selectedMall, setSelectedMall] = useState(null);
  const [selectedVegi, setSelectedVegi] = useState(null);
  const [changedItem, setChangedItem] = useState(null);
  const [chips, setChips] = useRecoilState(ChipsState);
  const [markets, setMarkets] = useState(null);
  const { removeChip } = useChips();

  const closeModal = () => {
    setSelectedVegi(null);
    setIsModalOpened(false);
  };

  const openModal = item => {
    window.scroll(0, 0);

    setSelectedVegi(item);
    setChangedItem(item);
    setIsModalOpened(true);
  };

  const fetchMarkets = useCallback(async chips => {
    if (isEmpty(chips)) return;
    const chipIds = chips.map(chip => chip.id).join(',');
    const { data } = await Axios.get(`https://vegetable.tk/api/v1/markets/result`, {
      params: { chipIds }
    });
    setMarkets(data.markets);
    setSelectedMall(data.markets[0]);
  }, []);

  const handleSearch = useCallback(async () => {
    await fetchMarkets(chips);
  }, [chips]);

  useEffect(() => {
    fetchMarkets(chips);
  }, []);

  const changeItem = item => {
    setChangedItem(item);
    for (let i = 0; i < markets.length; i += 1) {
      if (item.marketId === markets[i].id) {
        for (let j = 0; j < markets[i].chips.length; j += 1) {
          if (item.chipId === markets[i].chips[j].id) {
            markets[i].chips[j].product = item;
          }
        }
      }
    }
  };

  return (
    <Flex flexDir="column">
      <Header />
      <Flex flexDir="column" p="47px 110px">
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
        <Flex mt="60px" justifyContent="space-between">
          {markets &&
            selectedMall &&
            markets.map(item => {
              return (
                <div key={item.id} style={{ cursor: 'pointer' }} onClick={() => setSelectedMall(item)}>
                  <TotalBox mallName={item.name} totalPrice={item.totalPrice} list={item.chips} isSelected={selectedMall.id === item.id} selectedVegi={selectedVegi} setSelectedVegi={openModal} />
                </div>
              );
            })}
        </Flex>
        <Link
          to={{
            pathname: '/selection',
            state: {
              selectedMarket: selectedMall
            }
          }}
        >
          <Button w="full" bg={theme.colors.green} py="40px" fontSize="28px" fontWeight="bold" borderRadius="48px" color="white" mt="51px">
            이 조합 선택하기
          </Button>
        </Link>
      </Flex>
      {isModalOpened && <DetailModal closeModal={closeModal} selectedVegi={selectedVegi} marketId={selectedMall.id} changeItem={changeItem} changedItem={changedItem} />}
    </Flex>
  );
};

export default ResultPage;
