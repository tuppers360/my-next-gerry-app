import React from 'react';
import ContactForm from '../../components/contact-form';
import PageHeaderSection from '../../components/PageHeaderSection';
import Layout from '../../components/Layout';
import styles from './contact.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Contact() {
  return (
    <Layout title="Contact Us">
      <main>
        <PageHeaderSection
          title="Contact Us"
          heading="Get in contact and discover how we can help you"
        >
          <p>Below you will find a few ways to contact us</p>
        </PageHeaderSection>
        <div className={styles.content_section}>
          <div className={styles.container}>
            <div className={`${styles.contact_grid} ${styles.layout_grid}`}>
              <div className={styles.column}>
                <h3>Send us a message</h3>
                <div>
                  <ContactForm />
                </div>
              </div>
              <div className={styles.column}>
                <h3>
                  <span className={styles.margin}>
                    <FontAwesomeIcon icon="home" fixedWidth />
                  </span>
                  Get in touch
                </h3>
                <p>
                  We’re very approachable and would love to speak to you. Feel
                  free to call, send us an email, Tweet us or simply complete
                  the enquiry form.
                </p>
                <p>
                  <strong>Gerry Richardson Trust</strong>
                  <br />
                  Northdene,
                  <br />
                  Stoney Lane,
                  <br />
                  Hambleton,
                  <br />
                  Poulton-Le-Fylde,
                  <br />
                  FY6 9AF
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Contact;
