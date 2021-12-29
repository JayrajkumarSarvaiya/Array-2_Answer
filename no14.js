function no14(nums){
  let len = nums.length;
  let one = false;
  let four = false;
  
  for(let i=0; i<len; i++)
  {
    if(nums[i] == 1)
    {
      one = true;
    }
    if(nums[i] == 4)
    {
      four = true;
    }
  }
  return !(one&&four);
}