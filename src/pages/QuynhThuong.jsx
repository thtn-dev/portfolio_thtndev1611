import { Box, Flex, Text } from '@chakra-ui/react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import useScroll from '@/hooks/use-scroll';

function HelmetWrapper() {
  return (
    <Helmet>
      <title>Quỳnh Thương</title>
      <meta name="description" content="Trang web của Quỳnh Thương xinh đẹp và dễ thương." />
      <meta
        name="keywords"
        content="Quỳnh Thương, xinh đẹp, dễ thương, Quynh thuong xinh dep de thuong, Quynh Thuong de thuong"
      />
      <meta name="author" content="Quỳnh Thương" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content="Quỳnh Thương" />
      <meta property="og:description" content="Trang web của Quỳnh Thương xinh đẹp và dễ thương." />
      <meta
        property="og:image"
        content="https://th.bing.com/th/id/OIP.ErgqIHlKwv2W3MzhyAbdDAHaFS?rs=1&pid=ImgDetMain"
      />
      <meta property="og:url" content="https://trungnamdev.me" />
      <meta property="og:type" content="website" />
    </Helmet>
  );
}

// create component with text Quỳnh and Thương animation from left and right to center using framer motion
function TextQuynhThuong() {
    const scrolled = useScroll(20);

  return (
    <Flex justifyContent="center" alignItems="center" >
      <motion.div
        initial={{ x: -1000 }}
        animate={scrolled ? { x: 0 } : { x: -1000 }}
        transition={{ type: 'spring', stiffness: 50 }}
      >
        <Text as="span">Quỳnh</Text>
      </motion.div>
      <motion.div
        initial={{ x: 1000 }}
        animate={scrolled ? { x: 0 } : { x: 1000 }}
        transition={{ type: 'spring', stiffness: 50 }}
      >
        {' '}
        <Text as="span">&nbsp;Thương</Text>
      </motion.div>
    </Flex>
  );
}

function QuynhThuong() {
  return (
    <Box>
      <HelmetWrapper />
      <Box h={"1200px"}/>
      <TextQuynhThuong />
    </Box>
  );
}

export default QuynhThuong;
