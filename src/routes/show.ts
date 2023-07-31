import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/api/posts/:id', async (req: Request, res: Response) => {
  res.send([
    {
      title: 'First Post',
      content: 'This is the first post of this api.',
      date: '07/31/2023',
    },
  ]);
});

export { router as showPostsRouter };
