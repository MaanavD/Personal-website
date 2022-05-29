import { Image, Text, AspectRatio, Box, Container, Grid, HStack, Skeleton, Stack, useBreakpointValue, useColorModeValue, chakra, Badge } from '@chakra-ui/react';
import fs from 'fs';
import matter from 'gray-matter';
// import NextImage from 'next/image';
import Link from 'next/link';
import BlogPostDisplay from './components/BlogPostDisplay'

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
                return <Link key={title} href={`/posts/${slug}`}>
                    <article key={title}>
                       <BlogPostDisplay 
                        title={title}
                        summary={summary}
                        date={date}
                        bannerImage={bannerImage}
                        tags={tags}
                       />
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