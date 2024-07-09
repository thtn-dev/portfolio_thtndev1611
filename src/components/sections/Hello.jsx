import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  HStack,
  Image,
  Stack,
  Tag,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCircle, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';

const WavingAnimation = {
  rotate: [0, 23, -20, 23, -20, 0],
  transition: {
    duration: 2.3,
    repeat: Infinity,
    repeatDelay: 1,
  },
};

function WavingHand() {
  return (
    <motion.span animate={WavingAnimation} style={{ display: 'inline-block' }}>
      👋
    </motion.span>
  );
}

function Hello() {
  return (
    <Container
      centerContent
      maxW={{
        base: '100%',
        lg: 'calc(100% - 20rem)',
      }}
    >
      <Grid templateColumns="repeat(12, 1fr)" gap={2} my={12}>
        <GridItem order={{ base: 2, md: 1 }} colSpan={{ base: 12, md: 7 }}>
          <Stack spacing={12}>
            <Box>
              <Text as="h1" fontSize={{ base: '1.75rem', md: '2.75rem' }} fontWeight="600">
                {"Hi, I'm Tang Ho Trung Nam"} <WavingHand />
              </Text>
              <Text as="p" fontSize={{ base: '1rem', md: '1.125rem' }} mt={2}>
                {
                  "I'm a software engineer based in Ho Chi Minh City, Vietnam. I have a passion for software development and love to create things that make people's lives easier."
                }
              </Text>
            </Box>
            <Stack>
              <Box>
                <Box display={'inline-flex'} justifyContent={'center'} color={'green.500'} w={4}>
                  <FontAwesomeIcon size="sm" icon={faCircle} beatFade />
                </Box>
                <Text as="span" fontSize="sm" fontWeight="400" ml={2}>
                  {"I'm currently looking for new opportunities."}
                </Text>
              </Box>
              <Box>
                <Box display={'inline-flex'} justifyContent={'center'} w={4}>
                  <FontAwesomeIcon icon={faLocationDot} size="sm" />
                </Box>
                <Text as="span" fontSize="sm" fontWeight="400" ml={2}>
                  {'Ho Chi Minh City, Vietnam'}
                </Text>
              </Box>
            </Stack>
            <HStack>
              <Tag
                size="lg"
                py={2}
                _hover={{
                  cursor: 'pointer',
                }}
              >
                <FontAwesomeIcon size="lg" icon={faGithub} />
              </Tag>
              <Tag
                size="lg"
                py={2}
                _hover={{
                  cursor: 'pointer',
                }}
              >
                <FontAwesomeIcon size="lg" icon={faFacebook} />
              </Tag>
              <Tag
                size="lg"
                py={2}
                _hover={{
                  cursor: 'pointer',
                }}
              >
                <FontAwesomeIcon size="lg" icon={faLinkedin} />
              </Tag>
            </HStack>
          </Stack>
        </GridItem>
        <GridItem
          mb={{ base: 4 }}
          order={{ base: 1, md: 2 }}
          colSpan={{ base: 12, md: 5 }}
          color="white"
        >
          <Flex
            justifyContent={{
              base: 'center',
              md: 'flex-end',
            }}
            alignItems="center"
            alignContent={'center'}
            h="100%"
          >
            <Flex pos={'relative'} w={80} h={80}>
              <Image
                src="https://avatars.githubusercontent.com/u/149599451?v=4"
                alt="Tang Ho Trung Nam"
                zIndex={1}
                borderWidth={6}
                borderColor={useColorModeValue('white', 'gray.800')}
                borderStyle={'solid'}
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
