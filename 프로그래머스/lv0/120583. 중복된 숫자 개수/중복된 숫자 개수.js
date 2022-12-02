function solution(array, n) {
    var answer=0;
    for(let x of array){
        if(x === n){
            answer += 1;
        }
    }
    return answer;
}
