[1,2,3,1]
？不能够相邻的头
最多的钱？  4
1如果偷
2不能偷
3或1
      ABCD 动态规划算法
 选择A       不选择A
  CD         BCD
          B        CD



 
 每个位置中的最大的值决策是这样的？
 i=0  Math.max( , )?
 nums[1,2,3,1]
 dp[i]=Math.max(nums[i]+dp[i-2],dp[i-1])