// pages/about.js
import Head from 'next/head';
import Header from '../components/Header';
import About from '../components/About';

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>Your Name - About Me</title>
        <meta name="description" content="About me page" />
      </Head>
      <Header />
      <About />
    </>
  );
};

export default AboutPage;
