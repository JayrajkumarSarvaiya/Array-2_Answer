function centeredAverage(nums){
  const min = Math.min.apply(Math, nums);
  const max = Math.max.apply(Math, nums);
  let sum =0;
  let count = 0;
  
  for(let i=0; i<nums.length; i++)
  {
    sum = sum + nums[i];
    count ++;
  }
  return ((sum - max - min)/(count-2));
}