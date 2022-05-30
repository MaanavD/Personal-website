import React from 'react'
import { Text, Link, Badge, Flex, Box, Center, Stack, Button, ButtonGroup, Heading, chakra, Spacer, useColorModeValue } from "@chakra-ui/react";
import NextImage from 'next/image'
import { FaTrophy } from 'react-icons/fa'

const Image = chakra(NextImage, {
    shouldForwardProp: (prop) => ['width', 'height', 'src', 'alt'].includes(prop)
})

export default function Projects() {
    return (
        <>
            <Text fontSize="3xl" align='center'>Projects</Text>
            <Text align='center'>My favourite creations over the years. See more on <Link color={useColorModeValue("blue.500", "blue.200")} href='https://github.com/MaanavD' isExternal> Github</Link>.</Text>
            <br />
            <Flex flexDirection={['column', 'column', 'column', 'row']} align='center'>
                <Box maxW='sm' marginBottom={['2em', '2em', 0]}>
                    <Image rounded="lg" maxW="sm" justifySelf='auto' objectFit='cover' src={"https://source.unsplash.com/collection/404339/800x600"} width="400px" height="400px" />
                    <Text fontSize="xl" >inFlightful</Text>
                    <Stack direction='row'>
                        <Badge fontSize="0.8em" colorScheme='yellow'>JavaScript</Badge>
                        <Badge fontSize="0.8em" colorScheme='yellow'>Firebase</Badge>
                        <Badge fontSize="0.8em" colorScheme='yellow'>Chart.js</Badge>
                    </Stack>
                    <br />
                    <Text fontSize=" md">UI Dashboard for airlines to discover realtime customer sentiments. Scrapes Twitter for tweets, performs NLP, and displays them via Chart.js.</Text>
                </Box>
                <Spacer />
                <Box maxW='sm' marginBottom={['2em', '2em', 0]}>
                    <Image rounded="lg" justifySelf='auto' objectFit='cover' src={"https://source.unsplash.com/collection/404339/800x600"} width="400px" height="400px" />
                    <Text fontSize="xl" >Employmint</Text>
                    <Stack direction='row'>
                        <Badge colorScheme='yellow' variant='outline'><FaTrophy style={{ marginTop: '3px' }} /></Badge>
                        <Badge fontSize="0.8em" colorScheme='orange'>Java</Badge>
                        <Badge fontSize="0.8em" colorScheme='green'>Android Studio</Badge>
                        <Badge fontSize="0.8em" colorScheme='pink'>Figma</Badge>
                    </Stack>
                    <br />
                    <Text fontSize=" md">{"This project's goal was to help teens better access jobs, and did so by using the indeed API to deliver entry-level jobs to users via an Android App."}</Text>
                </Box>
                <Spacer />
                <Box maxW='sm' marginBottom={['2em', '2em', 0]}>
                    <Image rounded="lg" justifySelf='auto' objectFit='cover' src={"https://source.unsplash.com/collection/404339/800x600"} width="400px" height="400px" />
                    <Text fontSize="xl" >MicroScan</Text>
                    <Stack direction='row'>
                        <Badge colorScheme='yellow' variant='outline'><FaTrophy style={{ marginTop: '3px' }} /></Badge>
                        <Badge fontSize="0.8em" colorScheme='blue'>Python</Badge>
                        <Badge fontSize="0.8em" colorScheme='yellow'>Bulma</Badge>
                        <Badge fontSize="0.8em" colorScheme='pink'>Figma</Badge>
                    </Stack>
                    <br />
                    <Text fontSize=" md">A microstructure analysis tool that automatically annotates 2D structures with grain size, distributions, phase masks, and phase fractions.</Text>
                </Box>
            </Flex>
        </>
    )
}
