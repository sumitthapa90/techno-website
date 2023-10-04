import React, { useState, useRef } from 'react';
import styles from './portfolio.module.scss';
import Image from 'next/image';
import portfolioData from '../../../data/portfolio.json';
import Link from 'next/link';
import { BsArrowRightCircle } from 'react-icons/bs';

type Props = {};

interface portfolioTypes {
  title: string;
  description: string;
  imgUrl: string;
  LiveLink: string;
}

let Array = [
  'Healthcare',
  'E-Commerce',
  'Education',
  'Food Services',
  'Transpotation',
  'Logistics',
  'Trucks',
  'cars',
  'bikes',
  'Loundary'
];

const Portfolio = (props: Props) => {
  const [activeTab, setactiveTab] = useState<any>('Healthcare');

  const scrollableContainerRef = useRef<HTMLUListElement>(null); // Update the type to HTMLUListElement
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleScrollLeft = () => {
    const container = scrollableContainerRef.current;
    if (container) {
      container.scrollLeft += 100; // Adjust the scroll distance as needed
      setScrollLeft(container.scrollLeft);
    }
  };

  const handleChange = (e: any) => {
    setactiveTab(e);
  };

  console.log(portfolioData);

  let portfolioDataType: any = portfolioData;

  return (
    <div className={styles.container} id="portfolio">
      <div className={styles.portfolio_nav}>
        <h3>Our Portfolio</h3>

        <div className={styles.scrollableTab}>
          <ul
            ref={scrollableContainerRef}
            onScroll={(e) => {
              const target = e.target as HTMLUListElement;
              setScrollLeft(target.scrollLeft);
            }}
            className={styles.portfolio_UnorderList}>
            {Array.map((element, index) => {
              return (
                <li
                  onClick={() => handleChange(element)}
                  className={styles.portfolio_List}
                  key={index}>
                  {element}
                </li>
              );
            })}
          </ul>

<BsArrowRightCircle className={styles.arrow_left} onClick={handleScrollLeft} />

          
        </div>
      </div>
      <div className={styles.protfolio_nav}>
        <div className={styles.portfolio_boxes}>
          {(portfolioDataType[activeTab] as portfolioTypes[]).map((element, index) => {
            return (
              <div key={index} className={styles.box}>
                <div>
                  <Image
                    className={styles.portfolio_img}
                    src={element.imgUrl}
                    width={350}
                    height={300}
                    alt="projects"
                  />
                </div>

                 <div className={styles.portfolio_desc_sec}>
                  <h3 className={styles.portfolio_head}>{element.title}   dcfsd</h3>
                  {/* <p className={styles.portfolio_para}>{element.description}</p> */}
                  <Link href="#" className={styles.viewLink}>
                    <button className={styles.portfolio_btn}>{element.LiveLink}</button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className={styles.center}>
          <button className={styles.portfoliyo_btn_exp}>Explore More</button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
