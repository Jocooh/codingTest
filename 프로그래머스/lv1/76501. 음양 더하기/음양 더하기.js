function solution(absolutes, signs) {
    return absolutes.reduce((a,s,i)=>a+(s*(signs[i]?1:-1)),0) 
};