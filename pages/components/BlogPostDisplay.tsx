import {
    AspectRatio,
    Badge,
    Box,
    Image,
    Skeleton,
    Stack,
    Text,
    useBreakpointValue,
    useColorModeValue,
} from '@chakra-ui/react'
import * as React from 'react'

interface blogProp {
    bannerImage: string;
    title: string;
    summary: string;
    date: string;
    tags: string[];
}


export default function BlogPostDisplay(props: blogProp) {
    return (
        <Stack spacing={useBreakpointValue({ base: '4', md: '5' })}>
            <Box position="relative">
                <AspectRatio ratio={4 / 3}>
                    <Image
                        src={props.bannerImage}
                        alt={props.title}
                        draggable="false"
                        fallback={<Skeleton />}
                    />
                </AspectRatio>
            </Box>
            <Stack>
                <Stack spacing="0.5">
                    <Text fontWeight="bold" color={useColorModeValue('gray.700', 'gray.400')}>
                        {props.title}
                    </Text>
                    <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')}>
                        {props.summary}
                    </Text>
                    <Stack direction='row'>
                        {props.tags?.map((tag) =>
                            <Badge key={tag} variant='outline' colorScheme='gray'>
                                {tag}
                            </Badge>)
                        }
                    </Stack>
                    <Text align="right" fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')}>
                        {props.date}
                    </Text>
                </Stack>
            </Stack>
        </Stack>
    )
}