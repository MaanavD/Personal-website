import { Box, useColorModeValue, Flex, chakra, Badge } from '@chakra-ui/react'
import React from 'react'

const Achievement = (props) => {
    const { title, type, organization, body } = props
    return (
        <Box
            w="full"
            maxW="sm"
            px={4}
            py={3}
            bg={useColorModeValue("gray.100", "gray.700")}
            rounded="md"
        >
            <Flex justifyContent="space-between" alignItems="center">
                <chakra.span
                    fontSize="sm"
                    color={useColorModeValue("gray.700", "gray.400")}
                >
                    {organization}
                </chakra.span>
                <Badge
                    variant='outline'
                    colorScheme='yellow'
                    px={2}
                    py={1}
                    textTransform="uppercase"
                    fontSize="xs"
                >
                    {type}
                </Badge>
            </Flex>

            <Box>
                <chakra.h1
                    fontSize="lg"
                    fontWeight="bold"
                    mt={2}
                    color={useColorModeValue("gray.800", "white")}
                >
                    {title}
                </chakra.h1>
                <chakra.p
                    fontSize="sm"
                    mt={2}
                    color={useColorModeValue("gray.600", "gray.300")}
                >
                    {body}
                </chakra.p>
            </Box>
        </Box>
    )
}

export default Achievement