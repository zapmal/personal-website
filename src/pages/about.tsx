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
          content='Get to know a little more about me.'
        />
        <meta
          name='og:description'
          content='Get to know a little more about me.'
        />
      </Head>
      <h2>
        About me
      </h2>
      <p>
        Hello 👋, I'm Manuel Zapata, Software Engineer <i>currently</i> based on <strong>Zulia,
        Venezuela.</strong>
      </p>
      <p>
        I like solving exciting and —sometimes— complex problems. I enjoy
        learning, be it new or old principles and technologies that I can apply
        in building new, usable, and robust software. Most of my personal work is publicly available
        on GitHub, which I've been using since early 2020 but stopped using midways 2022 due to work (we use Bitbucket over there 😅).
      </p>
      <p>
        Outside of programming, I enjoy games, chess, cooking and learning new languages! (🇫🇷).
      </p>
    </Layout>
  );
};

export default About;
