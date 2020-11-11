import { Box } from '@chakra-ui/core';
import React from 'react';
import styled from 'styled-components'
import Layout from '../../components/Layout';
import SearchBar from '../../components/SearchBar';
import Tag from '../../components/Tag';
import TotalBox from '../../components/TotalBox';

const ResultPage = () => (
    <Layout>
        <Box mt="-90px" w="105%">
            <SearchBar />
            <TagBox><Tag text={'고구마'} /><Tag text={'감자'} /><Tag text={'양파'} /></TagBox>
            <div style={{ flexDirection: 'row', display: 'flex', marginTop: '78px' }}>
                <TotalBox mallName={'이마트'} totalPrice={'12,500'} list={['ㅁ', 'ㄴ', 'ㅇ']} />
                <TotalBox mallName={'쿠팡'} totalPrice={'13,200'} list={'asdf'} />
                <TotalBox mallName={'마켓컬리'} totalPrice={'15,700'} list={'asdf'} />
            </div>
        </Box>
    </Layout>
);

const TagBox = styled.div`
    margin-top: 17px;
    display: flex;
    flex-direction: row;
`;

export default ResultPage;
