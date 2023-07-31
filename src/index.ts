import { app } from './app';

const port = 3000;

const start = async () => {
  console.log('Starting...')

  try {
    // TODO: Init database
  } catch (err) {
    console.error(err)
  }

  app.listen(3000, () => {
    console.log(`Listening on port ${port}`);
  });
}

start();