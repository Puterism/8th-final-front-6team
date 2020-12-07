import React, { useState, useEffect, useCallback } from 'react';
import { Box, Flex, Stack, Text, Button } from '@chakra-ui/core';
import Layout from '../../components/Layout';
import SelectionItem from '../../components/SelectionItem';
import { currencyFormat } from '../../utils';
import theme from '../../themes';
import onionImageUrl from '../../images/onion.png';
import chestnutImageUrl from '../../images/chestnut.png';
import cabbageImageUrl from '../../images/cabbage.png';
import './SelectionPage.css';

const SelectionPage = () => {
  const [selectionList, setSelectionList] = useState([]);

  // const calculatePricePerGram = useCallback((weight, price, gram) => {
  //   let weightNumber = null;
  //   let unit = null;
  //   const kgPosition = weight.search('kg');
  //   const unitPosition = kgPosition > 0 ? kgPosition : weight.search('g');

  //   if (unitPosition > 0) {
  //     weightNumber = parseInt(weight.slice(0, unitPosition), 0);
  //     unit = weight.slice(unitPosition);
  //   }

  //   if (unit === 'kg') {
  //     weightNumber *= 1000;
  //   }

  //   const calculated = price / (weightNumber / gram);

  //   return calculated.toFixed(0);
  // }, []);

  const toggleSelectionItem = useCallback(
    (id, checked) => {
      console.log('toggleSelectionItem', id, checked);
      setSelectionList(prevState => {
        const nextState = [...prevState];
        const index = nextState.findIndex(item => item.id === id);
        nextState[index].checked = checked;

        return nextState;
      });
    },
    [setSelectionList]
  );

  useEffect(() => {
    setSelectionList([
      {
        id: '1',
        title: '국내산 햇 양파 10kg(특품)',
        description: '속이 알찬 양파',
        amount: '10kg',
        price: 6800,
        image: onionImageUrl,
        checked: true
      },
      {
        id: '2',
        title: '국내산 햇 양파 10kg(특품)',
        description: '속이 알찬 양파속이 알찬 양파속이 알찬 양파속이 알찬 양파속이 알찬 양파속이 알찬 양파속이 알찬 양파속이 알찬 양파',
        amount: '10kg',
        price: 6800,
        image: onionImageUrl,
        checked: true
      },
      {
        id: '3',
        title: '국내산 햇 양파 10kg(특품)',
        description: '속이 알찬 양파',
        amount: '10kg',
        price: 6800,
        image: onionImageUrl,
        checked: true
      },
      {
        id: '4',
        title: '국내산 햇 양파 10kg(특품)',
        description: '속이 알찬 양파',
        amount: '10kg',
        price: 6800,
        image: onionImageUrl,
        checked: true
      },
      {
        id: '5',
        title: '국내산 햇 양파 10kg(특품)',
        description: '속이 알찬 양파',
        amount: '10kg',
        price: 6800,
        image: onionImageUrl,
        checked: true
      },
      {
        id: '6',
        title: '국내산 햇 양파 10kg(특품)',
        description: '속이 알찬 양파',
        amount: '10kg',
        price: 6800,
        image: onionImageUrl,
        checked: true
      }
    ]);
  }, [setSelectionList]);

  // useEffect(() => {
  //   document.body.style.overflow = 'hidden';
  // })

  return (
    <Layout>
      <Flex flexDirection="column" width="full" height="calc(100% - 144px)" maxHeight="full" marginY="37px" paddingX="110px" color="black" position="absolute" overflow="hidden">
        <Flex width="full" justifyContent="space-between" alignItems="baseline" marginBottom="45px">
          <Box>
            <Text as="h3" fontSize="40px" fontWeight="bold" color="green" letterSpacing="normal">
              선택한 조합으로 구매해보세요
            </Text>
            <Text fontSize="18px" letterSpacing="normal">
              2020년 10월 30일 오후 3시 15분에 검색한 조합
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
            <Text fontWeight="bold" marginRight="34px">
              이마트
            </Text>
            <Text color="mediumGray" marginRight="14px">
              배송료 2,500원
            </Text>
            <Text color="mediumGray">30,000원 이상 무료배송</Text>
          </Flex>
          <Flex alignItems="baseline">
            <Text fontSize={32} marginRight="5px" fontWeight="bold">
              {currencyFormat(25800)}
            </Text>
            <Text fontSize={17} fontWeight="bold">
              원
            </Text>
          </Flex>
        </Flex>
        <Box flex="1" flexDirection="column" width="full" overflow="auto" marginBottom="18px" paddingTop="2px" paddingRight="18px">
          {selectionList.map(item => {
            const { id, image, title, description, amount, price, checked } = item;

            return <SelectionItem key={id} id={id} image={image} title={title} description={description} amount={amount} price={price} checked={checked && 'checked'} onToggle={toggleSelectionItem} />;
          })}
          {/* <SelectionItem
            image={onionImageUrl}
            title="국내산 햇 양파 10kg(특품)"
            description="속이 알찬 양파"
            weight="10kg"
            // pricePerGram={`100g당 ${currencyFormat(calculatePricePerGram('10kg', 6800, 100))}`}
            price={6800}
            checked
          />
          <SelectionItem
            image={chestnutImageUrl}
            title="국내산 참송이 버섯 150g"
            description="상세 설명을 마구마구 입력해서 마구마구 길이를 늘여서 엄청엄청 길게 써진다면 어떻게 보일지 테스트를 해본다면?"
            weight="150g"
            // pricePerGram={`100g당 ${currencyFormat(calculatePricePerGram('150g', 14000, 100))}`}
            price={14000}
          />
          <SelectionItem
            image={cabbageImageUrl}
            title="친환경 인증 국내산 양배추 1kg"
            description="인생에 목숨을 커다란 더운지라 피고 못할 전인 싹이 것은 사막이다. 미묘한 없으면, 인간의 있을 행복스럽고 하여도 오아이스도 것이다. 위하여서 그와 인생의 피가 우는 내려온 가슴이 있을 생명을 철환하였는가? 속에 산야에 인생의 군영과 무엇이 영원히 힘있다. 할지라도 청춘이 주며, 보이는 없는 주는 품으며, 아름답고 이것이다. 가치를 가는 그러므로 칼이다. 품으며, 얼음과 천지는 피어나기 피가 유소년에게서 것이다. 생생하며, 피가 가는 것이다. 이상 시들어 구하지 실로 청춘이 칼이다. 어디 거선의 천지는 찾아 것은 있는가? 따뜻한 낙원을 천하를 착목한는 있으랴?"
            weight="1kg"
            // pricePerGram={`100g당 ${currencyFormat(calculatePricePerGram('1kg', 8600, 100))}`}
            price={8600}
            checked
          /> */}
        </Box>
        <Button width="full" paddingY="28px" color="white" backgroundColor="green" fontWeight="bold" fontSize={28} marginBottom="48px">
          바로 구매하기
        </Button>
      </Flex>
    </Layout>
  );
};

export default SelectionPage;
