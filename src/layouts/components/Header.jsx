import React from 'react';
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Link,
  IconButton,
  useDisclosure,
  VStack,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  Drawer,
  Image,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import LogoDark from '@/assets/logo-dark.svg';
import LogoLight from '@/assets/logo-light.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const Links = ['About', 'Skills', 'Projects', 'Experience', 'Contact'];

const NavLink = ({ children }) => {
  return (
    <Link
      px={2}
      py={1}
      fontSize={'md'}
      fontWeight={400}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        color: useColorModeValue('gray.600', 'gray.300'),
      }}
      href={'#about'}
    >
      {children}
    </Link>
  );
};

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      zIndex={999}
      bg={useColorModeValue('white', 'gray.800')}
      px={2}
      boxShadow={useColorModeValue(
        'rgba(50, 50, 93, 0.125) 0px 1px 2px -1px, rgba(0, 0, 0, 0.125) 0px 1px 2px -1px',
        'none'
      )}
      position={'sticky'}
      top={0}
      left={0}
      as={'header'}
      display={'flex'}
      justifyContent={'center'}
      borderBottom={useColorModeValue('none', '1px solid #F6E05E')}
    >
      <Grid
        templateColumns={{ base: '1fr 0fr auto', md: 'auto 2fr 0fr' }}
        alignItems="center"
        gap={2}
        h={16}
        w={{
          base: '100%',
          md: 'calc(100% - 14rem)',
          lg: 'calc(100% - 20rem)',
        }}
      >
        <GridItem>
          <Box
            textAlign={'center'}
            alignItems={'center'}
            justifyContent={'center'}
            display={'flex'}
          >
            <Image
              minW={32}
              src={useColorModeValue(LogoLight, LogoDark)}
              alt="App Logo"
              h={{ base: 10, md: 10 }}
            />
          </Box>
        </GridItem>
        <GridItem display={{ base: 'none', md: 'block' }}>
          <Flex justifyContent="flex-end" alignContent={'center'} alignItems={'center'}>
            {Links.map(link => (
              <NavLink key={link}>{link}</NavLink>
            ))}
            <IconButton
              variant={'ghost'}
              size={'md'}
              icon={<FontAwesomeIcon size="lg" icon={colorMode === 'light' ? faMoon : faSun} />}
              onClick={toggleColorMode}
            />
          </Flex>
        </GridItem>
        <GridItem textAlign="right" display={{ base: 'block', md: 'none' }}>
          <IconButton
            variant="ghost"
            size="md"
            icon={<FontAwesomeIcon size="xl" icon={faBars} />}
            aria-label="Toggle Menu"
            fontSize={'md'}
            onClick={onOpen}
            color={'blue.700'}
            px={4}
          />
        </GridItem>
      </Grid>
      <Drawer placement="right" size={['xs']} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay sx={{ backdropFilter: 'blur(0.125rem)' }} />
        <DrawerContent>
          <DrawerHeader py={2} boxShadow={'0 0 3px rgba(0, 0, 0, 0.1)'}>
            <Image src={useColorModeValue(LogoLight, LogoDark)} alt="App Logo" h={12} />
            <DrawerCloseButton />
          </DrawerHeader>
          <DrawerBody>
            <VStack align="start">
              {Links.map(link => (
                <NavLink key={link} onClick={onClose}>
                  {link}
                </NavLink>
              ))}
              <IconButton
                variant={'ghost'}
                size={'md'}
                icon={<FontAwesomeIcon size="lg" icon={colorMode === 'light' ? faMoon : faSun} />}
                onClick={toggleColorMode}
              ></IconButton>
            </VStack>
          </DrawerBody>
          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Header;
