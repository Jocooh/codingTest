function solution(x) {
  let num= x.toString().split('').reduce((a,b)=>a+Number(b),0)
  if(x%num===0) return true
    else{return false}
}