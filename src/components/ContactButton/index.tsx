import React from 'react';
import cn from 'classnames';

import styles from './contactbutton.module.css';

interface Props {
  method: 'x' | 'github' | 'email' | 'linkedin';
}

const activeContactMethods = {
  github: {
    alt: 'GitHub',
    href: 'https://github.com/zapmal',
    width: 30,
  },
  x: {
    alt: 'X (formerly known as Twitter)',
    href: 'https://x.com/zapmal0',
    width: 38,
  },
  email: {
    alt: 'Email',
    href: 'mailto:malejz@protonmail.com',
    width: null,
  },
  linkedin: {
    alt: 'LinkedIn',
    href: 'https://www.linkedin.com/in/manuel-zapata-ab1028176',
    width: null,
  },
};

const ContactButton = ({ method }: Props) => {
  return (
    <button
      className={cn({
        [styles.button]: true,
        [styles.x]: method === 'x',
      })}
    >
      <a
        href={activeContactMethods[method].href}
        target={method !== 'email' ? '_blank' : ''}
      >
        <img
          src={`/images/${method}.png`}
          width={activeContactMethods[method].width ?? 32}
          height={32}
          alt={activeContactMethods[method].alt}
        />
      </a>
    </button>
  );
};

export default ContactButton;
