import React from 'react';
import cn from 'classnames';

import styles from './contactbutton.module.css';

interface Props {
  method: 'twitter' | 'github' | 'email' | 'linkedin';
}

const activeContactMethods = {
  github: {
    alt: 'GitHub',
    href: 'https://github.com/zapmal',
    width: 30,
  },
  twitter: {
    alt: 'Twitter',
    href: 'https://twitter.com/zapmal0',
  },
  email: {
    alt: 'Email',
    href: 'mailto:mzxgd16@gmail.com',
  },
  linkedin: {
    alt: 'LinkedIn',
    href: 'https://www.linkedin.com/in/manuel-zapata-ab1028176',
  },
};

const ContactButton = ({ method }: Props) => {
  return (
    <button
      className={cn({
        [styles.button]: true,
        [styles.twitter]: method === 'twitter',
      })}
    >
      <a
        href={activeContactMethods[method].href}
        target={method !== 'email' ? '_blank' : ''}
      >
        <img
          src={`/images/${method}.png`}
          width={32}
          height={32}
          alt={activeContactMethods[method].alt}
        />
      </a>
    </button>
  );
};

export default ContactButton;
