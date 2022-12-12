function solution(array) { 
   let  newArr=array.sort(function (a,b){return a-b})
    let answer=(Math.round(newArr.length/2))-1
   return newArr[answer]
}
//length의 수에서 반올림한 수가 인덱스 번호가 되고 그 자리에 해당하는 값이 나오면 된다.
//오름차순을 구현하기 위해서 

