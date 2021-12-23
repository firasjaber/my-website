import fs from 'fs';
import matter from 'gray-matter';
import { BlogpostMeta } from './../../interfaces/Blogpost';
import React, { FunctionComponent } from 'react';
import Link from 'next/link';
import { PageLayout } from 'components/PageLayout';

interface IProps {
  blogpost: BlogpostMeta[];
}

const Home: FunctionComponent<IProps> = ({ blogpost }) => {
  return (
    <PageLayout title='Blog'>
      <h1 className='font-varella font-bold tracking-wide text-xl sm:text-2xl lg:text-2xl mb-2'>
        Blog posts
      </h1>
      <div className='mb-10'>
        here is some blogposts i wrote that are related to web development,
        software, and more :
      </div>
      {blogpost.map((blogpost, i) => (
        <div key={i} className='space-y-2'>
          <h2 className='text-xl font-semibold'>
            <Link href={`/blog/${blogpost.slug}`}>{blogpost.title}</Link>
          </h2>
          <p className='opacity-60'>{blogpost.description}</p>
          <h3 className='opacity-40'>{blogpost.written_at}</h3>
        </div>
      ))}
    </PageLayout>
  );
};

export async function getStaticProps() {
  const files = fs.readdirSync('content/blog');

  let blogpost = files.map((file) => {
    const data = fs.readFileSync(`content/blog/${file}`).toString();

    return {
      ...matter(data).data,
      slug: file.split('.')[0],
    };
  });

  return {
    props: {
      blogpost: blogpost,
    },
  };
}

export default Home;
