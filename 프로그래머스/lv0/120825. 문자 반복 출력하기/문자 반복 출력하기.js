function solution(my_string, n) {
    let answer=my_string.split('').map((data)=>data.repeat(n)).join('')
    return answer
}
