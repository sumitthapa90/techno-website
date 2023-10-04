'use client';
import React from 'react';
import heroData from '../../../data/hero.json';
import Link from 'next/link';
import CountUp from 'react-countup';
import styles from './hero.module.scss';
import Image from 'next/image';

import Ellipse from '@/Svg_icons/Ellipse';
import Line from '@/Svg_icons/Line';
import Spinner from '@/components/includes/Spinner/Spinner';
import Header from '@/components/includes/Header/Header';
import Instagram from '@/Svg_icons/Instagram';
import Twitter from '@/Svg_icons/Twitter';

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <>
      <div className={styles.color} id="hero">
        <Header />
        <div className={styles.hero_section} id="hero">
          <div className={styles.hero_section_left} data-aos="fade-right">
            <div className={styles.ellipse}>
              <Ellipse />
            </div>

            <div className={styles.line}>
              <Line />
            </div>

            <h2 className={styles.hero_section_title}>{heroData.title}</h2>
            <p className={styles.hero_section_decs}>{heroData.desc}</p>
            <button className={`${styles.button} ${styles.button_2}`}>{heroData.button}</button>

            <div className={styles.hero_section_stats}>
              <div className={styles.box_1}>
                <span className={styles.stats}>
                  <h2 className={styles.stats_number}>
                    <CountUp end={6} duration={4} />+
                  </h2>
                  <p className={styles.stats_color}>{heroData.experince}</p>
                </span>
              </div>
              <div className={styles.box}>
                <span className={styles.stats}>
                  <h2 className={styles.stats_number}>
                    <CountUp end={100} duration={4} />%
                  </h2>
                  <p className={styles.stats_color}>{heroData.client}</p>{' '}
                </span>
              </div>
              <div className={styles.box}>
                <span className={styles.stats}>
                  <h2 className={styles.stats_number}>
                    <CountUp end={100} duration={4} />+
                  </h2>
                  <p className={styles.stats_color}>{heroData.project}</p>{' '}
                </span>
              </div>
            </div>
          </div>

          <div className={styles.hero_section_right} data-aos="fade-left">
            <div className={styles.hero_sec_mask}>
              <Image width={150} height={150} src="./assets/Mask.svg" alt="mask" />
            </div>

            <div className={styles.spinnerdiv}>
              <Spinner />
            </div>

            <div>
             <img src='./assets/hearo_sec.svg' className={styles.hero_section_img}/>
            </div>

            <div className={styles.social_icons}>
              <div>
                <Link href="/">
                  <Instagram />
                </Link>
              </div>

              <div className="icons">
                <Image src="./assets/Facebook.svg" alt="facebook" width={30} height={30} />
              </div>

              <div>
                <Link href="">
                  <Twitter />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
