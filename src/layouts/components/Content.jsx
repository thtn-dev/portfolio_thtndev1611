import { Box } from '@chakra-ui/react';

function Content({ className, children, ref, ...rest }) {
  return (
    <Box as="section" ref={ref} className={className} {...rest}>
      {children}
    </Box>
  );
}

export default Content;
