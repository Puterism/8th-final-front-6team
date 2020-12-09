import { Flex } from '@chakra-ui/core';
import React, { useCallback } from 'react';
import { RemoveBtn } from '../../assets';
import theme from '../../themes';

export default ({ chip, removable, onClick, onClickDelete }) => {
  const handleClickDelete = useCallback(() => {
    onClickDelete && onClickDelete(chip);
  }, [chip]);

  return (
    <Flex
      onClick={onClick}
      overflowY="visible"
      mr="2"
      mb="2"
      fontSize="14px"
      bg={theme.colors.lightGreen}
      color={theme.colors.green}
      borderColor={theme.colors.green}
      border="solid 1px"
      borderRadius="100px"
      p="5px 13px"
      fontWeight="bold"
      alignItems="center"
      cursor={!removable && 'pointer'}
      wordBreak="keep-all"
    >
      {chip.keyword}
      {removable && (
        <span style={{ marginLeft: '7px', marginTop: '3px', cursor: 'pointer' }}>
          <RemoveBtn onClick={handleClickDelete} />
        </span>
      )}
    </Flex>
  );
};
