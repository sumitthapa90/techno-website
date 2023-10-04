import Image from 'next/image';
import styles from './Slide.module.scss';

type IndustriesSlideProps = {
  imageUrl: string;
  title: string;
  title1: string;
  desc: string;
  button: string;
};

const Slide = ({ imageUrl, title, title1, desc, button }: IndustriesSlideProps) => {
  return (
    <div className={styles.industries}>
      <div className={styles.industries_left_sec}>
        <h2 className={styles.heading}>{title}</h2>
        <p className={styles.desc}>{desc}</p>
        <button className={styles.button}>{button}</button>
      </div>

      <div className={styles.industries_right_sec}>
        <Image src={imageUrl} alt={title1} className="card-image" width={500} height={500} />
      </div>
    </div>
  );
};

export default Slide;
