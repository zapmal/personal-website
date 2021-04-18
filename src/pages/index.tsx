import { useEffect } from 'react';

import Head from 'next/head'
import Link from 'next/link';
import cn from 'classnames';

import Layout from '../components/Layout';
import SocialButton from '../components/SocialButton';

import styles from '../styles/home.module.css'

import { SITE_TITLE } from '../constants';

const ROUTES = [
  { name: '/about' },
  { name: '/now' },
  { name: '/blog', disabled: true },
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
        <SocialButton social='github' />
        <SocialButton social='twitter' />
      </section>
      <footer className={styles.footer}>
        <small>2021 - Made with 💙 and Next.js, deployed on Vercel.</small>
      </footer>
    </Layout>
  );
};

export default Home;
