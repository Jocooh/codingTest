function solution(n){  
 var answer = n.toString().split('').reduce((a,b)=>(a += parseInt(b)),0);
   return answer
    console.log(answer) 
}