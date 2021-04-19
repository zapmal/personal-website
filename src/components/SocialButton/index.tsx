import React from 'react';
import cn from 'classnames';

import styles from './socialbutton.module.css';

interface Props {
  social: 'twitter' | 'github';
}

const activeSocials = {
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
};

const SocialButton: React.FC<Props> = ({ social }) => {
  return (
    <button
      className={cn({
        [styles.button]: true,
        [styles.twitter]: social === 'twitter',
      })}
    >
      <a href={activeSocials[social].href} target='_blank'>
        <img
          src={`/images/${social}.png`}
          width={activeSocials[social].width}
          height={activeSocials[social].height}
          alt={activeSocials[social].alt}
        />
      </a>
    </button>
  );
};

export default SocialButton;
