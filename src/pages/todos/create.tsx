import Head from 'next/head';
import { PrismaClient } from '@prisma/client';

import Layout from 'components/layout';

const CreateTodo = () => (
  <>
    <Head>
      <title>Todos</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Layout>
      <h1>Create Todo</h1>
    </Layout>
  </>
);

export default CreateTodo;
