import Head from 'next/head';
import Layout from '../components/Layout';

import { SITE_TITLE } from '../constants';

const Now = () => {
  return (
    <Layout>
      <Head>
        <title>{`/now - ${SITE_TITLE}`}</title>
        <meta name='description' content='This is my now page, know what I up to.' />
        <meta name='og:description' content='This is my now page, know what I up to.' />
      </Head>
      <h2>
        What I'm up to
      </h2>
      <small>
        <a 
          href='https://nownownow.com/about'
          target='_blank'
        >
          About now pages
        </a>
      </small>
      <ul>
        <li>Starting to research things for my grad project.</li>
        <li>Studying more about networking internals and cloud computing.</li>
        <li>Going in-depth on some tech I like, but couldn't dedicate much time previously.</li>
      </ul>
      <small><em>Last update: 2021/04/18</em></small>
    </Layout>
  );
};

export default Now;
