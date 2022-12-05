function solution(num_list) {
    let odd=0,even=0
    let answer=[];
  for(let x of num_list){
      if(x%2===0){even++}
      else{odd++};
  } answer.push(even,odd)
    return answer
}


//일단 누적할 변수 2개 있어야된다.(짝수,홀수)
//그 두 개를 answer 배열에다가 담는다.
//일단filter 써서 짝수면 이쪽에다가 아니면 홀수에다가로 넣어주자


