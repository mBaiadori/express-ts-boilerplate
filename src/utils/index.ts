export const func = async (): Promise<boolean> => {
  let f = 0;
  f += 1;
  console.log('func', f);
  return true;
};

const factory = () => {
  const remove = async (): Promise<boolean> => {
    let r = 0;
    r += 1;
    console.log('remove', r);
    return true;
  };
  const create = async (): Promise<boolean> => {
    let c = 0;
    c += 1;
    console.log('create', c);
    return true;
  };
  return {
    remove,
    create
  };
};

export default factory();
