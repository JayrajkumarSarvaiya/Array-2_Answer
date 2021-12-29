function more14(nums){
  let len = nums.length;
  let count1 = 0;
  let count4 = 0;
  
  for(let i=0 ; i<len; i++)
  {
    if(nums[i] == 1)
    {
      count1++
    }
    else if(nums[i] == 4)
    {
      count4++;
    }
  }
  if(count1>count4)
    return true;
  else
    return false;
}