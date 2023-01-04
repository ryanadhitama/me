import { Box, BlogItem, Header, WorkItem } from '@components';
import fs from 'fs';
import matter from 'gray-matter';
import Head from 'next/head';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const skills = [
  'Laravel',
  'Node',
  'React',
  'Next',
  'Typescript',
  'Tailwind',
  'Postgresql',
  'Firebase'
];

export default function Home({ posts, works }: any) {
  return (
    <>
      <Head>
        <title>Ryan Adhitama Putra - Software Engineer</title>
        <meta name="description" content="Software engineer with 3 years experience" />
      </Head>
      <Header />
      <Box className="home">
        <Box className="container">
          <Box className="banner">
            <MotionBox
              variants={{
                out: {
                  y: '100%',
                  opacity: 0,
                  transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 }
                },
                in: {
                  y: 0,
                  opacity: 1,
                  transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 }
                }
              }}
              whileInView="in"
              initial="out"
            >
              <h1 className="banner__title">
                Hello, I&apos;m Ryan Adhitama
                <span>
                  <span className="text-gradient">Software</span> Engineer
                </span>
              </h1>
              <p className="banner__description">With 4 years experience</p>
            </MotionBox>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export async function getStaticProps() {
  const postFiles = fs.readdirSync('data/posts');
  const workFiles = fs.readdirSync('data/works');

  const posts = postFiles.map((fileName) => {
    const slug = fileName.replace('.md', '');
    const readFile = fs.readFileSync(`data/posts/${fileName}`, 'utf-8');
    const { data: frontmatter } = matter(readFile);
    return {
      slug,
      frontmatter
    };
  });

  const works = workFiles.map((fileName) => {
    const slug = fileName.replace('.md', '');
    const readFile = fs.readFileSync(`data/works/${fileName}`, 'utf-8');
    const { data: work } = matter(readFile);
    return {
      slug,
      work
    };
  });

  return {
    props: {
      posts,
      works
    }
  };
}
