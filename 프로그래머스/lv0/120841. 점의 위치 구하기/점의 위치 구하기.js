function solution(dot) {
  let i = dot[0]>0? 1:0
  let j = dot[1]>0? 1:0   //1:+ 0:-
    if(i===1 && j===1){answer= 1}
    else if(i===1 && j===0){answer = 4}
    else if(i===0 && j===1){answer = 2}
    else{answer = 3}
   return answer 
}