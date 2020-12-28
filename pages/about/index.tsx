import Layout from '../../components/Layout';
import PageHeaderSection from '../../components/PageHeaderSection';
import { Trustee } from './../../components/Trustee';

export default function About() {
  return (
    <Layout title="About | Gerry Richardson Trust">
      <main>
        <PageHeaderSection
          title="About Us"
          heading="Learn about why we do this"
        />
        <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8 lg:py-24">
          <section className="text-lg space-y-4">
            <h1 className="max-w-4xl mx-auto text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-900 text-4xl sm:text-6xl lg:text-7xl leading-snug font-extrabold tracking-tight mt-10 mb-8 sm:mt-4 sm:mb-10">
              Our History
            </h1>
            <p>
              On the 23rd August 1971 Superintendent Gerald Richardson was shot
              dead while attempting to arrest robbers involved in a raid on a
              Blackpool jewellers shop. Gerry was posthumously awarded the
              George Cross.
            </p>
            <p>
              At the time Gerry was a highly regarded member of the Blackpool
              North Rotary Club and much thought was given by his fellow members
              to ways in which his memory could be honoured and perpetuated.
            </p>
            <p>
              Gerry had a passion for youth work and shortly before his death he
              had been a prime mover in raising a considerable sum of money to
              acquire Snows Heights in the Lake District for use as a centre for
              young people of Blackpool and the Fylde.
            </p>
            <p>
              Gerry’s Rotarian colleagues decided to set up a trust in 1974 to
              expand the work which Gerry had been so dedicated. In over 40
              years of existence through hard work by the Club, generous gifts
              and shrewd investment the Trust has become a major youth charity.
            </p>
            <p>
              The Trust has generated sufficient sums to pursue its objectives
              and since it was set up, nearly 19000 young people – many of them
              with special needs – have been helped to pursue interests and
              activities, both of physical and cultural character which they
              have found fulfilling and life and career enhancing.
            </p>
            <p>
              In the process of support these young people the Trust has handed
              out grants totalling nearly £350,000.
            </p>
            <p>
              His legacy continues today through the enthusiasm of the existing
              and past Trustees.
            </p>
            <p>
              One of the highlights of the year is the Annual Special Needs
              Music Festival for pupils of the six Special School in Blackpool,
              Wyre ad Fylde Boroughs. The concerts are both inspirational and
              humbling and the performers are very talented young children. We
              would like to thank the Harrison Family of Ribby Hall Village,
              Wrea Green for the splendid facilities provided.
            </p>
          </section>

          <section className="bg-white">
            <div className="">
              <div className="text-center">
                <h1 className="max-w-4xl mx-auto bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-900 text-4xl sm:text-6xl lg:text-7xl leading-snug font-extrabold tracking-tight mt-10 mb-16 sm:mt-14 sm:mb-10">
                  Meet our team ready to help young people accross the fylde
                </h1>
                <ul className="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:grid-cols-3 lg:max-w-5xl">
                  <li>
                    <Trustee
                      image="/images/lee_wilson.jpg"
                      name="Lee Wilson"
                      position="Chair"
                    />
                  </li>
                  <li>
                    <Trustee
                      image="/images/chris_hardy.jpg"
                      name="Chris Hardy"
                      position="Trustee / Compere"
                    />
                  </li>
                  <li>
                    <Trustee
                      image="/images/claire_goss.jpg"
                      name="Claire van Deurs Goss"
                      position="Trustee"
                    />
                  </li>
                  <li>
                    <Trustee
                      image="/images/david_williamson.jpg"
                      name="David Williamson"
                      position="Treasurer / Trustee"
                    />
                  </li>
                  <li>
                    <Trustee
                      image="/images/sample4.jpg"
                      name="Gareth Tupman"
                      position="Trustee"
                    />
                  </li>
                  <li>
                    <Trustee
                      image="/images/sample2.jpg"
                      name="Susannah Clarke"
                      position="Trustee"
                    />
                  </li>
                  <li>
                    <Trustee
                      image="/images/sample6.jpg"
                      name="Jacqueline Longdon BEM"
                      position="Trustee"
                    />
                  </li>
                  <li>
                    <Trustee
                      image="/images/sample7.jpg"
                      name="Sarah Longden"
                      position="Trustee"
                    />
                  </li>
                  <li>
                    <Trustee
                      image="/images/chris_pickard.jpg"
                      name="Christine Pickard"
                      position="Trustee"
                    />
                  </li>
                  <li>
                    <Trustee
                      image="/images/john_pickard.jpg"
                      name="John Pickard"
                      position="Trustee"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}
