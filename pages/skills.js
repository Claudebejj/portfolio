// pages/about.js
import Head from 'next/head';
import Header from '../components/Header';
import Skills from '../components/Skills';
const AboutPage = () => {
  return (
    <>
      <Head>
        <title>Claude Bejjani - My Technical Skills</title>
        <meta name="description" content="About me page" />
      </Head>
      <Header />
<Skills/>
    </>
  );
};

export default AboutPage;
