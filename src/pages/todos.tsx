import Head from 'next/head';
import { PrismaClient } from '@prisma/client';

import Layout from 'components/layout';

const Todos = ({ todos }) => (
  <>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Layout>
      <h1>Todos</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </Layout>
  </>
);

export async function getStaticProps() {
  const prisma = new PrismaClient();
  const todos = await prisma.todo.findMany({
    select: {
      id: true,
      title: true,
    },
  });

  return {
    props: { todos },
  };
}

export default Todos;
