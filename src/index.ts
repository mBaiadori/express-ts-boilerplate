import express from 'express';

import factory from '@/utils';

const app = express();

app.get('/', async () => {
  await factory.create();
  await factory.create();
});

app.listen(3333, () => console.info('app run'));
