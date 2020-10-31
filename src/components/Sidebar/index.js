import { Link, VStack } from '@chakra-ui/core';
import React from 'react';

const Sidebar = () => (
  <VStack color="main" spacing="26px" fontSize="xs" mt="130px">
    <Link href="/category1">Category1</Link>
    <Link href="/category2">Category2</Link>
    <Link href="/category3">Category3</Link>
    <Link href="/category4">Category4</Link>
  </VStack>
);

export default Sidebar;
