function bigDiff(nums){
  const min = Math.min.apply(Math, nums);
  const max = Math.max.apply(Math, nums);
  
  let result = max - min;
  return result;
}