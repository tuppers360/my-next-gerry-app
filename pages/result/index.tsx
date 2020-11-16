import { NextPage } from 'next';
import { useRouter } from 'next/router';

import Layout from '../../components/layout';
import PrintObject from '../../components/printobject';

import { fetchGetJSON } from '../../utils/api-helpers';
import useSWR from 'swr';
import Header from '../../components/header';

const ResultPage: NextPage = () => {
  const router = useRouter();

  // Fetch CheckoutSession from static page via
  // https://nextjs.org/docs/basic-features/data-fetching#static-generation
  const { data, error } = useSWR(
    router.query.session_id ? `/api/stripe/${router.query.session_id}` : null,
    fetchGetJSON
  );

  if (error) return <div>failed to load</div>;

  return (
    <Layout title="Gerry Richardson Trust | Donation Made">
      <Header
        title="Congratulations"
        heading="Your Donation has been authorised"
        center
      >
        <p>
          You have donated NEED TO ADD AMOUNT to help the local youths of
          Blackpool, Fylde and Wyre 💖
        </p>
      </Header>
      <div className="container">
        <p>Thank you for your generous gift to the Gerry Richardson Trust.</p>
        <p>We are thrilled to have your support.</p>
        <p>
          Through your donation we will be able to accomplish our goal of
          supporting young people, aged 25 or under, to attend courses and
          activities of an educational, cultural, sporting, adventuresome or
          character-building nature.
        </p>
        <p>
          You truly make the difference for us, and we are extremely grateful!
        </p>
        <p>Yours</p>
        <p>The Trustees</p>
        <PrintObject content={data ?? 'loading...'} />
      </div>
    </Layout>
  );
};

export default ResultPage;
