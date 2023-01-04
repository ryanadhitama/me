import fs from 'fs';
import matter from 'gray-matter';
import md from 'markdown-it';

export async function getStaticPaths() {
  const files = fs.readdirSync('data/works');
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace('.md', '')
    }
  }));
  return {
    paths,
    fallback: false
  };
}

interface StaticProps {
  params: {
    slug: string;
  };
}

interface PostProps {
  frontmatter: {
    title: string;
  };
  content: string;
}

export async function getStaticProps({ params: { slug } }: StaticProps) {
  const fileName = fs.readFileSync(`data/works/${slug}.md`, 'utf-8');
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content
    }
  };
}

export default function WorkPage({ frontmatter, content }: PostProps) {
  return (
    <div className="prose mx-auto">
      <h1>{frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
    </div>
  );
}
