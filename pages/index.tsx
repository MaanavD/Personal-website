import Head from "next/head";
import NextLink from "next/link"
import { Container, Flex, Box, Stack, Button, Link, ButtonGroup, Heading, chakra, Center } from "@chakra-ui/react";
import { CalendarIcon, EditIcon } from '@chakra-ui/icons'
import styles from "../styles/Home.module.css";
import NextImage from 'next/image'
import React from "react";
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Contact from './Contact'
import Footer from './components/Footer'
import ModDivider from "./components/ModDivider";

const Image = chakra(NextImage, {
	shouldForwardProp: (prop) => ['width', 'height', 'src', 'alt'].includes(prop)
})
// TODO: Scrollbar doesnt push content aside or is inline with resume page.
export default function Home() {
	return (
		<Container maxW="container.xl" padding="10">
			<Flex
				align="center"
				justify={{ base: "center", md: "space-around", xl: "space-between" }}
				direction={{ base: "column-reverse", md: "row" }}
				minH="80vh"
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
						{"This website is my little corner of the internet - I'm glad you've found it."}
						<br />
						<br />
						{"If you'd like to learn more about me, feel free to:"}
					</Heading>
					<ButtonGroup>

						<a target="_blank" href="https://calendly.com/maanavdalal/45min" rel="noopener noreferrer">
							<Button
								leftIcon={<CalendarIcon />}
								py="4"
								px="4"
								size="md"
								colorScheme="messenger"
							>
								Schedule a chat
							</Button>
						</a>
						<NextLink href="/blog/">
							<Button
								leftIcon={<EditIcon />}
								py="4"
								px="4"
								size="md"
								colorScheme="twitter"
							>
								Read my blog
							</Button>
						</NextLink>

					</ButtonGroup>
				</Stack>
				<Box mb={{ base: 12, md: 0 }} w={{ base: "80%", sm: "60%", md: "50%" }} >
					<Image src={"https://source.unsplash.com/collection/404339/800x600"} width="800px" height="600px" rounded="1rem" />
					<Center>
						<Heading as="h2"
							size="md"
							color="primary.800"
							lineHeight={1.5}>Article Title
						</Heading>
					</Center>
				</Box>
			</Flex>
			<ModDivider />
			<Projects />
			<ModDivider />
			<Achievements />
			<ModDivider />
			<Footer />
		</Container>
	);
}