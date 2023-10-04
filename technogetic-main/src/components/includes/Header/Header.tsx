import React, { useState } from 'react';
import './header.module.scss';
import Link from 'next/link';
import './header.module.scss';
import styles from './header.module.scss';
import Image from 'next/image';
import NavmenuData from '../../../data/navmenu.json';
import { RxCross2 } from 'react-icons/rx';
import { AiOutlineMenu } from 'react-icons/ai';

function Header() {
  const [toggle, setToggle] = useState(true);

  return (
    <>
      <div className={styles.container_lg}>
        <nav className={styles.NavbarItem}>
          {!toggle ?<Image
            className={styles.logo}
            src="./assets/logo.svg"
            width={70}
            height={70}
            alt="logo"
          />:<Image
          className={styles.logo}
          src="./assets/logo.svg"
          width={100}
          height={100}
          alt="logo"
        /> }
          
          <div className={styles.nav_div}>
            <ul className={styles.nav_menu}>
              {NavmenuData.map((element, index) => {
                return (
                  <li key={index} className={`${styles.nav_link} `}>
                    <Link className={styles.links} href={element.url}>
                      {element.title}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <span>
              <button className={styles.btn}>Learn more</button>
            </span>
          </div>

          {
            <div className={styles.menu_icons} onClick={() => setToggle(!toggle)}>
              {toggle ? (
                <AiOutlineMenu className={styles.bars} />
              ) : (
                <RxCross2 className={styles.cross} />
              )}
            </div>
          }
          
        </nav>

        
        {
          !toggle &&  <div className={styles.nav_div_toggle}>
          <ul className={styles.nav_menu}>
            {NavmenuData.map((element, index) => {
              return (
                <li key={index} className={`${styles.nav_link_toggle} `}>
                  <Link className={styles.links} href={element.url}>
                    {element.title}
                  </Link>
                </li>
              );
            })}
          </ul>

          
        </div>
        }
      </div>
    </>
  );
}

export default Header;
