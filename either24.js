function either24(nums){
  let len = nums.length;
  let ans1 = false;
  let ans2 = false;
  
  for(let i=0; i<len; i++)
  {
    if(nums[i] == 2 && nums[i+1] == 2)
    {
      ans1 = true;
    }
    if(nums[i] == 4 && nums[i+1] == 4)
    {
      ans2 = true;
    }
  }
  if(ans1 != ans2)
    return true;
  else
    return false;
}