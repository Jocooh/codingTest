function solution(numbers) {
    const sum = numbers.reduce((accumulator,currentNumber)=>accumulator+currentNumber)
    const result= sum/numbers.length;
    return result;
}