import React from 'react'
import { Text, Badge, Flex, Box, Stack, Button, ButtonGroup, Heading, chakra, HStack, Container, Grid } from "@chakra-ui/react";
import NextImage from 'next/image'
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedinIn, FaSpotify } from 'react-icons/fa';

const Image = chakra(NextImage, {
    shouldForwardProp: (prop) => ['width', 'height', 'src', 'alt'].includes(prop)
})

export default function Projects() {
    return (
        <>
            <br />
            <Text fontSize="3xl" align='center'>Connect with me at:</Text>
            <br />
            <Container maxW="container.sm" padding="10">
                <Grid gap={6} templateColumns='auto' >

                    <a target="_blank" href="https://github.com/MaanavD/" rel="noopener noreferrer">
                        <Button size='lg' width="100%" colorScheme='gray' leftIcon={<FaGithub />}>
                            Github
                        </Button>
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/in/maanavdalal/" rel="noopener noreferrer">
                        <Button size='lg' width="100%" colorScheme='linkedin' leftIcon={<FaLinkedinIn />}>
                            LinkedIn
                        </Button>
                    </a>
                    <a target="_blank" href="mailto:maanavdalal@gmail.com?Subject=Let%27s%20Talk" rel="noopener noreferrer">
                        <Button size='lg' width="100%" colorScheme='red' leftIcon={<FaEnvelope />}>
                            Email
                        </Button>
                    </a>
                    <a target="_blank" href="https://www.instagram.com/maanav_/" rel="noopener noreferrer">
                        <Button size='lg' width="100%" colorScheme='pink' leftIcon={<FaInstagram />}>
                            Instagram
                        </Button>
                    </a>
                    <a target="_blank" href="https://open.spotify.com/user/ultimated100" rel="noopener noreferrer">
                        <Button size='lg' width="100%" colorScheme='green' leftIcon={<FaSpotify />}>
                            Spotify
                        </Button>
                    </a>
                </Grid>
            </Container>
        </>
    )
}
