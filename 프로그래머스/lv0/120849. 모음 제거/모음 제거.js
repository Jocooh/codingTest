function solution(my_string) {
    let arr = new Set (["i","e","o","u","a"])
    var answer = '';
    for(let x of my_string){
        if(!arr.has(x)){answer += x}
    }
    return answer;
}
//i,o,e,u,a