import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/api/posts', async (req: Request, res: Response) => {
  console.log('Req -> ', req.url)
  res.send([
    {
      title: 'First Post',
      content: 'This is the first post of this api.',
      date: '07/31/2023',
    },
  ]);
});

export { router as indexPostsRouter }
