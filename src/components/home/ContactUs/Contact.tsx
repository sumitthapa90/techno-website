import React from 'react'
import form from '../../../data/form.json';
import styles from './contact.module.scss';
import SendMailForm from '@/components/Form/form';
import Image from 'next/image';
type Props = {}
const Contact = (props: Props ) => {
  return (
  <div className={styles.container} id="contact">
    <div className={styles.contact} data-aos="fade-up">
      <div className={styles.left_side}>
        <div className={styles.form_head}>
          <p>{form.heading}</p>
        </div>
        <div className={styles.main_text}>
        <SendMailForm/>
        </div>
      </div>
      <div className={styles.right_side}>
        <Image className={styles.right_side_img} src='./assets/contact-img.svg' alt='contact-img' width={415} height={495}></Image>
      </div>
    </div>
  </div>
  )
}
export default Contact;
