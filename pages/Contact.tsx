import React from 'react'
import { Text, Button, Container, Grid, HStack } from "@chakra-ui/react";
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedinIn, FaSpotify } from 'react-icons/fa';
import Profile from './components/Profile';

export default function Projects() {
    //TODO: Figure out 'divider'
    return (
        <Grid p={20} templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(2, 1fr)']}> 
            <Profile />
            <Container maxW="container.sm" padding="10">
                <br />
                <Text fontSize="3xl" align='center'>Connect with me through:</Text>
                <br />
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
        </Grid>
    )
}
