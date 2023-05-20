function solution(citations) {
    var answer = 0;
    citations.sort((a,b)=>(b-a)) //6,5,3,1,0

    for(var i=0; i<citations.length; i++){
        if (i < citations[i]){
            answer +=1;
        }
    }
    return answer;
}
