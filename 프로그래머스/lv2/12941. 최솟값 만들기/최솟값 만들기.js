function solution(a,b){
   var answer = 0;
   let Aarr = a.sort((a,b)=>a-b)
   let Barr = b.sort((a,b)=>b-a)
   for(let i= 0;i<a.length;i++){
    answer+=Aarr[i]*Barr[i]
  }
    return answer;
}