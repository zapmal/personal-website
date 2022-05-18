import Head from 'next/head'
import Link from 'next/link';
import cn from 'classnames';

import Layout from '../components/Layout';
import ContactButton from '../components/ContactButton';

import styles from '../styles/home.module.css'

import { SITE_TITLE } from '../constants';

const ROUTES = [
  { name: '/about' },
  { name: '/now' },
  { name: '/skills', },
  // { name: '/blog', disabled: true, },
  { name: '/projects', disabled: false },
];

const Home = () => {
  return (
    <Layout home>
      <Head>
        <title>{SITE_TITLE}</title>
      </Head>
      <section>
        <ul className={styles.unorderedList}>
          {ROUTES.map((route, index) => (
            <Link href={route.name} key={index}>
              <li className={cn({
                [styles.listItem]: true,
                [styles.disabled]: route.disabled,
              })}>
                <a href={route.name}>{route.name}</a>
              </li>
            </Link>
          ))}
        </ul>
      </section>
      <section className={styles.socials}>
        <ContactButton method='github' />
        <ContactButton method='email' />
        <ContactButton method='twitter' />
        <ContactButton method='linkedin' />
      </section>
      <footer className={styles.footer}>
        <small>2022 - Made with 💙 and Next.js, deployed on Vercel.</small>
      </footer>
    </Layout>
  );
};

export default Home;
