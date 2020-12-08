import React from 'react';
import { Box, Text, Heading, Flex, Image } from '@chakra-ui/core';
import FooterIllustSrc from '../../images/footer_illust.png';

const Footer = () => {
  return (
    <Box as="footer">
      <Box paddingBottom="20px" borderBottom="2px solid #d3d3d3">
        <Heading as="h1" fontSize={30} fontWeight="600" fontFamily="'Montserrat Alternates', sans-serif">
          avocado
        </Heading>
        <Heading as="h2" fontSize={20} fontWeight="600" fontFamily="'Montserrat Alternates', sans-serif" lineHeight="1.3em">
          for a smarter veggie lifestyle
        </Heading>
        <Text fontSize="9px" lineHeight="1.9em" marginTop="19px" fontFamily="'Montserrat', sans-serif">
          AM 10:00 - PM 05:30 Off-time PM12:00 - PM 01:30<br />
          DAY OFF (SATURDAY, SUNDAY, HOLIDAY)
        </Text>
      </Box>
      <Flex justifyContent="space-between" marginTop="25px">
        <Image src={FooterIllustSrc} alt="avocado" />
        <Flex marginTop="30px">
          <Box marginRight="70px">
            <Heading
              as="span"
              display="inline-block"
              fontSize={15}
              fontWeight="bold"
              color="#323232"
              fontFamily="'Montserrat Alternates', sans-serif" 
              lineHeight="normal"
              paddingBottom="2px"
              marginBottom="18px"
              borderBottom="2px solid #323232"
            >
              about
            </Heading>
            <Text fontSize={9} marginBottom="8px" lineHeight="1">
              서비스 소개
            </Text>
            <Text fontSize={9} marginBottom="8px" lineHeight="1">
              인재 채용
            </Text>
            <Text fontSize={9} lineHeight="1">
              아보카도 멤버십
            </Text>
          </Box>
          <Box marginRight="70px">
            <Heading
              as="span"
              display="inline-block"
              fontSize={15}
              fontWeight="bold"
              color="#323232"
              fontFamily="'Montserrat Alternates', sans-serif" 
              lineHeight="normal"
              paddingBottom="2px"
              marginBottom="18px"
              borderBottom="2px solid #323232"
            >
              contact
            </Heading>
            <Text fontSize={9} marginBottom="8px" lineHeight="1">
              주문배송
            </Text>
            <Text fontSize={9} marginBottom="8px" lineHeight="1">
              취소/교환/반품 내역
            </Text>
            <Text fontSize={9} marginBottom="8px" lineHeight="1">
              서비스 리뷰 내역
            </Text>
            <Text fontSize={9} marginBottom="8px" lineHeight="1">
              증빙서류발급
            </Text>
            <Text fontSize={9} lineHeight="1">
              회원정보수정
            </Text>
          </Box>
          <Box marginRight="70px">
            <Heading
              as="span"
              display="inline-block"
              fontSize={15}
              fontWeight="bold"
              color="#323232"
              fontFamily="'Montserrat Alternates', sans-serif" 
              lineHeight="normal"
              paddingBottom="2px"
              marginBottom="18px"
              borderBottom="2px solid #323232"
            >
              faq
            </Heading>
            <Text fontSize={9} marginBottom="8px" lineHeight="1">
              1:1 상담내역
            </Text>
            <Text fontSize={9} marginBottom="8px" lineHeight="1">
              상품 Q&A내역
            </Text>
            <Text fontSize={9} marginBottom="8px" lineHeight="1">
              공지사항
            </Text>
            <Text fontSize={9} marginBottom="8px" lineHeight="1">
              FAQ
            </Text>
            <Text fontSize={9} lineHeight="1">
              고객의 소리
            </Text>
          </Box>
        </Flex>
      </Flex>
      <Box marginTop="50px" paddingBottom="103px">
        <Text fontSize={9} fontWeight="bold" lineHeight="1" marginBottom="15px">
          개인정보처리방침&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;이용약관
        </Text>
        <Text fontSize={9} lineHeight="1.9em">
          상호명: (주)아보카도프레시&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;사업장소재지: 서울특별시 강남구 선릉로12길 34 아보카도빌딩 20층&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;팩스: 123-4567-890&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;사업자등록번호: 123-45-678910&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;통신판매업신고: 2020-디프만-1204&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;사업자정보확인<br />
          고객센터: 1234-5678&nbsp;&nbsp;|&nbsp;&nbsp;평일 10:00 ~ 17:00 / Off-time 12:00 ~ 14:00 (토/일/공휴일 휴무)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;이메일: customer@avocado.co.kr&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;대표이사: 김아보&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;개인정보책임자: 최카도&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;호스팅서비스: (주)디프만
        </Text>
      </Box>
    </Box>
  )
}

export default Footer;
