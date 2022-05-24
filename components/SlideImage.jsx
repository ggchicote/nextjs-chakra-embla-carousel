import {
    VStack,
    Image,
} from "@chakra-ui/react"

const SlideImage = ({imageSrc}) => {

    return (
        <VStack
            w="full"
            h="full"
            px={5}
            spacing={10}
            alignItems={{ base: 'flex-start', md: 'flex-end' }}
            justifyContent="center"
        >
            <Image
                height={"auto"}
                width={"auto"}
                rounded="lg"
                src={imageSrc}
                alt="cover image"
            />

        </VStack>
    )
}

export default SlideImage