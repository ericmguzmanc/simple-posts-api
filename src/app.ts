import express from 'express';
import { PostsRouter } from './routes/post';
import { UsersRouter } from './routes/user';

const app = express();

app.use(express.json());

app.use('/posts', PostsRouter);
app.use('/users', UsersRouter);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.all('*', async (req, res) => {
  res.status(404);
  res.send('Not Found');
});

export { app };
