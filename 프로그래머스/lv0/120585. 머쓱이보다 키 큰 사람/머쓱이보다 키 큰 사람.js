let result=0;
function solution(array, height) {
    for(let x of array){
         if(x>height){
            result +=1;
         }
     }return result
}