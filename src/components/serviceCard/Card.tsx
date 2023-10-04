import Image from 'next/image';
import React, { useState } from 'react';
import styles from './Card.module.scss';

interface CardProps {
  number?: string;
  title?: string;
  description?: string;
  imageUrl1?: any;
  imageUrl2?: any;
  onMouseOver?: () => void;
  onMouseOut?: () => void;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl1, imageUrl2, number, onMouseOver, onMouseOut }) => {
  const [isActive, setIsActive] = useState(false);

  const handleMouseOver = () => {
    setIsActive(true);
    if (onMouseOver) {
      onMouseOver();
    }
  };

  const handleMouseOut = () => {
    setIsActive(false);
    if (onMouseOut) {
      onMouseOut();
    }
  };

  return (
    <div className={`${styles.card} ${isActive ? styles.active : ''}`} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} >
      <div className={styles.card_top}>
        <div className={styles.card_heads}>
          <div className={styles.card_number}>{number}</div>
          <div className={styles.card_title}>{title}</div>
        </div>
        {isActive ? (
          <Image src={imageUrl2} alt="title" className={styles.image} width={50} height={50} />
        ) : (
          <Image src={imageUrl1} alt="title" className={styles.image} width={50} height={50} />
        )}
      </div> 

      <div className={styles.card_bottom}>
        <p className={styles.card_description}>{description}</p>
      </div>
    </div>
  );
};

export default Card;