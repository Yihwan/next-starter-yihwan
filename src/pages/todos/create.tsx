import Head from 'next/head';
import Router from 'next/router';
import { useState } from 'react';

import Layout from 'components/layout';

const CreateTodo = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const body = { title, description };

    try {
      await fetch('/api/todo/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
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
        <h1>Create Todo</h1>

        <form onSubmit={handleSubmit}>
          <input
            required
            type="text"
            placeholder="Title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />

          <input
            type="textarea"
            placeholder="Description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />

          <input type="submit" value="Create" />
        </form>
      </Layout>
    </>
  );
};
export default CreateTodo;
