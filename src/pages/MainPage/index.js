import { Flex, Img, Heading, HStack } from '@chakra-ui/core';
import React, { useCallback } from 'react';
import _ from 'lodash';
import { useHistory } from 'react-router-dom';
import Lottie from 'react-lottie';
import SearchBar from '../../components/SearchBar';
import Layout from '../../components/Layout';
import Chip from '../../components/Chip';
import useChips from '../../hooks/useChips';
import HomeIllustURL from '../../images/home_illust.png';
import animationData from '../../assets/avocado.json';

const MainPage = () => {
  const { removeChip, chips } = useChips();
  const history = useHistory();

  const onSearch = useCallback(() => {
    history.push('/result');
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <Layout>
      <Flex flexDir="column" mt="100px" w="full" alignItems="center">
        <Lottie options={defaultOptions} height="260px" width="860px" />
        <Flex flexDirection="column" mt="58px" w="1050px" mx="auto">
          <SearchBar onSearch={onSearch} placeholder="구입할 채소를 검색해주세요. 최저가 조합의 커머스를 알려드릴게요. ex) 양파 + 감자" />
          {!_.isEmpty(chips) && (
            <HStack spacing="2" w="full" mt="4">
              {chips.map(chip => (
                <Chip key={chip.id} chip={chip} onClickDelete={removeChip} removable />
              ))}
            </HStack>
          )}
        </Flex>
      </Flex>
    </Layout>
  );
};

export default MainPage;
