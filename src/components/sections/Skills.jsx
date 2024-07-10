import {
  Box,
  Flex,
  Stack,
  Tag,
  Text,
  Image,
  Grid,
  GridItem,
  Container,
  useColorModeValue,
} from '@chakra-ui/react';
import skills from '@/data/skills';
import { motion,  useAnimation } from 'framer-motion';
import { useRef, useEffect } from 'react';

function SkillBox({ logo, name, index }) {
  var controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log("Intersecting");
          controls.start({
            y: [0, -10, 0], // Chuyển động theo trục y, nảy lên rồi trở về vị trí cũ
            transition: {
              duration: 0.5,
              delay: index * 0.1, // Độ trễ tăng dần cho mỗi box
            },
          });
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
    var refCurrent = ref.current;
    return () => {
      if (refCurrent) {
        observer.unobserve(refCurrent);
      }
    };
  }, [controls, index]);
  const hoverVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.3,
      },
    },
  };
  return (
    <Box width={'5.25rem'} cursor={'pointer'}>
      <Box px={4}>
        <motion.div  initial={{ y: 0 }} animate={controls} ref={ref} whileHover={'hover'} variants={hoverVariants}>
          <Image src={logo} alt={name} objectFit="cover" mb={2} />
        </motion.div>
      </Box>
      <Text as="h2" fontSize={'md'} textAlign={'center'}>
        {name}
      </Text>
    </Box>
  );
}

function SkillsSection() {
  return (
    <Box bg={useColorModeValue('gray.50', 'gray.900')}>
      <Container
        centerContent
        maxW={{
          base: '100%',
          lg: 'calc(100% - 20rem)',
        }}
        pt={12}
        pb={10}
      >
        <Stack pb={4}>
          <Flex justifyContent={'center'}>
            <Tag px={6} borderRadius={'xl'}>
              Skills
            </Tag>
          </Flex>
          <Text as="h1" fontSize={'xl'} textAlign={'center'}>
            Skills, tools and technologies I used:
          </Text>
        </Stack>
        <Grid
          templateColumns={{
            base: 'repeat(3, 1fr)',
            sm: 'repeat(4, 1fr)',
            md: 'repeat(6, 1fr)',
            lg: 'repeat(8, 1fr)',
          }}
          gap={4}
          p={4}
        >
          {skills.map((skill, index) => (
            <GridItem key={index} display={'flex'} justifyContent={'center'}>
              <SkillBox {...skill} index={index} />
            </GridItem>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default SkillsSection;
