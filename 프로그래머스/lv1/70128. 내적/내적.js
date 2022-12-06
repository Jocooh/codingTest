function solution(a, b) {
    let answer=0;
    for(let i = 0; i<a.length ; i++){
     let result = a[i]*b[i];
        answer += result;
    }
    return answer;
}