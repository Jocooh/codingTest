function solution(money) {
    if(money >0) {
        let i = parseInt(money/5500);
        let j = money-(5500*i);
        let result=[i, j]
        return result;
    }
}