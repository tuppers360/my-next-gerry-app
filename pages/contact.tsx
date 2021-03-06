import ContactForm from '../components/ContactForm';
import Container from 'components/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PageHeaderSection from '../components/PageHeaderSection';
import React from 'react';

function Contact() {
  return (
    <Container title="Contact Us - The Gerry Richardson Trust">
      <PageHeaderSection
        title="Contact Us"
        heading="Get in contact and discover how we can help you"
      >
        <p>Below you will find a few ways to contact us</p>
      </PageHeaderSection>
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-5xl lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8">
          <section>
            <h3 className="text-xl font-medium text-gray-600 text-center">
              <FontAwesomeIcon icon="envelope" fixedWidth /> Get in touch
            </h3>
            <p className="mt-8 text-lg">
              We’re very approachable and would love to speak to you. You can
              use any of the following or our enquiry form.
            </p>
            <ul className="mt-8">
              <li className="mt-4">
                Call us -
                <span className="text-gray-800 font-semibold ml-1">
                  (01253) 700879
                </span>
              </li>
              <li className="mt-4">
                Send us an email -
                <a
                  href="mailto:contactus@gerryrichardsontrust.org"
                  className="text-gray-800 hover:text-gray-500 font-semibold ml-1"
                >
                  contactus@gerryrichardsontrust.org
                </a>
              </li>
              <li className="mt-4">
                Tweet us - <span className="sr-only">Twitter</span>
                <a
                  href="https://twitter.com/gerrytrust"
                  className="text-gray-800 hover:text-twitter font-semibold ml-1"
                >
                  @gerrytrust
                </a>
              </li>
              <li className="mt-4">
                Write to us -
                <p className="mt-4 text-lg">
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
              </li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-medium text-gray-600 text-center">
              <FontAwesomeIcon icon="edit" fixedWidth /> Send us a message
            </h2>
            <ContactForm />
          </section>
        </div>
      </div>
    </Container>
  );
}

export default Contact;
