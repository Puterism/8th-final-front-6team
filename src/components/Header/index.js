import { Heading, Flex, HStack, IconButton, Box } from '@chakra-ui/core';
import { Link } from 'react-router-dom';
import React from 'react';
import { Hamburger } from '../../assets/index';
import useHeader from '../../hooks/useHeader';

const Header = props => {
  const { menus } = props;
  const { match } = useHeader();

  return (
    <Flex w="full" align="center" justify="space-between" px="110px" pt="67px">
      <Heading as={Link} to="/" color="darkGray" fontSize="xl" fontWeight="500">
        avocado
      </Heading>
      <Flex>
        <HStack color="darkGray" spacing="7" fontSize="xs">
          {menus &&
            menus.map((menu, i) => {
              const isActive = match.path === `/${menu.text}` || (match.path === '/' && menu.text === 'home');
              const activeStyle = {
                borderBottomWidth: '2px',
                borderBottomColor: 'green',
                color: 'green',
                fontWeight: 'bold'
              };
              const defaultStyle = {
                borderBottomWidth: '0',
                borderBottomColor: 'darkGray',
                color: 'darkGray',
                fontWeight: '500'
              };
              const style = isActive ? activeStyle : defaultStyle;
              return (
                <Box key={i} py="3px" {...style}>
                  <Link to={menu.href}>{menu.text}</Link>
                </Box>
              );
            })}
        </HStack>
        <IconButton icon={<Hamburger width="18px" height="18px" />} ml="56px" />
      </Flex>
    </Flex>
  );
};

Header.defaultProps = {
  menus: [
    {
      href: '/',
      text: 'home'
    },
    {
      href: '/categories',
      text: 'categories'
    },
    {
      href: '/about',
      text: 'about'
    },
    {
      href: '/contact',
      text: 'contact'
    },
    {
      href: '/faq',
      text: 'faq'
    }
  ]
};

export default Header;
