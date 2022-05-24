import { ChakraProvider } from '@chakra-ui/react'
import useEmblaCarousel from 'embla-carousel-react'
import { useEffect, useCallback, useState } from 'react'
import { Container, Flex, Heading, Button, Box } from '@chakra-ui/react'
import SlideImage from '../components/SlideImage'
import SlideDetails from '../components/SlideDetails'
import repositories from '../../repositories.js'

const EmblaCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })
  const [scrollSnaps, setScrollSnaps] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  /* 
   * función que a través de la API de Embla Carousel
   * y el método scrollTo permite navegar al índice
   * correspondiente al "dot" de la navegación
   */
  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  /*
   * función que actualiza el estado del índice
   * correspondiente al slide actual  
   */
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap);
  }, [emblaApi, setSelectedIndex]);

  /*
   * por cada re-renderizado del componente nos aseguramos que
   * la librería Embla esté "montada" correctamente
   */
  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList);
    emblaApi.on("select", onSelect);
  }, [emblaApi, setScrollSnaps, onSelect]);

  return (
    <ChakraProvider>
      <Box bg="#030c1b" minHeight="100vh">

        <Container maxW="100%" py={10} >
          <Heading textAlign="center" color="white">
            My awesome Embla Carousel using + NextJS + Chakra
          </Heading>
        </Container>

        {/* Viewport */}
        <Box overflow="hidden" maxW="100%" p={0} ref={emblaRef} >
          {/* Container */}
          <Flex h='auto' py={[0, 5, 5]}>
            {/* Slides */}
            {repositories.map(repo => {
              return (
                <Flex key={repo.id} direction={{ base: 'column', md: 'row' }} justifyContent="center" position="relative" flex="0 0 100%">
                  <SlideImage imageSrc={repo.imgSrc} />
                  <SlideDetails item={repo} />
                </Flex>
              )
            })}
          </Flex>
        </Box>

        <Container maxW="container.xl" py={10}>
        <Flex justifyContent="center" alignItems="center" mt={5}>
            {scrollSnaps.map((_, idx) => (
            <Button w={2} h={2} mx={1} size="3" bg={idx === selectedIndex ? "yellow.500" : "gray.300"} key={idx} 
            onClick={() => scrollTo(idx)}/>
            ))}
        </Flex>
        </Container>

        </Box>
    </ChakraProvider> 
 )
}

export default EmblaCarousel