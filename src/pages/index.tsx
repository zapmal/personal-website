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
  { name: '/skills' },
  // { name: '/blog', disabled: true, },
  { name: '/projects', disabled: true },
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
        <ContactButton method='x' />
        <ContactButton method='linkedin' />
      </section>
      <footer className={styles.footer}>
        <small>2024 - Made with 💙 and Next.js (Don't ask me why LMAO). Deployed on Vercel!</small>
      </footer>
    </Layout>
  );
};

export default Home;
