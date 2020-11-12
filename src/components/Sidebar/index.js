import { VStack } from '@chakra-ui/core';
import { Link } from 'react-router-dom';
import React from 'react';

const Sidebar = () => (
  <VStack color="main" spacing="7" fontSize="xs" mt="32">
    <Link to="/category1">Category1</Link>
    <Link to="/category2">Category2</Link>
    <Link to="/category3">Category3</Link>
    <Link to="/category4">Category4</Link>
  </VStack>
);

export default Sidebar;
