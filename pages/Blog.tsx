import { Image, Text, AspectRatio, Box, Container, Grid, HStack, Skeleton, Stack, useBreakpointValue, useColorModeValue, chakra, Badge } from '@chakra-ui/react';
import fs from 'fs';
import matter from 'gray-matter';
// import NextImage from 'next/image';
import Link from 'next/link';
import { BlogPostDisplay } from './components/BlogPostDisplay'

// const Image = chakra(NextImage, {
// 	shouldForwardProp: (prop) => ['width', 'height', 'src', 'alt'].includes(prop)
// })

// The Blog Page Content
export default function Blog({ posts }) {
    return <Container maxW="80%" paddingY="2em">
        <Grid templateColumns='repeat(3, 1fr)' gap={6}>

            {posts.map(post => {
                //extract slug and frontmatter
                const { slug, frontmatter } = post
                //extract frontmatter properties
                const { title, summary, date, bannerImage, tags } = frontmatter

                //JSX for individual blog listing
                return <Link href={`/posts/${slug}`}><article key={title}>
                    <Stack spacing={useBreakpointValue({ base: '4', md: '5' })}>

                        <Box position="relative">
                            <AspectRatio ratio={4 / 3}>
                                <Image
                                    src={bannerImage}
                                    alt={title}
                                    draggable="false"
                                    fallback={<Skeleton />}
                                />
                            </AspectRatio>
                        </Box>
                        <Stack>
                            <Stack spacing="0.5">
                                <Text fontWeight="medium" color={useColorModeValue('gray.700', 'gray.400')}>

                                    <h1>{title}</h1>
                            </Text>
                            <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')}>
                                {summary}
                            </Text>
                            <Stack direction='row'>
                                {tags.map((tag) =>
                                    <Badge variant='outline' colorScheme='gray'>
                                        {tag}
                                    </Badge>)
                                }
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
                </article>
                </Link>
            })}
    </Grid>
    </Container >
}


//Generating the Static Props for the Blog Page
export async function getStaticProps() {
    // get list of files from the posts folder
    const files = fs.readdirSync('posts');

    // get frontmatter & slug from each post
    const posts = files.map((fileName) => {
        const slug = fileName.replace('.md', '');
        const readFile = fs.readFileSync(`posts/${fileName}`, 'utf-8');
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