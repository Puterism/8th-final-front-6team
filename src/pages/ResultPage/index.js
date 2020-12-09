import React, { useEffect, useState } from 'react';
import { Button, Flex, Text, Box } from '@chakra-ui/core';
import { useRecoilState } from 'recoil';
import Axios from 'axios';
import SearchBar from '../../components/SearchBar';
import Chip from '../../components/Chip';
import theme from '../../themes';
import DetailModal from '../../components/DetailModal';
import Header from '../../components/Header';
import { ChipsState } from '../../states/atoms';
import useChips from '../../hooks/useChips';
import TotalBox from '../../components/TotalBox';

const ResultPage = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [selectedMall, setSelectedMall] = useState(null);
  const [selectedVegi, setSelectedVegi] = useState(null);
  const [chips, setChips] = useRecoilState(ChipsState);
  const [markets, setMarkets] = useState(null);

  const { removeChip } = useChips();

  const closeModal = () => {
    setSelectedVegi(null);
    setIsModalOpened(false);
  };
  const openModal = id => {
    setSelectedVegi(id);
    setIsModalOpened(true);
  };
  const chipIds = [];
  chips.map(item => chipIds.push(item.id));

  const fetchMarkets = async () => {
    if (chipIds.length > 0) {
      const { data } = await Axios.get(`https://vegetable.tk/api/v1/markets/result`, {
        params: {
          chipIds: chipIds.reduce((f, s) => `${f},${s}`)
        }
      });
      console.log(data);
      // setMarkets(data.markets);
      // setSelectedMall(data.markets[0].marketId);
    }
  };

  // useEffect(() => {
  fetchMarkets();
  // }, [markets, selectedMall]);

  return (
    <Flex flexDir="column">
      <Header />
      <Flex flexDir="column" p="47px 110px">
        <Text fontSize="22px" color="#666666" fontWeight="bold" mb="20px">
          가장 합리적인 조합을 찾았어요!
        </Text>
        <Flex alignItems="center" mr="-110px">
          <Box w="40%">
            <SearchBar placeholder="채소를 추가하여 조합을 다시 검색할 수 있어요." isActive={false} />
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
              console.log(item);
              return (
                <div style={{ cursor: 'pointer' }} onClick={() => setSelectedMall(item.marketId)}>
                  <TotalBox mallName={item.name} totalPrice={item.totalPrice} list={item.chips} isSelected={selectedMall === item.marketId} selectedVegi={selectedVegi} setSelectedVegi={openModal} />
                </div>
              );
            })}
        </Flex>
        <Button w="full" bg={theme.colors.green} py="40px" fontSize="28px" fontWeight="bold" borderRadius="48px" color="white" mt="51px">
          이 조합 선택하기
        </Button>
      </Flex>
      {isModalOpened && <DetailModal closeModal={closeModal} name={selectedVegi} marketId={selectedMall} chipId={selectedVegi} />}
    </Flex>
  );
};

export default ResultPage;
