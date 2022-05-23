import Head from 'next/head';
import Layout from '../components/Layout';

import { SITE_TITLE } from '../constants';

const Projects = () => {
  return (
    <Layout>
      <Head>
        <title>{`/projects - ${SITE_TITLE}`}</title>
        <meta
          name="description"
          content="Get to know about the projects I've made."
        />
        <meta
          name="og:description"
          content="Get to know about the projects I've made."
        />
      </Head>
      <h2>Hello!</h2>
      <p>This page is a work in progress. My GitHub pins contain my most remarkable (personal) work.</p>
    </Layout>
  );
};

export default Projects;
