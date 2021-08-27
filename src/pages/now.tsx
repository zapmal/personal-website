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
        <li>Working on my grad project.</li>
        <li>
          Going in-depth on some tech I like, but couldn't dedicate much time
          previously.
        </li>
      </ul>
      <small>
        <em>Last update: 2021/08/27</em>
      </small>
    </Layout>
  );
};

export default Now;
