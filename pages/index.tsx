import Head from "next/head";
import { Container, Flex, Box, Stack, Link, Text, Button, ButtonGroup, Heading, chakra } from "@chakra-ui/react";
import { CalendarIcon, ChatIcon } from '@chakra-ui/icons'
import styles from "../styles/Home.module.css";
import NextImage from 'next/image'
import React from "react";

const Image = chakra(NextImage, {
	shouldForwardProp: (prop) => ['width', 'height', 'src', 'alt'].includes(prop)
})

export default function Home() {
	return (
		<div>
			<Container maxW="container.xl" padding="10" centerContent>
				<Flex
					align="center"
					justify={{ base: "center", md: "space-around", xl: "space-between" }}
					direction={{ base: "column-reverse", md: "row" }}
					minH="70vh"
				>
					<Stack
						spacing={4}
						w={{ base: "80%", md: "40%" }}
						align={["center", "center", "flex-start", "flex-start"]}
					>
						<Heading
							as="h1"
							size="xl"
							fontWeight="bold"
							color="primary.800"
							textAlign={["center", "center", "left", "left"]}
						>
							{"Hey! I'm Maanav."}
						</Heading>
						<Heading
							as="h2"
							size="md"
							color="primary.800"
							opacity="0.8"
							fontWeight="normal"
							lineHeight={1.5}
							textAlign={["center", "center", "left", "left"]}
						>
							This website is my little corner of the internet - I'm glad you've found it.
							<br />
							<br />
							Feel free to say hello:
						</Heading>
						<ButtonGroup>
							<Button
								leftIcon={<CalendarIcon />}
								py="4"
								px="4"
								lineHeight="1"
								size="lg"
								colorScheme="teal"
							>
								Book a meeting
							</Button>
							<Button
								leftIcon={<ChatIcon />}
								py="4"
								px="4"
								lineHeight="2"
								size="lg"
								colorScheme="teal"
							>
								Message me
							</Button>
						</ButtonGroup>
					</Stack>
					<Box mb={{ base: 12, md: 0 }} w={{ base: "80%", sm: "60%", md: "50%" }} >
						<Image src={"https://source.unsplash.com/collection/404339/800x600"} width="800px" height="600px" rounded="1rem" />
					</Box>
				</Flex>
			</Container>
		</div >
	);
}