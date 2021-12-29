function countEvens(nums){
  let len = nums.length;
  let count = 0;
  
  for(let i=0; i<len; i++)
  {
    if(nums[i]%2 == 0)
    count++;
  }
  return count;
}