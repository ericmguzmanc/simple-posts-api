import express from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const userClient = new PrismaClient().user;

// get all users
router.get('/', async (req, res) => {
  try {
    const users = await userClient.findMany({
      include: {
        posts: true,
      },
    });

    res.status(200).json({ data: users });
  } catch (e) {
    console.log(e);
  }
});

// TODO: get user by id
// TODO: create user
router.post('/', async (req, res) => {
  try {
    const userData = req.body;
    const dateOfBirth = new Date(req.body.dateOfBirth).toISOString();
    const user = await userClient.create({
      data: {
        ...userData,
        dateOfBirth
      },
    });

    res.status(201).json({ data: user });
  } catch (e) {
    console.log(e);
  }
});

// TODO: update user
// TODO: delete user

export { router as UsersRouter };
