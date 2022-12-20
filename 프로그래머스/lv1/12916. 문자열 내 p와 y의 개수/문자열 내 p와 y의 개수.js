function solution(s){
    let a = s.toUpperCase().split('P').length
    let b = s.toUpperCase().split('Y').length
    return a===b?true:false
}