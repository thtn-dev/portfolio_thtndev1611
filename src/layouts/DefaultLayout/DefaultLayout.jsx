import Header from '@/layouts/components/Header';
// import { Box, Text, useMediaQuery } from '@chakra-ui/react';
import Content from '../components/Content';
import Footer from '../components/Footer';

function DefaultLayout({ children }) {
  // const [isMobile] = useMediaQuery('(max-width: 768px)');
  return (
    <>
      <Header></Header>
      {/* <Content>{children}</Content> */}
      <Footer />
    </>
  );
}

export default DefaultLayout;
