import Image from "next/image";
import styles from "./Slide.module.scss";

type featuresDataProps = {
  imageUrl: string;
  title: string;
    imageUrl1: string;
    title1: string;
    desc: string;
    button: string;
  
};


const Slide = ({
  imageUrl,
  title,
  title1,desc,button,imageUrl1
}: featuresDataProps) => {
  return (
    <div className={styles.industries}>
      <div className={styles.industries_left_sec}>
     <div  className={styles.image}> <Image src={imageUrl1} alt={title} width={100} height={100}/></div>
        <h2 className={styles.heading}>{title1}</h2>
        <p className={styles.desc}>{desc}</p>
        <button className={styles.button}>{button}</button>
      </div>

      <div className={styles.industries_right_sec}>
       
        <Image src={imageUrl} alt={title} className={styles.card_image} width={550} height={550}/>
      </div>
    </div>
  );
};

export default Slide;