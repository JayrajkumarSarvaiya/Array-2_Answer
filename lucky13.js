function lucky13(nums){
  let len = nums.length;
  for(let i=0; i<len; i++)
  {
    if(nums[i]==1 || nums[i]==3)
    {
      return false;
    }
  }
  return true;
}