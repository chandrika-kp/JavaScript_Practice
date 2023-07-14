let num=[1,5,4,2,8]
function getSecondLargest(nums) {
    // Complete the function
    let lar=nums[0]
    let small=nums[0]
    for(let i=0;i<=nums.length-1;i++){
        if( lar < nums[i] ){
               lar =  nums[i] 
        }
    }
    for(let i=0;i<=nums.length-1;i++){
        if( (small < nums[i]) && (nums[i] < lar) ){
               small =  nums[i] 
        }
    }
    return small
  }
   let x= getSecondLargest(num)
   console.log(x)