import Head from 'next/head';
import Link from 'next/link';
import ReactTypingEffect from 'react-typing-effect';

import styles from './layout.module.css';
import utilStyles from '../../styles/utils.module.css';

interface Props {
  home?: boolean;
  children?: React.ReactNode;
}

const Layout = ({ home, children }: Props) => {
  return (
    <div className={styles.container}>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta name='title' content='Manuel Zapata - Software Engineer' />
        <meta name='og:title' content='Manuel Zapata - Software Engineer' />
        <meta
          name='description'
          content='Welcome to my personal space on the internet, come on, take a seat.'
        />
        <meta
          name='og:description'
          content='Welcome to my personal space on the internet, come on, take a seat.'
        />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <h1 className={`${styles.heading} ${styles.headingName}`}>
              Manuel Zapata
            </h1>
            <h1 className={styles.typewriter}>
              <ReactTypingEffect
                text={['code', 'take breaks', 'read', 'learn']}
                speed={100}
                eraseDelay={1500}
                typingDelay={1000}
              />
            </h1>
            <h1 className={`${styles.heading} ${styles.gradient}`}>
              Software Engineer
            </h1>
          </>
        ) : (
          <>
            <h2 className={utilStyles.headingLg}>
              <Link href='/'>
                <a className={utilStyles.colorInherit}>Manuel Zapata</a>
              </Link>
            </h2>
            <div className={styles.linkWrapper}>
              <a
                className={styles.link}
                href='https://twitter.com/zapmal0'
                target='_blank'
              >
                Twitter
              </a>
              <a
                className={styles.link}
                href='https://github.com/zapmal'
                target='_blank'
              >
                GitHub
              </a>
            </div>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href='/'>
            <a>← Home</a>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Layout;
