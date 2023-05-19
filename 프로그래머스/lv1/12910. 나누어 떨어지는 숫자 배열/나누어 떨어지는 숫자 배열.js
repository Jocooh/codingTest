function solution(arr, divisor) {
  let answer=[];
  let cnt=0;
  for(let x of arr){
      if(x%divisor===0) {
      answer.push(x);
      answer.sort((a,b)=>a-b);
      cnt++;
      }
  }
    if(cnt===0) answer.push(-1)
    return answer
}