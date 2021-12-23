import { FunctionComponent } from 'react';
import fs from 'fs';
import matter from 'gray-matter';
import styles from '../../styles/article.module.css';
import { BlogpostInfo } from '../../interfaces/Blogpost';
import Markdown from './../../components/Markdown';
import { PageLayout } from 'components/PageLayout';

interface IProps {
  blogpost: BlogpostInfo;
}

const Article: FunctionComponent<IProps> = ({ blogpost }) => {
  return (
    <PageLayout title={blogpost.meta.title}>
      <div className='font-sans'>
        <div className='mb-10'>
          <h1 className='font-bold text-3xl'>{blogpost.meta.title}</h1>
          <span className='text-gray-200 opacity-60'>
            {blogpost.meta.written_at + ' - ' + blogpost.meta.author}
          </span>
        </div>
        <Markdown content={blogpost.content} />
      </div>
    </PageLayout>
  );
};

export async function getStaticProps({ ...ctx }) {
  const { slug } = ctx.params;

  const content = fs.readFileSync(`content/blog/${slug}.md`).toString();

  const info = matter(content);

  const blogpost = {
    meta: {
      ...info.data,
      slug,
    },
    content: info.content,
  };

  return {
    props: {
      blogpost: blogpost,
    },
  };
}

export async function getStaticPaths() {
  const files = fs.readdirSync('content/blog');
  const paths = files.map((file) => ({
    params: {
      slug: file.split('.')[0],
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export default Article;
