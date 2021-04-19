import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import Layout from '../../components/Layout';
import Date from '../../components/Date';

import utilStyles from '../../styles/utils.module.css';

import { getSortedPostsData, PostType } from '../../utils/posts';
import { SITE_TITLE } from '../../constants';

interface Props {
  allPostsData: PostType[];
}

const Blogs: React.FC<Props> = ({ allPostsData }) => {
  return (
    <Layout>
      <Head>
        <title>{`/blog - ${SITE_TITLE}`}</title>
        <meta
          name='description'
          content='Here is where I try to explain with words and code, sometimes.'
        />
        <meta
          name='og:description'
          content='Here is where I try to explain with words and code, sometimes.'
        />
      </Head>
      <h2>Blog</h2>
      {(allPostsData.length > 0 && allPostsData[0].id !== 'vercel') ? (
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, title, date }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/blog/${id}`}>{title}</Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date!} />
                </small>
              </li>
            ))}
          </ul>
        </section>
      ) : (
        <p>
          Sorry, there's no content. <em>Yet.</em>
        </p>
      )}
    </Layout>
  );
};

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData,
    },
  };
}

export default Blogs;
