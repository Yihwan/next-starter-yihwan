import prisma from 'lib/prisma';

const handle = async (request, response) => {
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
};

export default handle;
