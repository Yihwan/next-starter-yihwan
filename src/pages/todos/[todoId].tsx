import { useState } from 'react';
import Head from 'next/head';
import Router from 'next/router';

import prisma from 'lib/prisma';
import Layout from 'components/layout';

const Todo = ({ todo }) => {
  const [isDone, setIsDone] = useState(todo.isDone);

  const toggleDone = async () => {
    try {
      await fetch(`/api/todo/${todo.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isDone: !isDone }),
      });

      setIsDone((prevState) => !prevState);

      await Router.reload();
    } catch (error) {
      alert(error);
    }
  };

  const handleDelete = async () => {
    try {
      await fetch(`/api/todo/${todo.id}`, {
        method: 'DELETE',
      });

      await Router.push('/todos');
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <Head>
        <title>Todos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <h1>Todo: {todo.title}</h1>
        <pre>{JSON.stringify(todo, null, 4)}</pre>
        <button onClick={toggleDone}>
          {isDone ? 'Mark Undone' : 'Mark Done'}
        </button>
        <button onClick={handleDelete}>Delete Todo</button>
      </Layout>
    </>
  );
};

export const getServerSideProps = async ({ params: { todoId } }) => {
  const todo = await prisma.todo.findUnique({
    where: {
      id: parseInt(todoId),
    },
  });

  return { props: { todo } };
};
export default Todo;
