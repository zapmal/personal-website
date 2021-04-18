import React from 'react';
import cn from 'classnames';

import styles from './socialbutton.module.css';

interface Props {
  social: 'twitter' | 'github';
}

const SocialButton: React.FC<Props> = ({ social }) => {
  return (
    <button className={cn({
      [styles.button]: true,
      [styles.twitter]: social === 'twitter',
    })}>
      <img src={`/images/${social}.png`} width='35px' height='35px'/>
    </button>
  );
};

export default SocialButton;
