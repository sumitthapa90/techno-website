import React from 'react';
import styles from './testimonial.slide.module.scss';
import Image from 'next/image';








type cardsDataProps = {
  ImgUrl?: any;
  name?: any;
  para?: string;
  position?: string;
  date?: string;
};

const TestimonialSlide = ({ ImgUrl, name, para, position, date }: cardsDataProps) => {
  return (
  
    <div className={styles.box}>
      <div className={styles.testimonial_slide_sec}>
        <div className={styles.testimonial_Slide_Flex}>
        <div>
          <Image className={styles.testimonial_img} src={ImgUrl} alt={name} width={100} height={100} />
        </div>
        <div>
        <h2 className={styles.heading}>{name}</h2>
        <p className={styles.position}>{position}</p>
        </div>
        </div>
        <p className={styles.para}>{para}</p>
        <p className={styles.date}>{date}</p>
      </div>
    </div>
  );
};

export default TestimonialSlide;
