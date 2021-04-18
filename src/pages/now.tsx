import Head from 'next/head';
import Layout from '../components/Layout';

const Now = () => {
  return (
    <Layout>
      <Head>
        <title>/now - Manuel Zapata</title>
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
        <li>Doing some <em>research</em> for my grad project.</li>
        <li>Studying more about networking internals and cloud computing.</li>
        <li>Going more in-depth on some tech I really like.</li>
      </ul>
      <small><em>Last update: 2021/04/18</em></small>
    </Layout>
  );
};

export default Now;