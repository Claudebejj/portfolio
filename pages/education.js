import Head from 'next/head';
import Header from '../components/Header';
import Education from '../components/Education';

const EducationPage = () => {
  return (
    <>
      <Head>
        <title>Your Name - About Me</title>
        <meta name="description" content="My Education" />
      </Head>
      <Header />
      <Education />
    </>
  );
};

export default EducationPage;
