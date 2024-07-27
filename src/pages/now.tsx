import Head from 'next/head';
import Layout from '../components/Layout';

import { SITE_TITLE } from '../constants';

const Now = () => {
  return (
    <Layout>
      <Head>
        <title>{`/now - ${SITE_TITLE}`}</title>
        <meta
          name='description'
          content="My now page, know what I'm up to."
        />
        <meta
          name='og:description'
          content="My now page, know what I'm up to."
        />
      </Head>
      <h2>What I'm up to</h2>
      <small>
        <a href='https://nownownow.com/about' target='_blank'>
          About now pages
        </a>
      </small>
      <ul>
        <li>Working and trying to study 🫨.</li>
      </ul>
      <small>
        <em>Last update: 7/27/2024</em>
      </small>
    </Layout>
  );
};

export default Now;
