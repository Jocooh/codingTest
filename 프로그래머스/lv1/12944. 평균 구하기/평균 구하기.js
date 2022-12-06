function solution(arr) {
    answer=arr.reduce((a,b)=>a+b);
    result = answer/arr.length;
    return result
}