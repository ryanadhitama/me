import { format } from 'date-fns';
import React from 'react';
import { Box } from '@components';
import Link from 'next/link';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

interface WorkItemProps {
  slug: string;
  frontmatter: {
    title: string;
    date: string;
  };
}

const WorkItem: React.FC<WorkItemProps> = ({ slug, frontmatter }) => {
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
      <Link href={`/work/${slug}`}>
        <Box className="work-item">
          <Box className="work-item__image">
            {frontmatter.title.charAt(0)}
            {frontmatter.title.charAt(1)}
          </Box>
          <Box className="work-item__content">
            <Box className="work-item__title">{frontmatter.title}</Box>
          </Box>
        </Box>
      </Link>
    </MotionBox>
  );
};

export default WorkItem;
