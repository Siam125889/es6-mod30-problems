const arr = (numbers) => {
  let sum = 0;
  for (const num of numbers) {
    let sq = num ** 2;
    sum = sum + sq;
  }
  return sum / numbers.length;
};

const nums = [2, 3, 4, 5, 3, 4];
console.log(arr(nums));
