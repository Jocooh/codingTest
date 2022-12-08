function solution(sides) {
   let num = Math.max(...sides)
   let sum = sides.reduce((a,b)=>a+b)-num;    
   if(sum-num>0){return 1}
    return 2
}



//[1,2,3]