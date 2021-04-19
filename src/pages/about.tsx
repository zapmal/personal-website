import Head from 'next/head';
import Layout from '../components/Layout';

import { SITE_TITLE } from '../constants';

const About = () => {
  return (
    <Layout>
      <Head>
        <title>{`/about - ${SITE_TITLE}`}</title>
      </Head>
      <h2>
        About <em>me</em>
      </h2>
      <p>
        I'm from Venezuela, currently on my final year of Computer Science. Most
        of my work is publicly available on GitHub, which I've been using
        since ~2020.
      </p>
      <p>
        Outside of programming, I enjoy video games, chess, cooking and <em>sometimes </em>
        languages.
      </p>
      <p>I currently work as a Full Stack Developer.</p>
    </Layout>
  );
};

export default About;
