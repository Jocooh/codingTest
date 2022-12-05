function solution(n, numlist) {
    var answer = [];
    for(let x of numlist){
        if(x%n ===0){
            answer.push(x);
        }
    }return answer;
}