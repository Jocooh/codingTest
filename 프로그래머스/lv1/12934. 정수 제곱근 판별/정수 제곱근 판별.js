function solution(n) {
    let answer;
    let result = Math.sqrt(n) //제곱근
    if(!Number.isInteger(result))answer = -1
    else{
        answer = Math.pow(result+1, 2)
     }
    return answer
}