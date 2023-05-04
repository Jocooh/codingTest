function solution(s) {
    let arr = s.split(' ');
   
    let numArr = arr.map(e=> parseInt(e)).sort((a,b)=> a-b);

    return `${numArr[0].toString()} ${numArr[numArr.length-1].toString()}`

}

//