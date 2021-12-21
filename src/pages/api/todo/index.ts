import prisma from 'lib/prisma';

const handle = async (request, response) => {
  if (request.method === 'POST') {
    const { title, description } = request.body;

    const result = await prisma.todo.create({
      data: {
        title,
        description,
        isDone: false,
        createdAt: new Date(),
      },
    });

    response.json(result);

    return;
  }
};

export default handle;
