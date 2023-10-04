import React from 'react';
import styles from './industries.module.scss';
import { industriesData, slidesData } from '../../../data/industries.json';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Slide from '@/components/industriesSlide/Slide';

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

const IndustriesSection = (props: Props) => {
  return (
    <div className={styles.industries} id="Portfolio">
      <div className={styles.container}>
        <div className={styles.industries_head} data-aos="fade-down">
          <p className={styles.main_head}>{industriesData.heading}</p>
          <p className={styles.main_text}>{industriesData.para}</p>
        </div>
        <div className={styles.industries_bottom} data-aos="fade-up">
          <Carousel
            className={styles.industries_bottom_carousel}
            responsive={slide}
            ssr={true}
            infinite={true}
            autoPlay={false}
            // autoPlaySpeed={1000}
            arrows={true}
            itemClass="carousel-item-padding-40-px">
            {slidesData.map((slidesData, index) => (
              <div className={styles.slides} key={index}>
                <Slide
                  imageUrl={slidesData.imageUrl}
                  title={slidesData.title}
                  title1={slidesData.title1}
                  desc={slidesData.desc}
                  button={slidesData.button}
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default IndustriesSection;
