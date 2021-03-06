import * as config from 'config';

import Container from 'components/Container';
import { NextPage } from 'next';
import PageHeaderSection from 'components/PageHeaderSection';
import { fetchGetJSON } from 'utils/api-helpers';
import { formatAmountForDisplayForStripe } from 'utils/stripe-helpers';
import { useRouter } from 'next/router';
import useSWR from 'swr';

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
    <Container title="Donation Made - The Gerry Richardson Trust">
      <PageHeaderSection
        title="Congratulations"
        heading="Your Donation has been authorised"
      >
        {data && (
          <h2 className="text-2xl lg:max-w-3xl mx-auto lg:px-8 leading-relaxed">
            You have donated&nbsp;
            {formatAmountForDisplayForStripe(
              data.amount_subtotal,
              config.CURRENCY
            )}
            &nbsp;to help the local youths of Blackpool, Fylde and Wyre 💖
          </h2>
        )}
      </PageHeaderSection>
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-4xl lg:px-8 mt-8">
        <h2 className="text-xl font-medium leading-relaxed">
          Thank you for your generous gift to the Gerry Richardson Trust.
        </h2>
        <p className="text-lg mt-4">We are thrilled to have your support.</p>
        <p className="text-lg mt-4">
          Through your donation we will be able to accomplish our goal of
          supporting young people, aged 25 or under, to attend courses and
          activities of an educational, cultural, sporting, adventuresome or
          character-building nature.
        </p>
        <p className="text-lg mt-4">
          You truly make the difference for us, and we are extremely grateful!
        </p>
        <p className="text-lg mt-4">Yours</p>
        <h3 className="text-lg font-semibold mt-4">The Trustees</h3>
      </div>
    </Container>
  );
};

export default ResultPage;
