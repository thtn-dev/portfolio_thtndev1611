import { Box, Container, Flex, Grid, GridItem, Image, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
const MotionBox = motion(Box);

function Dot() {
  return (
   <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      backgroundColor="gray.100"
    >
      <MotionBox
        width="100px"
        height="100px"
        borderRadius="50%"
        bg="blue.500"
        position="relative"
        zIndex="1"
      />
      <MotionBox
        width="100px"
        height="100px"
        borderRadius="50%"
        bg="blue.500"
        position="absolute"
        zIndex="0"
        animate={{
          scale: [1, 2],
          opacity: [0.5, 0]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: 'loop'
        }}
      />
    </Box>
  );
}

function Hello() {
  return (
    <Container centerContent maxW={'calc(100% - 20rem)'}>
      <Grid templateColumns="repeat(12, 1fr)" gap={2} my={4}>
        <GridItem order={{ base: 2, md: 1 }} colSpan={{ base: 12, md: 7 }}>
          <Box>
            <Text as="h1" fontSize={{ base: '1.75rem', md: '2.75rem' }} fontWeight="600">
              {"Hi, I'm Tang Ho Trung Nam"}
            </Text>
            <Text as="p" fontSize={{ base: '1rem', md: '1.125rem' }} mt={2}>
              {
                "I'm a software engineer based in Ho Chi Minh City, Vietnam. I have a passion for software development and love to create things that make people's lives easier."
              }
            </Text>
            <Dot />
          </Box>
        </GridItem>
        <GridItem order={{ base: 1, md: 2 }} colSpan={{ base: 12, md: 5 }} color="white">
          <Flex justifyContent={'center'}>
            <Flex pos={'relative'} w={60} h={60}>
              <Image
                src="https://avatars.githubusercontent.com/u/149599451?v=4"
                alt="Tang Ho Trung Nam"
                zIndex={1}
              ></Image>
              <Box pos="absolute" w="100%" h="100%" bg="gray.600" left={3} top={3}></Box>
            </Flex>
          </Flex>
        </GridItem>
      </Grid>
    </Container>
  );
}

export default Hello;
