import Head from 'next/head';
import Link from 'next/link';
import { PrismaClient } from '@prisma/client';

import Layout from 'components/layout';

const Todos = ({ todos }) => (
  <>
    <Head>
      <title>Todos</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Layout>
      <h1>Todos</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <Link href={`todos/${todo.id}/`}>{todo.title}</Link>
          </li>
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
