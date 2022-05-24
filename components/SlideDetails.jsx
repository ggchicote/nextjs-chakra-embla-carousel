import {
    Box,
    VStack,
    HStack,
    Heading,
    Stack,
    Text,
    Image,
    AspectRatio,
    Divider
} from "@chakra-ui/react"

const handleStat = stat => {

    return Math.abs(stat) > 999 ? Math.sign(stat)*((Math.abs(stat)/1000).toFixed(1)) + 'k' : Math.sign(stat)*Math.abs(stat)
  
  }

const SlideDetails = ({item}) => {

    return (
        <VStack
            w="full"
            h="full"
            p={5}
            spacing={6}
            alignItems="flex-start"
            justifyContent="center"
        >

            <Stack>
                <Heading color="white" textAlign={'left'}>{item.fullName}</Heading>
            </Stack>
            <Stack>
                <Text color="whiteAlpha.700">{item.description}</Text>
            </Stack>
         
            <HStack spacing={6} alignItems="center" w="full" >
                <AspectRatio ratio={1} w={20}>
                    <Image src={item.ownerAvatarUrl} alt="" />
                </AspectRatio>
                <Stack
                    spacing={0}
                    w="full"
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <VStack w="full" spacing={0} alignItems="stretch">
                        <Heading color="white" size="sm">{item.owner}</Heading>
                        <Text color="whiteAlpha.700">{item.ownerRole}</Text>
                    </VStack>
                    
                </Stack>

            </HStack>
            <HStack spacing={5} alignItems="center" w="full">
                <Stack>
                    <Text borderRadius={5} p={1} bg="green" color="white">{item.language}</Text>
                </Stack>
                <Stack>
                    <Text color="whiteAlpha.600">{item.releaseDate}</Text>
                </Stack>
            </HStack>               
            <Divider w={20}/>
            <HStack spacing={6} justifyContent="flex-start"  w="full">
                <VStack spacing={1}>
                    <Text color="white">{handleStat(item.stargazersCount)}</Text>
                    <Text color="whiteAlpha.700">Stars</Text>
                </VStack>
                <VStack spacing={1}>
                    <Text color="white">{handleStat(item.forksCount)}</Text>
                    <Text color="whiteAlpha.700">Forks</Text>
                </VStack>      
                <VStack spacing={1}>
                    <Text color="white">{handleStat(item.reviewCount)}</Text>
                    <Text color="whiteAlpha.700">Reviews</Text>
                </VStack>   
                <VStack spacing={1}>
                    <Text color="white">{handleStat(item.ratingAverage)}</Text>
                    <Text color="whiteAlpha.700">Rating</Text>
                </VStack>                                          
            </HStack>
        </VStack>
    )

}

export default SlideDetails