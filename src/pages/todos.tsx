import Head from 'next/head';
import Link from 'next/link';

import prisma from 'lib/prisma';
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
            <Link href={`/todos/${todo.id}`}>{todo.title}</Link>
          </li>
        ))}
      </ul>
      <Link href={'/todos/create'}>Create Todo</Link>
    </Layout>
  </>
);

export const getStaticProps = async () => {
  const todos = await prisma.todo.findMany({
    select: {
      id: true,
      title: true,
    },
  });

  return {
    props: { todos },
  };
};

export default Todos;
