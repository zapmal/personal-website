import Head from 'next/head';
import Link from 'next/link';

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
            <h1 className={styles.headingHome}>Manuel Zapata</h1>
            <h1 className={styles.slash}>/</h1>
            <h1 className={styles.headingHome}>Software Engineer</h1>
          </>
        ) : (
          <>
            <h2 className={utilStyles.headingLg}>
              <Link href='/'>
                <a className={utilStyles.colorInherit}>Manuel Zapata</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href='/'>
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Layout;
