import { FunctionComponent } from 'react';
import fs from 'fs';
import matter from 'gray-matter';
import styles from '../../styles/article.module.css';
import { BlogpostInfo } from '../../interfaces/Blogpost';
import Markdown from './../../components/Markdown';
import { PageLayout } from 'components/PageLayout';

interface IProps {
  article: BlogpostInfo;
}

const Article: FunctionComponent<IProps> = ({ article }) => {
  return (
    <PageLayout title={article.meta.title}>
      <div className='font-sans'>
        <Markdown content={article.content} />
      </div>
    </PageLayout>
  );
};

export async function getStaticProps({ ...ctx }) {
  const { slug } = ctx.params;

  const content = fs.readFileSync(`content/blog/${slug}.md`).toString();

  const info = matter(content);

  const article = {
    meta: {
      ...info.data,
      slug,
    },
    content: info.content,
  };

  return {
    props: {
      article: article,
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
