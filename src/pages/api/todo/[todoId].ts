import prisma from 'lib/prisma';

const handle = async (request, response) => {
  const { todoId } = request.query;

  if (request.method === 'PATCH') {
    const { isDone } = request.body;

    const result = await prisma.todo.update({
      where: {
        id: parseInt(todoId),
      },
      data: {
        isDone,
      },
    });

    response.json(result);

    return;
  }

  if (request.method === 'DELETE') {
    const result = await prisma.todo.delete({
      where: {
        id: parseInt(todoId),
      },
    });

    response.json(result);

    return;
  }
};

export default handle;
