import React from 'react';
import cn from 'classnames';

import styles from './contactbutton.module.css';

interface Props {
  method: 'twitter' | 'github' | 'email';
}

// type Props = {
//   method: 'twitter' | 'github' | 'email';
// };

const activeContactMethods = {
  github: {
    alt: 'GitHub',
    href: 'https://github.com/zapmal',
    width: 30,
    height: 32,
  },
  twitter: {
    alt: 'Twitter',
    href: 'https://twitter.com/zapmal0',
    width: 32,
    height: 32,
  },
  email: {
    alt: 'Email',
    href: 'mailto:mzxgd16@gmail.com',
    width: 32,
    height: 32,
  }
};

const ContactButton: React.FC<Props> = ({ method }) => {
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
          width={activeContactMethods[method].width}
          height={activeContactMethods[method].height}
          alt={activeContactMethods[method].alt}
        />
      </a>
    </button>
  );
};

export default ContactButton;
