import express from 'express'
import { showPostsRouter } from './routes/show';
import { indexPostsRouter } from './routes';

const app = express();

app.use(express.json())

app.use(showPostsRouter)
app.use(indexPostsRouter)

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.all('*', async (req, res) => {
  res.status(404);
  res.send("Not Found")
})

export { app }
