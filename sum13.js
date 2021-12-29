function sum13(nums){
  let len = nums.length;
  let sum = 0;
  
  for(let i=0; i<len; i++)
  {
    if(nums[i]!=13)
    {
      sum = sum + nums[i];
    }
    else if(nums[i]==13 && i<len-1)
    {
      nums[i] =0;
      nums[i+1]=0;
    }
  }
  return sum;
}