import express from 'express';

const app = express();

app.use(express.json());

app.listen(3000, (): void => {
  console.log('Hello world, Im new server');
});
