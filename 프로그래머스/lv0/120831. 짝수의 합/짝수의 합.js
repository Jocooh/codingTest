const num = [];
function solution(n) {
    for(let i =0 ; i<=n ; i++){
        if(i%2===0){
        num.push(i);
        }
    }const sum= num.reduce((accum,current)=>accum+current)
    return sum;
};

//1.n을 for문으로 한번 돌린다
//2.그 안에서 나온 인수값들 중 나누기 2했을 떄  0 인 친구들을 모은다
//3.모아서 배열에 넣는다 
//4.reduce를 사용해서 다 합한다.