function has77(nums){
  let len = nums.length;
  
  for(let i=0; i<len; i++)
  {
   if(nums[i]==7 && (nums[i+1]==7 || (i<len-2&&nums[i+2]==7))) 
     return true;
  }
  return false;
}