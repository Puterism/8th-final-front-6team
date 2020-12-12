import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Flex, Text, Button, ControlBox, VisuallyHidden } from '@chakra-ui/core';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import Layout from '../../components/Layout';
import SelectionItem from '../../components/SelectionItem';
import { Coupang, Emart, Kurly, CheckSmallIcon } from '../../assets';
import { currencyFormat } from '../../utils';
import './SelectionPage.css';

const SelectionPage = () => {
  const [selectedMarket, setSelectedMarket] = useState({});
  const [selectionList, setSelectionList] = useState([]);
  const listContainerRef = useRef();
  const { state } = useLocation();

  const isSelectedAll = useMemo(() => {
    return !selectionList.some(item => !item.checked);
  }, [selectionList]);

  const isNotSelectedAll = useMemo(() => {
    return !selectionList.some(item => item.checked);
  }, [selectionList]);

  const handleChangeCheckAll = () => {
    setSelectionList(prevState => {
      const nextState = [...prevState];
      nextState.forEach(item => {
        item.checked = !isSelectedAll;
      });

      return nextState;
    });
  };

  const handleClickBuyAll = useCallback(() => {
    selectionList.forEach((item) => {
      if (item.checked) {
        // TODO: Not Working Properly
        window.open(item.marketLink, item.id);
      }
    })
  }, [selectionList]);

  const toggleSelectionItem = useCallback(
    (id, checked) => {
      setSelectionList(prevState => {
        const nextState = [...prevState];
        const index = nextState.findIndex(item => item.id === id);
        nextState[index].checked = checked;

        return nextState;
      });
      // NEED IMPROVE
      listContainerRef.current.scrollTo(0, 0);
    },
    [setSelectionList]
  );

  useEffect(() => {
    if (state.selectedMarket && state.selectedMarket.chips.length > 0) {
      setSelectedMarket(state.selectedMarket);
      setSelectionList(() => {
        const nextState = [];
        state.selectedMarket.chips.forEach(chip => {
          const { product } = chip;
          const newProduct = {...product, checked: true};
          nextState.push(newProduct);
        });
        return nextState;
      });
    }
  }, [setSelectedMarket, setSelectionList, state.selectedMarket]);

  return (
    <Layout>
      <Flex flexDirection="column" width="full" height="calc(100% - 144px)" maxHeight="full" marginY="37px" paddingX="110px" color="black" position="absolute" overflow="hidden" ref={listContainerRef}>
        <Flex width="full" justifyContent="space-between" alignItems="baseline" marginBottom="45px">
          <Box>
            <Text as="h3" fontSize={27} fontWeight="bold" color="green" letterSpacing="normal" marginBottom="5px">
              선택한 조합으로 구매해보세요
            </Text>
            <Text fontSize={18} letterSpacing="normal">
              {dayjs().locale('ko').format('YYYY년 MM월 DD일 A hh시 MM분')}에 검색한 조합
            </Text>
          </Box>
        </Flex>
        <Flex
          width="full"
          direction="row"
          paddingY="17px"
          paddingLeft="21px"
          paddingRight="40px"
          marginBottom="28px"
          backgroundColor="subGray"
          borderRadius="19px"
          justifyContent="space-between"
          alignItems="center"
        >
          <Flex fontSize="18px">
            <Box marginRight="8px">
              {selectedMarket.name === '이마트' && <Emart />}
              {selectedMarket.name === '쿠팡' && <Coupang />}
              {selectedMarket.name === '마켓컬리' && <Kurly />}
            </Box>
            <Text fontWeight="bold" marginRight="34px">
              {selectedMarket.name}
            </Text>
            <Text color="mediumGray" marginRight="14px">
              배송료 {currencyFormat(selectedMarket.deliveryFee)}원
            </Text>
            <Text color="mediumGray">{currencyFormat(selectedMarket.freeDeliveryPrice)}원 이상 무료배송</Text>
          </Flex>
          <Flex alignItems="baseline">
            <Text fontSize={32} marginRight="5px" fontWeight="bold">
              {currencyFormat(selectedMarket.totalPrice)}
            </Text>
            <Text fontSize={17} fontWeight="bold">
              원
            </Text>
          </Flex>
        </Flex>
        <Box flex="1" flexDirection="column" width="full" overflow="auto" marginBottom="18px" paddingTop="2px" paddingRight="18px">
          <Box as="label" height="47px" marginRight="5" marginBottom="5" display="inline-block" cursor="pointer" fontSize={18} color="black">
            <VisuallyHidden as="input" type="checkbox" checked={isSelectedAll} onChange={handleChangeCheckAll} />
            <ControlBox
              verticalAlign="middle"
              borderWidth="3px"
              borderColor="#ededed"
              width="38px"
              height="38px"
              rounded="19px"
              marginRight="18px"
              _checked={{ color: "white", backgroundColor: "green", borderColor: "green" }}
              cursor="pointer"
            >
              <Text as="span" fontWeight="bold" fontSize={30}>
                <CheckSmallIcon />
              </Text>
            </ControlBox>
            모든 상품 선택하기
          </Box>
          {selectionList.map(item => {
            const { id, imageUrl, name, amount, num, price, checked, marketLink } = item;

            return (
              <SelectionItem
                key={id}
                id={id}
                image={imageUrl}
                title={name}
                description={name}
                amount={amount}
                num={num}
                price={price}
                marketLink={marketLink}
                checked={checked && 'checked'}
                onToggle={toggleSelectionItem}
              />
            );
          })}
        </Box>
        <Button
          width="full"
          paddingY="40px"
          color="white"
          backgroundColor="green"
          borderRadius="48px"
          fontWeight="bold"
          fontSize={28}
          marginBottom="48px"
          disabled={isNotSelectedAll}
          _disabled={{
            backgroundColor: "#dbdbdb",
            color: "white",
            cursor: "default",
          }}
          onClick={handleClickBuyAll}
        >
          바로 구매하기
        </Button>
      </Flex>
    </Layout>
  );
};

export default SelectionPage;
