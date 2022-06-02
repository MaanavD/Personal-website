import { Container, Grid } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import fs from 'fs';
import matter from 'gray-matter';
// import NextImage from 'next/image';
import Link from 'next/link';
import BlogPostDisplay from '../components/BlogPostDisplay'
import { NextSeo } from 'next-seo';

// const Image = chakra(NextImage, {
// 	shouldForwardProp: (prop) => ['width', 'height', 'src', 'alt'].includes(prop)
// })

// The Blog Page Content
export default function Blog({ posts }) {

    return (
        <>
            <NextSeo title="Blog" description="Welcome to Maanav Dalal's blog. I try to keep this updated with pictures from my travels and other things going on in my life."/>
            <Container maxW={["100%", "100%", "80%"]} paddingY="2em">
                <Grid templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)']} gap={6}>
                    <AnimatePresence>
                        {posts.map((post, i) => {
                            //extract slug and frontmatter
                            const { slug, frontmatter } = post
                            //extract frontmatter properties
                            const { title, summary, date, bannerImage, imageAlt, tags } = frontmatter
                            //JSX for individual blog listing
                            const transition = {
                                ease: "easeIn",
                                duration: i == 0 ? 0.4 : i == 1 ? 0.8 : i * 0.3
                            }

                            return <Link key={title} href={`/posts/${slug}`}>
                                <motion.article key={title}
                                    initial={{ y: 10, opacity: 0 }}
                                    transition={transition}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}>
                                    <BlogPostDisplay
                                        title={title}
                                        summary={summary}
                                        date={date}
                                        bannerImage={bannerImage}
                                        imageAlt={imageAlt}
                                        tags={tags}
                                    />
                                </motion.article>
                            </Link>
                        })}
                    </AnimatePresence>
                </Grid>
            </Container >
        </>)
}


//Generating the Static Props for the Blog Page
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

    const sortedPosts = posts.sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime());

    // Return the pages static props
    return {
        props: {
            posts: sortedPosts,
        },
    };
}