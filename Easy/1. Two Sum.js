/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) 
{
     for(var i=0; i<nums.length; i++)
         {
             for(var index=i+1;index < nums.length; index++ )
                 {
                     if(nums[i]+nums[index]==target)
                         {
                             return [i,index];
                         }
                 }
             
         }
    return "no match found";
};
var nums=[3,2,3,3,2];
console.log(twoSum(nums,7));
