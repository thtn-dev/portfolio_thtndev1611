import { Box, Divider, Flex, Text, useColorModeValue } from '@chakra-ui/react';

function Footer() {
  const year = new Date().getFullYear();
  var bg = useColorModeValue('gray.300', 'gray.700');
  return (
    <Box as="footer" bg={bg} p={2}>
      <Flex wrap={'wrap'} fontSize={'sm'} justifyContent={'center'} alignItems={'center'} h={16}>
        <Text>© {year}</Text>
        &nbsp;
        <Divider orientation="vertical" h={4} />
        &nbsp;
        <Text textAlign={'center'}>Designed and coded with ❤️️ by Tang Ho Trung Nam</Text>
      </Flex>
    </Box>
  );
}

export default Footer;
