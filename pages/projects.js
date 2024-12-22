// pages/portfolio.js
import Head from 'next/head';
import Header from '../components/Header';
import Projects from '../components/Projects';

const PortfolioPage = () => {
  return (
    <>
      <Head>
        <title>Claude Bejjani - Web Developer - Portfolio</title>
        <meta name="description" content="Portfolio page" />
      </Head>
      <Header />
      <Projects />
    </>
  );
};

export default PortfolioPage;
