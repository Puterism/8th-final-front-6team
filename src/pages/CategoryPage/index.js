/* *** HARD CODED SOURCE FILE *** */
import React from 'react';
import { Box, Grid } from '@chakra-ui/core';
import Layout from '../../components/Layout';
import Card from '../../components/Card';

import {
  categoryImage1, categoryImage2, categoryImage3, categoryImage4, categoryImage5, 
  categoryImage6, categoryImage61, categoryImage62, categoryImage63,
  categoryImage7, categoryImage71, categoryImage72, categoryImage73, categoryImage74,
  categoryImage8, categoryImage9, categoryImage10,
} from './images';


const CategoryPage = () => (
  <Box>
    <Layout>
      <Grid
        templateColumns="repeat(6, 1fr)"
        gap="25px"
        width="100%"
        marginTop="62px"
        marginBottom="25px"
        px="110px"
      >
        <Card
          big
          gridColumn="1 / 7"
          title="오늘의 샐러드"
          description={'유독 샐러드가 끌리는 날이 있죠.\n집에 있는 채소에 새로운 것 몇개만 더하면 멋진 샐러드가 된다는 사실, 알고 계시나요?\navocado에서 가장 많이 검색되는 채소 조합으로 오늘은 샐러드 식사 어떠세요?'}
          image={categoryImage1}
          bookmarksCount="1K"
          likesCount="2K"
        />
        <Card
          gridColumn="1 / 3"
          title="아보카도가 처음인가요?"
          description={'이젠 여러 마켓을 돌아다니며 채소를 검색하지마세요.\n아보카도와 함께라면 당신의 베지 라이프는 더욱 스마트해집니다!'}
          image={categoryImage2}
        />
        <Card
          gridColumn="3 / 5"
          title="드레싱만 바꿨을 뿐인데"
          description={'집에 있는 채소에 새로운 재료를 살짝 더해보세요.\n멋진 샐러드가 된다는 사실, 알고 계시나요?'}
          image={categoryImage3}
        />
        <Card
          gridColumn="5 / 7"
          title="특별한 날엔, 특별한 샐러드를"
          description={'어디에든 고기가 빠지면 섭섭하죠. 샐러드에도 무겁지 않게\n고기로 포인트를 주는 법, 여기에서 만나볼까요?'}
          image={categoryImage4}
        />
      </Grid>
      <Grid
        templateColumns="repeat(6, 1fr)"
        gap="25px"
        width="100%"
        marginY="25px"
        px="110px"
      >
        <Card
          medium
          gridColumn="1 / 4"
          title="추운 겨울엔 따듯한 베지 푸드"
          description={'가벼운 냄비를 꺼내 집에서 잠자는 채소를 듬뿍 넣고 끓여보세요.\n생각도 못했던 풍미가 가득한 새로운 요리가 탄생합니다.'}
          image={categoryImage5}
          bookmarksCount="0.6K"
          likesCount="1K"
        />
        <Card
          medium
          gridColumn="1 / 4"
          title="말랑말랑 색다른 식감으로 즐기는 고구마!"
          description={'호빵도, 붕어빵도 좋지만 겨울에는 역시 고구마 아니겠어요?\n매일 쪄먹었던 고구마, 이번엔 간편하게 말랭이로 만들어 즐겨보세요.'}
          image={categoryImage6}
          bookmarksCount="1K"
          likesCount="2K"
          merchandiseList={[
            {
              title: '햇밤고구마 | 1.5kg',
              store: '쿠팡',
              price: '7,590원',
              image: categoryImage61
            },
            {
              title: '호박고구마 | 1kg',
              store: '이마트',
              price: '6,270원',
              image: categoryImage62
            },
            {
              title: '꿀 고구마(특) | 2kg',
              store: '마켓컬리',
              price: '13,900원',
              image: categoryImage63
            }
          ]}
        />
        <Card
          large
          gridRow="1 / 3"
          gridColumn="4 / 7"
          title="책에서 찾아보는 채소 레시피,"
          subtitle="Salad For me: 나의 샐러드"
          description={'어떤 조합을 검색할지 망설였다면 오늘은 책을 따라가보는 것은 어떨까요?\n나의 샐러드 책 속에 숨어있는 만능 재료들을 소개합니다. 바로 여러분의 조합에 담아보세요!'}
          image={categoryImage7}
          bookmarksCount="1K"
          likesCount="2K"
          merchandiseList={[
            {
              title: '방울토마토 | 300g',
              description: '생으로 먹어도, 익혀 먹어도 좋아요\n당도 높은 만능 재료 방울 토마토',
              price: '3,000원',
              image: categoryImage71
            },
            {
              title: '파프리카 | 150g',
              description: '어떤 색을 골라도 그날 요리의 주인공\n고운 파프리카로 샐러드를 꾸며봐요',
              price: '2,700원',
              image: categoryImage72
            },
            {
              title: '바질 | 100g',
              description: '낯설어도 한번 도전해보세요\n그 순간 요리가 훨씬 싱긋해져요',
              price: '5,900원',
              image: categoryImage73
            },
            {
              title: '양상추 | 250g',
              description: '씹는 순간 아삭! 다시 먹어도 아삭!\n가볍고 어느 곳에 잘 녹아드는 재료',
              price: '1,670원',
              image: categoryImage74
            }
          ]}
        />
      </Grid>
      <Grid
        templateColumns="repeat(6, 1fr)"
        gap="25px"
        width="100%"
        marginY="25px"
        px="110px"
      >
        <Card
          gridColumn="1 / 3"
          title="다이어트 도시락 어렵지않아요"
          description={'영양도, 맛도 모두 잡고 싶은 다이어트 도시락.\n활용도가 높은 재료를 조합해 쉽게 만들어봐요.'}
          image={categoryImage8}
        />
        <Card
          gridColumn="3 / 5"
          title="호로록 먹다보면, 파스타 샐러드"
          description={'라면도 좋지만 이젠 누들도 건강하게 먹을 차례!\n샐러드는 호로록 먹지 말라는 법 없으니깐요.'}
          image={categoryImage9}
        />
        <Card
          gridColumn="5 / 7"
          title="공허한 마음을 채워줄 스프 한 그릇"
          description={'열을 가하면 이내 단단한 모습은 어디가고 뭉근해지는 채소들.\n찬 바람에 공허해진 마음을 스프 한 그릇으로 달래볼까요?'}
          image={categoryImage10}
        />
      </Grid>
    </Layout>
  </Box>
);

export default CategoryPage;
