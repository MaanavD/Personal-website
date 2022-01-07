import React from 'react'
import { Text, Badge, Flex, Box, Stack, Button, ButtonGroup, Heading, chakra } from "@chakra-ui/react";
import NextImage from 'next/image'

const Image = chakra(NextImage, {
    shouldForwardProp: (prop) => ['width', 'height', 'src', 'alt'].includes(prop)
})

export default function Projects() {
    return (
        <>
        <br/>
            <Text fontSize="3xl" align='center'>Drop me a line.</Text>
            <br/>
        </>
    )
}
