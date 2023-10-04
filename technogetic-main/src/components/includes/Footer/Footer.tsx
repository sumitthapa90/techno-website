import Link from 'next/link';
import styles from './footer.module.scss';
import React from 'react';
import Image from 'next/image';
import LinkedinIcon from '@/Svg_icons/LinkedinIcon';
import Twitter from '@/Svg_icons/Twitter';
import Instagram from '@/Svg_icons/Instagram';
import footerData from '../../../data/footer.json';
import Facebook from '@/Svg_icons/Facebook';


const socialMediaLinks = [
  { href: 'https://www.linkedin.com/company/technogetic/', icon: <LinkedinIcon /> },
  { href: '/', icon: <Twitter /> },
  { href: '/', icon: <Instagram /> },
  { href: 'https://www.facebook.com/profile.php?id=100071705236676', icon: <Facebook /> }
];
function Footer() {
  return (
    <div className={styles.footer} data-aos="fade-up">
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.logo}>
            <div>
              <ul>
                <li>
                  <Image
                    src="./assets/logo.svg"
                    className={styles.logo_img}
                    alt="img"
                    width={120}
                    height={50}
                  />
                </li>
                <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
              </ul>
            </div>
            <div className={styles.links}>
              <ul>
                {socialMediaLinks.map(({ href, icon }) => (
                  <li key={href}>
                    <Link className={styles.icons} href={href}>
                      {icon}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={styles.company}>
            <p> Company</p>
            <ul>
              {footerData.company.map((elm, index) => {
                return <li key={index}>{elm.label}</li>;
              })}
            </ul>
          </div>
          <div className={styles.service}>
            <p> Services</p>
            <ul>
              {footerData.Services.map((elm, index) => {
                return <li key={index}>{elm.label}</li>;
              })}
            </ul>
          </div>
          <div className={styles.contact}>
            <p> Contact</p>
            <ul>
              {footerData.contacts.map((elm, index) => {
                return <li key={index}>{elm.label}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>Copyright © Technogetic All Right Reserved.</p>
        <button className={styles.arrow_button}>
          <Link href="#">
            <Image src="./assets/Arrow-button.svg" className={styles.arrow_image} alt="img" width={60} height={60} />
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Footer;
