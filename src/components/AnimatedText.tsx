import React from 'react';
import styles from './AnimatedText.module.css';

interface AnimatedTextProps {
  text: string;
  delay?: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, delay = 0 }) => {
  return (
    <div 
      className={styles.textContainer}
      style={{ animationDelay: `${delay}ms` }}
    >
      {text}
      <div className={styles.underline}></div>
    </div>
  );
};

export default AnimatedText; 