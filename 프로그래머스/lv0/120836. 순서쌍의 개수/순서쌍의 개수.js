function solution(n) {
    let answer = 0;
    for(let i = 2 ; i<=n ; i++){
        if(n%i===0){answer++}
    }return answer +1
}
// 나누기 시 나머지가 0인 친구들을 가져오면된다.