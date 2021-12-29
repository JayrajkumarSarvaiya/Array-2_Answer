function only14(nums){
  let len = nums.length;
  
  for(let i=0; i<len; i++)
  {
    if(nums[i] != 1 && nums[i] !=4)
      return false;
  }
  return true;
}