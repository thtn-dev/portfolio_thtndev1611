import useScroll from '@/hooks/use-scroll';
import { Box } from '@chakra-ui/react';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';

function ScrollToTop() {
  var scrolled = useScroll(120);
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const BoxMotion = motion(Box);
  return (
    <BoxMotion
      h={12}
      w={12}
      pos="fixed"
      right={6}
      bottom={12}
      display={scrolled ? 'flex' : 'none'}
      bg="blue.900"
      borderRadius="md"
      onClick={handleClick}
      cursor={'pointer'}
      backdropFilter={'blur(10px)'}
      opacity={0.8}
      justifyContent="center"
      alignItems="center"
      color={'white'}
      _hover={{
        bg: 'blue.800',
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: scrolled ? 1 : 0, y: scrolled ? 0 : 20 }}
      transition={{ duration: 0.3 }}
    >
      <FontAwesomeIcon icon={faArrowUp} size="xl" />
    </BoxMotion>
  );
}

export default ScrollToTop;
