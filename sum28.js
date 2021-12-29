function sum28(nums){
  let len = nums.length;
  let sum =0;
  
  for(let i=0; i<len; i++)
  {
    if(nums[i] == 2)
    {
      sum = sum + 2;
    }
  }
  if(sum == 8)
    return true;
  else
    return false;
}