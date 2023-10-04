import Image from 'next/image';
import React from 'react';
import about from '../../../data/about.json';
import styles from './about.module.scss';
import BlurCloud from '@/Svg_icons/BlurCloud';
type Props = {};

const About = (props: Props) => {
  return (
    <>
      <div className={styles.container} id="about">
        <div className={styles.about}>
          <div className={styles.left_side} data-aos="fade-right">
            <div className={styles.about_img}>


              <img src="./assets/about-img.svg" alt="about" className={styles.about_img}/>

             
            </div>
          </div>

          <div className={styles.right_side} data-aos="fade-left">
            <div className={styles.circle} data-aos="fade-down">
              <div className={styles.c_img}>
                <Image className={styles.c_img} src="./assets/Shadow.svg" alt="img " width={200} height={200} />
              </div>
            </div>
            <div className={styles.main_head}>
              <p>{about.title}</p>
            </div>
            <div className={styles.main_text}>{about.desc}</div>
            <div className={styles.buttons}>
              <button className={styles.dark_button}>{about.button1}</button>
              <button className={styles.light_button}>{about.button2}</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
