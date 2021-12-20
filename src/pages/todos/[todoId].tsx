import Head from 'next/head';

import prisma from 'lib/prisma';
import Layout from 'components/layout';

const Todo = ({ todo }) => (
  <>
    <Head>
      <title>Todos</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Layout>
      <h1>Todo: {todo.title}</h1>
      <pre>{JSON.stringify(todo, null, 4)}</pre>
      <button>Delete Todo</button>
    </Layout>
  </>
);

export const getServerSideProps = async ({ params: { todoId } }) => {
  const todo = await prisma.todo.findUnique({
    where: {
      id: parseInt(todoId),
    },
  });

  return { props: { todo } };
};
export default Todo;
