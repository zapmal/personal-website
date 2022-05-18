import Head from 'next/head';
import Layout from '../components/Layout';

import { SITE_TITLE } from '../constants';

const Projects = () => {
  return (
    <Layout>
      <Head>
        <title>{`/about - ${SITE_TITLE}`}</title>
        <meta
          name="description"
          content="Get to know a little more about me."
        />
        <meta
          name="og:description"
          content="Get to know a little more about me."
        />
      </Head>
      <h2>Hello!</h2>
      <p>This page is a work in progress. My GitHub pins contain my most remarkable (personal) work.</p>
    </Layout>
  );
};

export default Projects;
