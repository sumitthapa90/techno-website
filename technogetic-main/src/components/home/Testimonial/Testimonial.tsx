import styles from './testimonial.module.scss';
import React from 'react';
import Image from 'next/image';
import Carousel from 'react-multi-carousel';
import Card from '@/components/serviceCard/Card';
import { cardsData} from '../../../data/testimonial.json';
import testimonialData from '../../../data/testimonial.json';
import TestimonialSlide from '@/components/testimonialSlide/TestimonialSlide';
     
const card = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    slidesToSlide: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};


type Props = {};

const Testimonial = (props: Props) => {

  return (
    <>
      <div className={styles.color}>
        <div className={styles.container}>
          <div className={styles.head_sec} data-aos="fade-down" data-aos-duration="3000">
            <h2 className={styles.heading_sec}>{testimonialData.testimonialHeadData.heading}</h2>
            <p className={styles.para}>{testimonialData.testimonialHeadData.para}</p>
          </div>

          <div className={styles.testimonial}>
          <Carousel
            className={styles.carousel}
            responsive={card}
            ssr={true}
            infinite={true}
            autoPlay={false}
            autoPlaySpeed={1000}
            arrows={true}
            itemClass="carousel-item-padding-40-px">
            {cardsData.map((cardsData, index) => (
            <TestimonialSlide
              key={index}
            name= {cardsData.name} position= {cardsData.position}para={cardsData.para}
      date={cardsData.date} ImgUrl= {cardsData.ImgUrl}
            />
          ))}
          </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;