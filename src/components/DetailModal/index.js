import React, { useCallback, useEffect, useState } from 'react';
import { Flex, Text, Box } from '@chakra-ui/core';
import Axios from 'axios';
import ImageBox from '../ImageBox';
import theme from '../../themes';
import { CloseBtn } from '../../assets';

export default ({ closeModal, selectedVegi, marketId }) => {
  const [list, setList] = useState(null);
  const { id } = selectedVegi;

  const fetchList = useCallback(async () => {
    const { data } = await Axios.get(`https://vegetable.tk/api/v1/products`, {
      params: {
        marketId,
        chipId: id
      }
    });
    data && console.log(data.chips);
    setList(data.chips.slice(0, 5));
  }, []);

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <Flex w="full" h="full" bgColor="rgba(32, 32, 32, 0.3)" alignItems="flex-end" position="absolute" zIndex="3">
      <Box pl="70px" b="0" w="full" position="absolute" zIndex="3" h="418px">
        <Flex alignItems="center" mt="41px">
          <Text fontSize="24px" color={theme.colors.black}>
            {selectedVegi.keyword}
          </Text>
          <Text ml="15px" fontSize="18px" color="#aaaaaa">
            세부 상품을 선택하고 수량 변경이 가능해요
          </Text>
          <CloseBtn onClick={() => closeModal()} style={{ marginLeft: 'auto', marginRight: '69px', cursor: 'pointer' }} />
        </Flex>
        <Flex mt="36px">
          <ImageBox isSelected name={selectedVegi.product.name.slice(0, 10)} price={selectedVegi.product.price} weight={selectedVegi.product.amount} src={selectedVegi.product.imageUrl} />
          <Flex overflowX="scroll" w="full" ml="100px" pr="30px" className="no-scrollbar">
            {list && list.map(item => <ImageBox key={item.id} name={item.name.slice(0, 15)} price={item.price} weight={item.amount} src={item.imageUrl} />)}
          </Flex>
        </Flex>
      </Box>
      <Box borderTopRadius="30px" position="absolute" zIndex="2" bg="white" b="0" w="full" h="418px" boxShadow="0 -8px 40px 0 rgba(0, 0, 0, 0.25)" />
    </Flex>
  );
};
