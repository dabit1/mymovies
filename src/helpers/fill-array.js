const fillArray = (length, callback) => {
  const array = [];

  for (let i = 0; i < length; i += 1) {
    array.push(callback(i));
  }

  return array;
};

export default fillArray;
