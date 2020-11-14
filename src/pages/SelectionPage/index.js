import React, { useCallback } from 'react';
import {
  Box, Flex, Stack, Text, Button,
} from '@chakra-ui/core';
import { CheckIcon } from '@chakra-ui/icons';
import Layout from '../../components/Layout';
import SelectionItem from '../../components/SelectionItem';
import { currencyFormat } from '../../utils';
import onionImageUrl from '../../images/onion.png';
import chestnutImageUrl from '../../images/chestnut.png';
import cabbageImageUrl from '../../images/cabbage.png';

const SelectionPage = () => {
  const calculatePricePerGram = useCallback((weight, price, gram) => {
    let weightNumber = null;
    let unit = null;
    const kgPosition = weight.search('kg');
    const unitPosition = kgPosition > 0 ? kgPosition : weight.search('g');

    if (unitPosition > 0) {
      weightNumber = parseInt(weight.slice(0, unitPosition), 0);
      unit = weight.slice(unitPosition);
    }

    if (unit === 'kg') {
      weightNumber *= 1000;
    }

    const calculated = price / (weightNumber / gram);

    return calculated.toFixed(0);
  }, []);

  return (
    <Layout>
      <Box width="full" minHeight="full" color="main.500" marginY="32">
        <Flex width="full" justifyContent="space-between" alignItems="baseline">
          <Box>
            <Text
              as="h3"
              fontSize="45px"
              fontWeight="800"
              lineHeight="1.22"
              marginBottom="1px"
              letterSpacing="normal"
            >
              선택한 조합으로 구매해보세요
            </Text>
            <Text
              fontSize="md"
              lineHeight="1.5"
              letterSpacing="normal"
            >
              2020년 10월 30일 오후 3시 15분에 검색한 조합
            </Text>
          </Box>
          <Button
            width="237px"
            height="61px"
            colorScheme="main"
            fontSize={22}
            fontWeight="bold"
            leftIcon={<CheckIcon />}
          >
            모두 구매하기
          </Button>
        </Flex>
        <Stack direction="column" spacing={8} width="full" marginTop="18">
          <SelectionItem
            image={onionImageUrl}
            title="국내산 햇 양파 10kg(특품)"
            description="구하기 끓는 때에, 청춘을 황금시대의 밝은 우리 되려니와, 수 위하여서. 위하여, 자신과 착목한는 그들의 투명하되 얼마나 심장은 것이다."
            weight="10kg"
            pricePerGram={`100g당 ${currencyFormat(calculatePricePerGram('10kg', 6800, 100))}`}
            price={6800}
          />
          <SelectionItem
            image={chestnutImageUrl}
            title="국내산 참송이 버섯 150g"
            description="상세 설명을 마구마구 입력해서 마구마구 길이를 늘여서 엄청엄청 길게 써진다면 어떻게 보일지 테스트를 해본다면?"
            weight="150g"
            pricePerGram={`100g당 ${currencyFormat(calculatePricePerGram('150g', 14000, 100))}`}
            price={14000}
          />
          <SelectionItem
            image={cabbageImageUrl}
            title="친환경 인증 국내산 양배추 1kg"
            description="인생에 목숨을 커다란 더운지라 피고 못할 전인 싹이 것은 사막이다. 미묘한 없으면, 인간의 있을 행복스럽고 하여도 오아이스도 것이다. 위하여서 그와 인생의 피가 우는 내려온 가슴이 있을 생명을 철환하였는가? 속에 산야에 인생의 군영과 무엇이 영원히 힘있다. 할지라도 청춘이 주며, 보이는 없는 주는 품으며, 아름답고 이것이다. 가치를 가는 그러므로 칼이다. 품으며, 얼음과 천지는 피어나기 피가 유소년에게서 것이다. 생생하며, 피가 가는 것이다. 이상 시들어 구하지 실로 청춘이 칼이다. 어디 거선의 천지는 찾아 것은 있는가? 따뜻한 낙원을 천하를 착목한는 있으랴?"
            weight="1kg"
            pricePerGram={`100g당 ${currencyFormat(calculatePricePerGram('1kg', 8600, 100))}`}
            price={8600}
          />
        </Stack>

      </Box>
      <Box position="fixed" width="full" bottom="0" height="133.8px" backgroundImage="linear-gradient(to bottom, rgba(241, 249, 255, 0), #f1f9ff 59%)" />
    </Layout>
  );
};

export default SelectionPage;
