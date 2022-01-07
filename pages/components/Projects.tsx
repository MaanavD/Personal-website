import React from 'react'
import { Text, Link, Badge, Flex, Box, Center, Stack, Button, ButtonGroup, Heading, chakra, Spacer, useColorModeValue } from "@chakra-ui/react";
import NextImage from 'next/image'

const Image = chakra(NextImage, {
    shouldForwardProp: (prop) => ['width', 'height', 'src', 'alt'].includes(prop)
})

export default function Projects() {
    return (
        <>
            <Text href="#Projects" fontSize="3xl" align='center'>Projects</Text>
            <Text align='center'>My favourite creations over the years. See more on <Link color={useColorModeValue("blue.500", "blue.200")} href='https://github.com/MaanavD' isExternal> Github</Link>.</Text>
            <br/>
            <Flex flexDirection={['column', 'column', 'column', 'row']} align='center'>
                <Box maxW='sm' marginBottom={['10', 0]}>
                    <Image maxW="sm" justifySelf='auto' objectFit='cover' src={"https://source.unsplash.com/collection/404339/800x600"} width="400px" height="400px" />
                    <Text fontSize="xl" >inFlightful</Text>
                    <Stack direction='row'>
                        <Badge variant='outline' colorScheme='yellow'>1234</Badge>
                        <Badge>1234</Badge>
                        <Badge>1234</Badge>
                    </Stack>
                    <br/>
                    <Text fontSize=" md">This project's goal was to help teens better access jobs, and did so by using the indeed API to deliver entry-level jobs to users via an Android App.</Text>
                </Box>
                <Spacer/>
                <Box maxW='sm' marginBottom={['10', 0]}>
                    <Image justifySelf='auto' objectFit='cover' src={"https://source.unsplash.com/collection/404339/800x600"} width="400px" height="400px" />
                    <Text fontSize="xl" >Employmint</Text>
                    <Stack direction='row'>
                        <Badge>1234</Badge>
                        <Badge>1234</Badge>
                        <Badge>1234</Badge>
                    </Stack>
                    <br/>
                    <Text fontSize=" md">This project's goal was to help teens better access jobs, and did so by using the indeed API to deliver entry-level jobs to users via an Android App.</Text>
                </Box>
                <Spacer/>
                <Box maxW='sm' marginBottom={['10', 0]}>
                    <Image justifySelf='auto' objectFit='cover' src={"https://source.unsplash.com/collection/404339/800x600"} width="400px" height="400px" />
                    <Text fontSize="xl" >MicroScan</Text>
                    <Stack direction='row'>
                        <Badge>1234</Badge>
                        <Badge>1234</Badge>
                        <Badge>1234</Badge>
                    </Stack>
                    <br/>
                    <Text fontSize=" md">This project's goal was to help teens better access jobs, and did so by using the indeed API to deliver entry-level jobs to users via an Android App.</Text>
                </Box>
            </Flex>
        </>
    )
}
