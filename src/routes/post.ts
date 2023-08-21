import express from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const postsClient = new PrismaClient().post;

// get Posts
router.get('/', async (req, res) => {
  try {
    const posts = await postsClient.findMany({
      include: {
        comments: true,
        user: true,
      },
    });

    res.status(200).json({ data: posts });
  } catch (e) {
    console.log(e);
  }
});

// TODO: get post by id
// TODO: create post


// TODO: update post
// TODO: delete post

export { router as PostsRouter };