import {
    AspectRatio,
    Badge,
    Box,
    chakra,
    Flex,
    Link,
    Skeleton,
    Stack,
    Text,
    useBreakpointValue,
    useColorModeValue,
} from '@chakra-ui/react'
import { stopAnimation } from 'framer-motion/types/render/utils/animation';
import * as React from 'react'
import { FaGratipay } from 'react-icons/fa';
import NextImage from "next/image"

const Image = chakra(NextImage, {
	shouldForwardProp: (prop) => ['width', 'height', 'src', 'alt'].includes(prop)
})

interface blogProp {
    bannerImage: string;
    imageAlt: string;
    title: string;
    summary: string;
    date: string;
    tags: string[];
}


export default function BlogPostDisplay(props: blogProp) {
    return (
        <Flex
            p={[1, 1, 5]}
            w="full"
            alignItems="center"
            justifyContent="center"
        >
            <Box
                mx="auto"
                rounded="lg"
                bg={useColorModeValue("gray.100", "gray.700")}
                maxW="2xl"
            >
                {props.bannerImage && <Image
                    roundedTop="lg"
                    placeholder="blur"
                    width="390px"
                    height="260px"
                    src={props.bannerImage}
                    alt={props.imageAlt}
                />}

                <Box p={6}>
                    <Box>
                        <Stack direction='row'>
                            {props.tags?.map((tag) =>
                                <Badge key={tag} variant='outline' colorScheme={"blue"}>
                                    {tag}
                                </Badge>)
                            }
                        </Stack>
                        <Link
                            display="block"
                            color={useColorModeValue("gray.700", "gray.100")}
                            fontWeight="bold"
                            fontSize="2xl"
                            mt={2}
                            _hover={{ color: "gray.600", textDecor: "underline" }}
                        >
                            {props.title}
                        </Link>
                        <chakra.p
                            mt={2}
                            fontSize="sm"
                            color={useColorModeValue("gray.600", "gray.400")}
                        >
                            {props.summary}
                        </chakra.p>
                    </Box>
                    <Flex direction={"row-reverse"}>
                        <chakra.span
                            fontSize="sm"
                            color={useColorModeValue("gray.600", "gray.300")}
                        >
                            {props.date}
                        </chakra.span>
                    </Flex>
                </Box>
            </Box>
        </Flex>
    )
}