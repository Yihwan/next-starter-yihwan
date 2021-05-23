import Head from 'next/head';

import Layout from 'components/layout';

const Home = () => (
  <div className="container">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Layout>Home</Layout>
  </div>
);

export default Home;
