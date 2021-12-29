function sum67(nums){
  let result = 0;
  let noSum = false;
  
  for (let i = 0; i<nums.length;i++)
  {
    if (nums[i]==6) 
      noSum=true;
    if (!noSum) 
      result= result +nums[i];
    if(nums[i]==7) 
      noSum=false;
  }
  return result;
}