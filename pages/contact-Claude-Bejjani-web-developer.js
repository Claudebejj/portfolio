// pages/index.js
import Head from 'next/head';
import Header from '../components/Header';
import Portfolio from '../components/Projects';

const Home = () => {
  return (
    <>
      <Head>
        <title>Claude Bejjani - Full-Stack developer (MERN)</title>
        <meta name="description" content="Your portfolio website" />
      </Head>
      <Header />

Contact form goes here
    </>
  );
};

export default Home;
