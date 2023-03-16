function solution ( x,n){
    let answer = [];
    let add_gap =x;
    
    for(let i =0 ; i <n; i++){
        answer.push(x);
        x += add_gap;
    }return answer;
}