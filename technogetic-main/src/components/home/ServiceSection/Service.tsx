import { title } from 'process';
import React from 'react';
import styles from './service.module.scss';
import {servicehead , cardsData} from '../../../data/service.json';
import Marquee from 'react-fast-marquee';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from '@/components/serviceCard/Card';
import Image from 'next/image';

const card = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
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

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
    slidesToSlide: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};
const imageList = [
  { src: './assets/reactjs.svg', alt: 'ReactJS' },
  { src: './assets/postgresql.svg', alt: 'PostgreSQL' },
  { src: './assets/python.svg', alt: 'Python' },
  { src: './assets/vuejs.svg', alt: 'VueJS' },
  { src: './assets/flask.svg', alt: 'Flask' },
  { src: './assets/wordpres.svg', alt: 'Wordpress' },
  { src: './assets/typescript.svg', alt: 'TypeScript' },
  { src: './assets/html.svg', alt: 'HTML' },
  { src: './assets/java.svg', alt: 'Java' },
  { src: './assets/laravel.svg', alt: 'Laravel' },
  { src: './assets/tailwind.svg', alt: 'Tailwind' },
];

type Props = {};

const Service = (props: Props) => {
  return (
    <div className={styles.service_sec} id="service">
      <div className={styles.container}>
        <div className={styles.service} data-aos="fade-down">
          <div className={styles.service_img}>
            <Image
              src="./assets/c-service.svg"
              style={{ position: 'absolute' }}
              className={styles.c_img}
              alt="img"
              height={54}
              width={54}></Image>
          </div>
          <div className={styles.service_head}>
            <p className={styles.main_head}>{servicehead.maintitle}</p>
            <p className={styles.main_text}>{servicehead.maindesc}</p>
          </div>
          
        </div>
        <div className={styles.service_cards} data-aos="fade-up">
          <Carousel
            className={styles.service_cards_carousel}
            responsive={card}
            ssr={true}
            infinite={true}
            autoPlay={false}
            autoPlaySpeed={1000}
            arrows={true}
            itemClass="carousel-item-padding-40-px">
            {cardsData.map((cardsData, index) => (
            <Card
              key={index}
              title={cardsData.title}
              imageUrl1={cardsData.imageUrl1}
              imageUrl2={cardsData.imageUrl2}
              number={cardsData.number}
              description={cardsData.description}
            />
          ))}
          </Carousel>
        </div>
      </div>
      <div className={styles.service_images}>
        <Marquee>
          {imageList.map(({ src, alt }) => (
        <div className={styles.images_display} key={alt}>
          <Image src={src} alt={alt} height={100} width={150} />
        </div>
      ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Service;
