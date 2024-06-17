// fibonacci using iteration
const fibs = (n) => {
  if (n === 0) {
    return [];
  } else if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [1];
  }
  const array = [0, 1];
  for (i = 2; i < n; i++) {
    array.push(array[i - 2] + array[i - 1]);
  }
  return array;
};

//fibonacci using recursion
function fib(n) {
  function fibHelper(num) {
    if (num === 0) return 0;
    if (num === 1) return 1;
    return fibHelper(num - 1) + fibHelper(num - 2);
  }

  let fibArray = [];
  for (let i = 0; i < n; i++) {
    fibArray.push(fibHelper(i));
  }

  return fibArray;
}

console.log(fibs(8));
console.log(fib(8));
