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
        Mainly focused on backend development. Since ~2020 I've been moving to a more full stack
        approach.
      </p>

      <h3>Professionally</h3>
      <ul>
        <li>HTML / CSS.</li>
        <li>JavaScript.</li>
        <li>React.</li>
        <li>PHP / Laravel.</li>
        <li>Java.</li>
        <li>Node.js / Express / NestJS.</li>
        <li>Git, along with GitHub / Bitbucket.</li>
        <li>MySQL / PostgreSQL.</li>
        <li>Linux.</li>
      </ul>

      <h3>Personal Projects / Internships</h3>
      <ul>
        <li>TypeScript.</li>
        <li>MongoDB / Redis.</li>
        <li>SCSS / SASS / Material UI.</li>
        <li>GraphQL.</li>
        <li>Next.js.</li>
        <li>C#.</li>
        <li>Docker.</li>
        <li>React Native.</li>
        {/* <li>Elixir / Phoenix.</li> */}
      </ul>
    </Layout>
  );
};

export default Skills;
