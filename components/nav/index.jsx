import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaFingerprint } from 'react-icons/fa';
import styles from './nav.module.scss';

function Nav() {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav className={styles.navbar}>
      <ul className={styles.menu}>
        <li className={styles.logo}>
          <Link href="/">
            <a>
              <span>
                <FaFingerprint className={styles.react_icons} />
              </span>
              Gerry Richardson
            </a>
          </Link>
        </li>
        <li
          className={
            isActive
              ? `${styles.nav_item} ${styles.active}`
              : `${styles.nav_item}`
          }
          onClick={() => setIsActive(!isActive)}
        >
          <Link href="/stories">Stories</Link>
        </li>
        <li
          className={
            isActive
              ? `${styles.nav_item} ${styles.active}`
              : `${styles.nav_item}`
          }
          onClick={() => setIsActive(!isActive)}
        >
          <Link href="/#">News (coming soon)</Link>
        </li>
        <li
          className={
            isActive
              ? `${styles.nav_item} ${styles.active}`
              : `${styles.nav_item}`
          }
          onClick={() => setIsActive(!isActive)}
        >
          <Link href="/about">About</Link>
        </li>
        <li
          className={
            isActive
              ? `${styles.nav_item} ${styles.active}`
              : `${styles.nav_item}`
          }
          onClick={() => setIsActive(!isActive)}
        >
          <Link href="/contact">Contact Us</Link>
        </li>
        <li className={`${styles.nav_item} ${styles.button} ${styles.donate}`}>
          <Link href="/donate">
            <a>Donate</a>
          </Link>
        </li>
        <li className={styles.toggle} onClick={() => setIsActive(!isActive)}>
          <span>
            <FaBars className={styles.react_icons} />
          </span>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
