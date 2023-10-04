import styles from './featuresection.module.scss';
import {featureData,slidesData } from '../../../data/feture.json';
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Slide from '@/components/featuresSlide/Slide';


const slide = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};

type Props = {};

const FeatureSection = (props: Props) => {
  return (
    <div className={styles.featuresection} id="carriers">
      <div className={styles.container} >
        <div className={styles.features_head} data-aos="fade-down" >
          <p className={styles.main_head}>{featureData.title}</p>
          <p className={styles.main_text}>{featureData.desc}</p>
        </div>
        <div className={styles.features_bottom} data-aos="fade-up">
          <Carousel
            className={styles.features_bottom_carousel}
            responsive={slide}
            ssr={true}
            infinite={true}
            autoPlay={false}
            arrows={true}
            itemClass="carousel-item-padding-40-px">
           {slidesData.map((slidesData, index) => (
              <div key={index} className={styles.feature_slides} data-aos="fade-up">
                <Slide  imageUrl={slidesData.imageUrl} imageUrl1={slidesData.imageUrl1} title={slidesData.title} title1={slidesData.title1} button={slidesData.button} desc={slidesData.desc}/>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
