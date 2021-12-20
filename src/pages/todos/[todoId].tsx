import Head from 'next/head';
import { PrismaClient } from '@prisma/client';

import Layout from 'components/layout';

const Post = ({ todo }) => (
  <>
    <Head>
      <title>Todos</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Layout>
      <h1>Todo: {todo.title}</h1>
      <pre>{JSON.stringify(todo, null, 4)}</pre>
    </Layout>
  </>
);

export const getServerSideProps = async ({ params: { todoId } }) => {
  const prisma = new PrismaClient();
  const todo = await prisma.todo.findUnique({
    where: {
      id: parseInt(todoId),
    },
  });

  return { props: { todo } };
};
export default Post;
