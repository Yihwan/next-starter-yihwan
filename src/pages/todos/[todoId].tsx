import Head from 'next/head';
import { useRouter } from 'next/router';

import Layout from 'components/layout';

const Post = () => {
  const router = useRouter();
  const { todoId } = router.query;

  return (
    <>
      <Head>
        <title>Todos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <h1>Todo: {todoId}</h1>
      </Layout>
    </>
  );
};

export default Post;
