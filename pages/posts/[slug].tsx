import fs from "fs";
import matter from "gray-matter";
import { Container, Heading, chakra, Stack, Badge, Divider } from '@chakra-ui/react'
import ReactMarkdown from 'react-markdown'
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import { format } from 'date-fns'
import NextImage from "next/image"
import { NextSeo } from "next-seo";

const Image = chakra(NextImage, {
	shouldForwardProp: (prop) => ['width', 'height', 'src', 'alt'].includes(prop)
})

// The page for each post
export default function Post({ frontmatter, content }) {

  const { title, summary, date, bannerImage, imageAlt, tags } = frontmatter
  const processedDate = format(new Date(date), "MMMM do, yyyy",)
  return <>
  <NextSeo title={title} description={summary}/>
  <Container maxW="container.md" padding="10">
    <Image rounded="lg" placeholder="blur" width="900px" height="600px" src={bannerImage} alt={imageAlt} />
    <Stack direction='row' py={2}>
      {tags?.map((tag) =>
        <Badge key={tag} variant='outline' colorScheme={"blue"}>
          {tag}
        </Badge>)
      }
    </Stack>
    <Heading as="h1" size="xl">{title}</Heading>
    <chakra.p>{processedDate}</chakra.p>
    <Divider my={5} />
    <ReactMarkdown components={ChakraUIRenderer()}>{content}</ReactMarkdown>
  </Container>
  </>
}

// Generating the paths for each post
export async function getStaticPaths() {
  // Get list of all files from our posts directory
  const files = fs.readdirSync("public/posts");
  // Generate a path for each one
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));
  // return list of paths
  return {
    paths,
    fallback: false,
  };
}


// Generate the static props for the page
export async function getStaticProps({ params: { slug } }) {
  const fileName = fs.readFileSync(`public/posts/${slug}.md`, 'utf-8');
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
    },
  };
}