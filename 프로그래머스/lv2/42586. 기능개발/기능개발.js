function solution(progresses, speeds) {
 let answer=[];
    //map을 돌려서 하나마다 필요한 날짜를 나오게 하자
 let tmp = progresses.map((v,i)=>Math.ceil((100-v)/speeds[i]))
 let cnt = 1;
 let day = [...tmp]
while(tmp.length>0){
    for(let i =1;i<tmp.length;i++){
        if(tmp[0]>=tmp[i]){
            cnt++;
            day.shift();
        }else break
    }
    answer.push(cnt)
    cnt=1;
    day.shift()
    tmp=[...day]
}
return answer
}