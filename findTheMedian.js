function findTheMedian(nums){
  let len = nums.length;
  let result;
  let half = Math.floor(len/2);
  if(len%2 != 0)
  {
    result = nums[half];
  }
  else
  {
    result = (nums[half-1] + nums[half])/2;
  }
  return result;
}