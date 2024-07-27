import Head from 'next/head';
import Layout from '../components/Layout';

import { SITE_TITLE } from '../constants';

const Skills = () => {
  return (
    <Layout>
      <Head>
        <title>{`/skills - ${SITE_TITLE}`}</title>
        <meta name='description' content='Learn about my current skills.' />
        <meta name='og:description' content='Learn about my current skills.' />
      </Head>
      <h2>Skills</h2>
      <p>
        I've been mainly focused on backend development, but since early 2020 I've moving to a more full stack 
        approach.
      </p>

      <h3>Professionally</h3>
      <ul>
        <li>HTML and CSS.</li>
        <li>JavaScript and TypeScript.</li>
        <li>React.</li>
        <li>React Native (with Expo).</li>
        <li>PHP / Laravel.</li>
        <li>Java.</li>
        <li>Node.js / NestJS.</li>
        <li>Git, along with GitHub / Bitbucket.</li>
        <li>MySQL / PostgreSQL.</li>
        <li>Linux.</li>
        <li>Wordpress.</li>
      </ul>

      <h3>Personal Projects / Internships</h3>
      <ul>
        <li>Golang.</li>
        <li>MongoDB / Redis.</li>
        <li>SASS / Chakra UI / Material UI.</li>
        <li>Next.js.</li>
        <li>Docker.</li>
        <li>Elixir / Phoenix.</li>
      </ul>
    </Layout>
  );
};

export default Skills;
