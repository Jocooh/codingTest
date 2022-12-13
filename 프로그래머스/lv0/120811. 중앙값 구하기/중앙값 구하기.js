function solution(array) {
   let newArr = array.sort(function(a,b){return a-b});
    let index=Math.floor(newArr.length / 2)
    return newArr[index]
    }