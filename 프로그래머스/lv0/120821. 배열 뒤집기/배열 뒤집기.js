function solution(num_list) {
    var answer = [];
    for(let i=num_list.length-1;i>=0;i--){
        answer.push(num_list[i]);
    }
    return answer;
}
//1.i= num_list.length를 -1로주고 반대로 뒤집어본다.