import Head from "next/head";
import NextLink from "next/link"
import { Container, Flex, Box, Stack, Button, Link, ButtonGroup, Heading, chakra, Center, VStack } from "@chakra-ui/react";
import { CalendarIcon, EditIcon } from '@chakra-ui/icons'
import styles from "../styles/Home.module.css";
import NextImage from 'next/image'
import React from "react";
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Contact from './Contact'
import Footer from './components/Footer'
import ModDivider from "./components/ModDivider";
import fs from 'fs';
import matter from 'gray-matter';
import { motion } from "framer-motion";

const Image = chakra(NextImage, {
	shouldForwardProp: (prop) => ['width', 'height', 'src', 'alt'].includes(prop)
})
// TODO: Scrollbar doesnt push content aside or inline with resume page.
export default function Home({ posts }) {
	//extract slug and frontmatter
	const { slug, frontmatter } = posts[0]
	//extract frontmatter properties
	const { title, summary, date, bannerImage, imageAlt, tags } = frontmatter
	return (
		<Container maxW="container.xl" padding="10">
			<Flex
				align="center"
				justify={{ base: "center", md: "space-around", xl: "space-between" }}
				direction={{ base: "column", md: "row" }}
				minH="80vh"
			>
				<Stack
					spacing={4}
					w={{ base: "80%", md: "40%" }}
					align={["center", "center", "flex-start", "flex-start"]}
				>
					<Heading
						size="xl"
						fontWeight="bold"
						color="primary.800"
						textAlign={["center", "center", "left", "left"]}
					>
						{"Hey! I'm Maanav."}
					</Heading>
					<chakra.p
						fontSize={{ md: "lg" }}
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
					</chakra.p>
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
						<NextLink href="/Blog/">
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
				<Box mt={{ base: 50, md: 0 }} mb={{ base: 12, md: 0 }} w={{ base: "80%", sm: "60%", md: "50%" }} >
					<motion.div
						initial={{ y: 10, opacity: 0 }}
						transition={{ ease: "easeIn", duration: 0.8 }}
						whileInView={{ y: 0, opacity: 1 }}
						viewport={{ once: true }}>
						<Link href={`/posts/${slug}`}>
							<Image src={bannerImage} alt={imageAlt} width="800px" height="600px" rounded="xl" />
						</Link>
						<VStack spacing={-1}>
							<Link href={`/posts/${slug}`}>
								<Heading as="h2"
									size="md"
									color="primary.800"
									lineHeight={1.5}>{title}
								</Heading>
							</Link>
							<chakra.p
								color="primary.800"
								opacity="0.8"
								fontWeight="normal"
								textAlign={["center", "center", "left", "left"]}
							>
								{"My latest article, posted:"} {date}
							</chakra.p>
						</VStack>
					</motion.div>
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

export async function getStaticProps() {
	// get list of files from the posts folder
	const files = fs.readdirSync('public/posts');

	// get frontmatter & slug from each post
	const posts = files.map((fileName) => {
		const slug = fileName.replace('.md', '');
		const readFile = fs.readFileSync(`public/posts/${fileName}`, 'utf-8');
		const { data: frontmatter } = matter(readFile);

		return {
			slug,
			frontmatter,
		};
	});

	// Return the pages static props
	return {
		props: {
			posts,
		},
	};
}