import React from 'react';
import styled from 'styled-components';

const SelectedList = () => {
  return <ListBox />
}

const DeliveryCost = ({ deliveryCost }) => {
  return (
    <Delivery>
      배송료 {deliveryCost}원
    </Delivery>
  )
}

export default ({ mallName, totalPrice, list }) => (
  <div style={{ display: 'flex', flexDirection: 'column', marginRight: '34px' }}>
    <Box>
      <Img />
      <Name>{mallName}</Name>
      <Price>
        {totalPrice}
        <span style={{ fontSize: '17px', marginLeft: '5px' }}>원</span>
      </Price>
      <Date>
        10월 24일, 오후 3:45 기준
      </Date>
      <div style={{ marginTop: '18px', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <DeliveryCost deliveryCost={2500} />
        <span style={{ marginLeft: '9px', fontSize: '12px' }}>3만원 이상 무료배송</span>
      </div>
      <SelectedList />
      {/* {list.map((item) => (
        <SelectedList
          name={item.name}
          price={item.price}
          weight={item.weight}
          num={item.num}
        />
      ))} */}
    </Box>
    <Button>이 조합으로 선택</Button>
  </div>
);

const Box = styled.div`
  background-color: #f7fbff;
  width: 384px;
  height: 475.2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  box-shadow: 0 3px 8px 0 rgba(68, 67, 77, 0.29);
  color: #2699fb;
`;
const Button = styled.div`
  width: 384px;
  height: 61px;
  background-color: #2699fb;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 16.8px;
  font-size: 20px;
  color: white;
  border-radius: 8px;
`;
const Name = styled.div`
  font-size: 16px;
`;
const Price = styled.div`
  margin-top: 10px;
  font-size: 45px;
`;
const Date = styled.div`
  margin-top: 4px;
  font-size: 11px;
`;
const Delivery = styled.div`
  padding: 8px 12px;
  border-radius: 25px;
  border: solid 1px #bce0fd;
  background-color: #edf7ff;
  font-size: 11px;
`;
const ListBox = styled.div`
  width: 378px;
  height: 175px;
`;
const Img = styled.div`
  width: 95px;
  height: 95px;
  border-radius: 50%;
  margin-top: 27px;
  border: solid 1px #2699fb;
`;