const fn = (arr1, arr2) => {
  const newArr = [...arr1, ...arr2];
  const arrMax = Math.max(...newArr);
  return arrMax;
};

const nums1 = [24, 21, 43, 54, 65, 43, 12];
const nums2 = [24, 21, 43, 54, 65, 43, 12, 77, 88];
console.log(fn(nums1, nums2));
