import Header from "../components/Header/Header";
import Head from "next/head";
import FirstSection from "../components/FirstSection/FirstSection";
import SecondSection from "../components/SecondSection/SecondSection";
import ThirdSection from "../components/ThirdSection/ThirdSection";
import FourthSection from "../components/FourthSection/FourthSection";
import { Fragment } from "react";
import FifthSection from "../components/FifthSection/FifthSection";
import Testimonial from "../components/Testimonial/Testimonial";
import SixthSection from "../components/SixthSection/SixthSection";
import Register from "../components/Register/Register";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <Head>
        <title>Send money to anywhere in the world</title>
        <meta
          name="description"
          content="The fastest and easiest way to send money to anywhere in the world"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main>
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <FifthSection />
        <Register />
        <Testimonial />
        <SixthSection />
      </main>
      <Footer />
    </Fragment>
  );
};

export default Home;
