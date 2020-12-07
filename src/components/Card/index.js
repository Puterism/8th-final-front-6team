import React from 'react';
import CardBig from './CardBig';
import CardLarge from './CardLarge';
import CardMedium from './CardMedium';
import CardSmall from './CardSmall';

const Card = (props) => {
  const { big, large, medium, } = props;

  return (
    <>
      {
        // eslint-disable-next-line no-nested-ternary
        big ? <CardBig {...props} /> : large ? <CardLarge {...props} /> : medium ? <CardMedium {...props} /> : <CardSmall {...props} />
      }
    </>
  );
};

Card.defaultProps = {
  title: '',
  description: '',
  likesCount: 0,
  commentsCount: 0,
  big: null,
  large: null,
  medium: null,
};

export default Card;
