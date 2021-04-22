import Head from 'next/head';
import Layout from '../components/Layout';

import { SITE_TITLE } from '../constants';

const About = () => {
  return (
    <Layout>
      <Head>
        <title>{`/about - ${SITE_TITLE}`}</title>
        <meta
          name='description'
          content='This is my about page, get to know more about me.'
        />
        <meta
          name='og:description'
          content='This is my about page, get to know more about me.'
        />
      </Head>
      <h2>
        About <em>me</em>
      </h2>
      <p>
        Hello 👋, I'm Manuel Zapata, Software Engineer based in Zulia,
        Venezuela.
      </p>
      <p>
        I like solving exciting and —sometimes— complex problems. I enjoy
        learning, be it new or old principles and technologies that I can apply
        in building new, usable software. Most of my work is publicly available
        on GitHub, which I've been using since ~2020.
      </p>
      <p>
        I'm currently in my final year of CS and working as a Full Stack dev.
        Outside of programming, I enjoy video games, chess, cooking and{' '}
        <em>sometimes </em>languages.
      </p>
    </Layout>
  );
};

export default About;
