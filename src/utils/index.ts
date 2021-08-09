let f = 0
export const func = async (): Promise<boolean> => {
  f++
  console.log('func', f)
  return true
}

const factory = () => {
  let r = 0
  const remove = async (): Promise<boolean> => {
    r++
    console.log('remove', r)
    return true
  }
  let c = 0
  const create = async (v: string): Promise<string> => {
    c++
    console.log(v, c)
    return v
  }
  return {
    remove,
    create
  }
}

export class Clase {
  c = 0
  async create(v) {
    this.c++
    console.log(v, this.c)
  }
}

// const r = factory();
const r = new Clase()

// setInterval(() => {
//   r.create('clase');
// }, 2000)

// setInterval(() => {
//   func();
// }, 2000)

export default factory
