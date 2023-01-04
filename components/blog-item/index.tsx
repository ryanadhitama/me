import { format } from 'date-fns';
import React from 'react';
import { Box } from '@components';
import Link from 'next/link';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

interface BlogItemProps {
  slug: string;
  frontmatter: {
    title: string;
    date: string;
  };
}

const BlogItem: React.FC<BlogItemProps> = ({ slug, frontmatter }) => {
  return (
    <MotionBox
      variants={{
        out: {
          y: '80%',
          opacity: 0,
          transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 }
        },
        in: {
          y: 0,
          opacity: 1,
          transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 }
        }
      }}
      key={slug}
    >
      <Link href={`/blog/${slug}`}>
        <Box className="blog-item">
          <Box className="blog-item__title">{frontmatter.title}</Box>
          <Box className="blog-item__date">
            {format(new Date(frontmatter.date), 'MMM dd, yyyy')}
          </Box>
        </Box>
      </Link>
    </MotionBox>
  );
};

export default BlogItem;
