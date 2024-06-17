const mergesort = (array) => {
  if (array.length < 2) {
    return array;
  }
  const mid = Math.floor(array.length / 2);
  const leftArr = array.slice(0, mid);
  const rightArr = array.slice(mid);
  return merge(mergesort(leftArr), mergesort(rightArr));
};

console.log(mergesort([3, 1, 6, 7]));
