function solution(my_string, letter) {
    let num
    let result=[];
    var answer=my_string.split("");
    for(let x of answer){
       if(x!==letter) result.push(x)
         num = result.toString()
    } return num.split(',').join("")
    
    }
   

//1.split로 배열을 만들고 letter가 같은지 if문 으로 확인한다.
//2.그리고 filter를 통해서 그 문자를 제외한 배열을 만든다
//3.join을 사용해서 문자열로 만들어준다 + string()
//const number = numberStr.replace(",", "");
//document.write(number);