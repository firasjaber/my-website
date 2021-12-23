import fs from 'fs';
import matter from 'gray-matter';
import { BlogpostMeta } from './../../interfaces/Blogpost';
import React, { FunctionComponent } from 'react';
import Link from 'next/link';
import { PageLayout } from 'components/PageLayout';

interface IProps {
  articles: BlogpostMeta[];
}

const Home: FunctionComponent<IProps> = ({ articles }) => {
  return (
    <PageLayout title='Blog | Firas Jaber'>
      {articles.map((article, i) => (
        <div key={i}>
          {' '}
          <h2>{article.title}</h2>
          <Link href={`/blog/${article.slug}`}>{article.slug}</Link>
          <h3>{article.written_at}</h3>
        </div>
      ))}
    </PageLayout>
  );
};

export async function getStaticProps() {
  const files = fs.readdirSync('content/blog');

  let articles = files.map((file) => {
    const data = fs.readFileSync(`content/blog/${file}`).toString();

    return {
      ...matter(data).data,
      slug: file.split('.')[0],
    };
  });

  return {
    props: {
      articles: articles,
    },
  };
}

export default Home;
