import factory from './utils'
import express from 'express'
const port = process.env.PORT || 3333
const app = express()

const factory1 = factory()
app.get('/', async (req, res) => {
  const result = await factory1.create('newFactory')
  res.send(result)
})

app.listen(port, () => console.info('app run'))

// await factory2.create("Factory2");
// await func();
// await clase.create("newClass");

// let c = 0;

// factory.create = async (): Promise<boolean> => {
//   c += 1;
//   console.log('new', c);
//   return true;
// };

// const factory2 = factory();

// const clase = new Clase();
