import React from 'react';
import styles from './homepageheader.module.scss';

function HomePageHeader() {
  return (
    <section className={styles.banner_area}>
      <div className={styles.banner_img}></div>
      <div className="inner">
        <h1>Flexbox Website</h1>
        <h3>Responsive Web Design</h3>
        <a href="#" className={styles.banner_button}>
          Contact Us
        </a>
      </div>
    </section>
  );
}

export default HomePageHeader;