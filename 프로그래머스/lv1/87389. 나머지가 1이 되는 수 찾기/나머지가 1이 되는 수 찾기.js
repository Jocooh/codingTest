function solution(n) {
   let answer;
    let tmp=[]
    for(let i = 2 ; i<=n;i++){
        if(n%i===1)tmp.push(i)
    }
     answer = Math.min(...tmp)
    return answer
}


