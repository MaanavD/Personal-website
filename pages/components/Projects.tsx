import React from 'react'
import { Text, Link, Badge, Flex, Box, Center, Stack, Button, ButtonGroup, Heading, chakra, Spacer, useColorModeValue } from "@chakra-ui/react";
import NextImage from 'next/image'
import { FaTrophy } from 'react-icons/fa'
import { AnimatePresence, motion } from "framer-motion"
import employmintImage from "/public/images/projects/employmint.jpg"
import inflightfulImage from "/public/images/projects/inflightful.jpg"
import microscanImage from "/public/images/projects/microscan.jpg"

const Image = chakra(NextImage, {
    shouldForwardProp: (prop) => ['width', 'height', 'src', 'alt'].includes(prop)
})

export default function Projects() {
    // TODO: Make each project from dynamic info not static, can add tiered duration when done
    return (
        <AnimatePresence>
            <Text fontSize="3xl" align='center'>Projects</Text>
            <Text align='center'>My favourite creations over the years. See more on <Link color={useColorModeValue("blue.500", "blue.200")} href='https://github.com/MaanavD' isExternal> Github</Link>.</Text>
            <br />
            <Flex flexDirection={['column', 'column', 'column', 'row']} align='center'>
                <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    transition={{ ease: "easeIn", duration: 0.8 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}>
                    <Box maxW='sm' marginBottom={['2em', '2em', 0]}>
                        <Image rounded="lg" maxW="sm" justifySelf='auto' objectFit='cover' src={inflightfulImage} alt="inflightful logo"/>
                        <Text fontSize="xl" >inFlightful</Text>
                        <Stack direction='row'>
                            <Badge fontSize="0.8em" colorScheme='yellow'>JavaScript</Badge>
                            <Badge fontSize="0.8em" colorScheme='yellow'>Firebase</Badge>
                            <Badge fontSize="0.8em" colorScheme='yellow'>Chart.js</Badge>
                        </Stack>
                        <br />
                        <Text fontSize=" md">UI Dashboard for airlines to discover realtime customer sentiments. Scrapes Twitter for tweets, performs NLP, and displays them via Chart.js.</Text>
                    </Box>
                </motion.div>
                <Spacer />
                <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    transition={{ ease: "easeIn", duration: 0.8 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}>
                    <Box maxW='sm' marginBottom={['2em', '2em', 0]}>
                        <Image rounded="lg" justifySelf='auto' objectFit='cover' src={employmintImage} alt="employmint logo"/>
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
                </motion.div>
                <Spacer />
                <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    transition={{ ease: "easeIn", duration: 0.8 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}>
                    <Box maxW='sm' marginBottom={['2em', '2em', 0]}>
                        <Image rounded="lg" objectFit='cover' src={microscanImage} alt="microscan logo"/>
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
                </motion.div>
            </Flex>
        </AnimatePresence>
    )
}
