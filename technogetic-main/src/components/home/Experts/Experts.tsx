import styles from './experts.module.scss';
import ExpertsData from '../../../data/experts.json';
import contactData from '../../../data/contact.json';
import React from 'react';
import Circle from '@/Svg_icons/Circle';
import LeftCircle from '@/Svg_icons/LeftCircle';
import MessageIcon from '@/Svg_icons/MessageIcon';
import Ellipse from '@/Svg_icons/Ellipse';
import LinkedinIcon from '../../../Svg_icons/LinkedinIcon';
import SmallEllipse from '@/Svg_icons/SmallEllipse';
import TransperentCircle from '@/Svg_icons/TransperentCircle';
import Location from '@/Svg_icons/Location';
import CallIcon from '@/Svg_icons/CallIcon';
import GrayEllipse from '@/Svg_icons/GrayEllipse';
import ImgHover from '@/Svg_icons/ImgHover';
import Australia from '@/Svg_icons/Australia';
import UsaFlag from '@/Svg_icons/UsaFlag';
import IndianFlag from '@/Svg_icons/IndianFlag';
import Email from '@/Svg_icons/Email';

type Props = {};

const Experts = (props: Props) => {
  return (
    <div className={styles.color}>
      <div className={styles.container}>
        <div className={styles.titles}>
        <div className={styles.container_head_sec} data-aos="fade-down">
          <h2 className={styles.heading_sec}>{ExpertsData.title}</h2>
          <p className={styles.para}>{ExpertsData.desc}</p>
        </div>
        </div>
        

        <div className={styles.container_experts}>
          <div className={styles.combine}>
            <div className={styles.box}>
              <div className={styles.expertImg_Half}>
                <Circle />
              </div>

              <div className={styles.gradient}>
                <div className={styles.linear_gradient}>
                  <div className={styles.expertImg} >
                    <ImgHover img={'./assets/CTO.svg'}  />
                  </div>
                </div>
              </div>
              <h3 data-aos="fade-left" className={styles.name}>{ExpertsData.CTO} </h3>
              <h4 data-aos="fade-left" className={styles.post}>{ExpertsData.Desination1}</h4>
            </div>

            <div className={styles.box}>
              <div className={styles.linear_gradient}>
                <div className={styles.linear_gradient_absolute}></div>

                <div className={styles.expertImg} data-aos="fade-up" >
                  <ImgHover img={'./assets/CEO.svg'} />
                </div>
              </div>

              <h3 data-aos="fade-right" className={styles.name}>{ExpertsData.CEO}</h3>
              <h4 data-aos="fade-right" className={styles.post}>{ExpertsData.Desination2}</h4>
            </div>
          </div>
        </div>

        <div className={styles.container_contact } data-aos="fade-up">
          <div className={styles.ellipse_contact}>
            <LeftCircle />
          </div>

          <div className={styles.contact_left} data-aos="fade-up">
            <div className={styles.contact_big}>
              <div className={styles.mail_div}>
                <div className={styles.ellipse_contact}>
                  <MessageIcon />
                </div>

                <div className={styles.ellipse_outer_small}>
                  <Ellipse />
                </div>
              </div>

              <div className={styles.linkedIn_div}>
                <div className={styles.ellipse_contact_linkedin}>
                  <LinkedinIcon />
                </div>

                <div className={styles.ellipse_outer_Link}>
                  <SmallEllipse />
                </div>
              </div>

              <div className={styles.ellipse_contact_transparent_Div}>
                <TransperentCircle />
              </div>

              <div className={styles.contact_medium}>
                <div className={styles.contact_location_div}>
                  <div className={styles.ellipse_contact_location_Div}>
                    <Location />
                  </div>
                </div>

                <div className={styles.contact_small}>
                  <div className={styles.contact_call_div}>
                    <div className={styles.ellipse_contact_call_img}>
                      <CallIcon />
                    </div>

                    <div className={styles.ellipse_contact_center}>
                      <SmallEllipse />
                    </div>

                    <div className={styles.ellipse_contact_gray_img}>
                      <GrayEllipse />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.contact_right} data-aos="fade-up">
            <div className={styles.content}>
              <div className={styles.content__container}>
                <ul className={styles.content__container__list}>
                  {contactData.map((element, index) => {
                    return (
                      <div key={index} className={styles.content_div}>
                        <h3 className={styles.contactUs}> {element.heading}</h3>
                        <h3 className={styles.contactSubHead}>{element.title}</h3>

                        <h3 className={styles.contactSubPara}>{element.description}</h3>
                        {element.phone && <li className={styles.phone}><Australia/> {element.phone}</li>}
                        {element.phone1 && <li className={styles.phone}> <UsaFlag/>{element.phone1}</li>}
                        {element.phone2 && <li className={styles.phone}><IndianFlag/>{element.phone2}</li>}
                        {element.email && <li className={styles.phone}><Email/>{element.email}</li>}
                        {element.email1 && <li className={styles.phone}><Email/>{element.email1}</li>}
                        {element.email2 && <li className={styles.phone}><Email/>{element.email2}</li>}
                        {element.address && <li className={styles.phone}><Australia/>{element.address}</li>}
                        {element.address1 && <li className={styles.phone}><UsaFlag/>{element.address1}</li>}
                        {element.button && (
                          <button className={styles.dark_btn}>{element.button}</button>
                        )}
                      </div>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experts;
