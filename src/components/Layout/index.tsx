import Head from 'next/head';
import Link from 'next/link';
import ReactTypingEffect from 'react-typing-effect';

import styles from './layout.module.css';
import utilStyles from '../../styles/utils.module.css';

export const siteTitle = "Manuel's Website";

interface Props {
  home?: boolean;
}

const Layout: React.FC<Props> = ({ children, home }) => {
  return (
    <div className={styles.container}>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta name='description' content='Manuel\s (zapmal) Website' />
        <meta
          name='og:image'
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name='og:title' content={siteTitle} />
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
                text={['code', 'take breaks', 'read', 'do silly stuff']}
                speed={100}
                eraseDelay={1500}
                typingDelay={1000}
              />
            </h1>
            <h1 className={`${styles.heading} ${styles.headingTitle}`}>
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
