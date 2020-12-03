import { Flex, Img, Heading, Box, HStack } from '@chakra-ui/core';
import React, { useCallback, useState, useEffect } from 'react';
import _ from 'lodash';
import axios from 'axios';
import SearchBar from '../../components/SearchBar';
import Layout from '../../components/Layout';
import Chip from '../../components/Chip';

const MainPage = () => {
  const [chips, setChips] = useState([]);
  const [noResultChips, setNoResultChips] = useState([]);
  const [keywords, setKeywords] = useState([]);
  const [isNoSearch, setIsNoSearch] = useState(false);
  const isActive = !_.isEmpty(chips);
  const placeholder = '구입할 채소를 검색해주세요. 최저가 조합의 커머스를 알려드릴게요. ex) 양파 + 감자';

  const fetchChips = useCallback(
    _.debounce(searchValue => {
      if (!searchValue) {
        setKeywords([]);
        return;
      }
      axios.get(`https://vegetable.tk/api/v1/chips/${searchValue}`).then(result => {
        const { chips } = result.data;
        if (_.isEmpty(chips)) {
          setIsNoSearch(true);
        } else {
          setIsNoSearch(false);
          setKeywords(result.data.chips.map(chip => chip.keyword));
        }
      });
    }, 200),
    []
  );

  const reset = useCallback(() => {
    setIsNoSearch(false);
    setKeywords([]);
  }, []);

  const addChip = useCallback(
    searchText => {
      setChips(prev => _.uniq(prev.concat(searchText)));
      reset();
    },
    [reset]
  );

  const handleRemoveChip = useCallback(
    chip => {
      setChips(_.remove(chips, c => c !== chip));
    },
    [chips]
  );

  useEffect(() => {
    if (isNoSearch) {
      axios.get(`https://vegetable.tk/api/v1/chips`).then(result => {
        const { chips } = result.data;
        setNoResultChips(result.data.chips.map(chip => chip.keyword));
      });
    }
  }, [isNoSearch]);

  return (
    <Layout>
      <Flex flexDir="column" mt="100px" w="full" alignItems="center">
        <Img src="/images/main.png" w="450px" h="220px" mx="auto" />
        <Heading color="darkGray" fontSize="40px" mt="2">
          for a smarter veggie lifestyle
        </Heading>
        <Flex flexDirection="column" mt="58px" w="full" px="12rem">
          <SearchBar
            placeholder={placeholder}
            fetchChips={fetchChips}
            reset={reset}
            addChip={addChip}
            handleRemoveChip={handleRemoveChip}
            keywords={keywords}
            setKeywords={setKeywords}
            setIsNoSearch={setIsNoSearch}
            isNoSearch={isNoSearch}
            isActive={isActive}
            chips={noResultChips}
          />
          {!_.isEmpty(chips) && (
            <HStack spacing="2" w="full" mt="4">
              {chips.map(chip => (
                <Chip key={chip} text={chip} onClick={handleRemoveChip} removable />
              ))}
            </HStack>
          )}
        </Flex>
      </Flex>
    </Layout>
  );
};

export default MainPage;
