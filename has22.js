function has22(nums){
  let len = nums.length;
  let ans = false;
  
  for(let i=0; i<len; i++)
  {
    if(nums[i] == 2 && nums[i+1] == 2)
    {
      ans = true;
    }
  }
  return ans;
}