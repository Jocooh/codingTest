function solution(n) {
  let answer = '';
  for (let i = 0; i < n; i++) {
    //n횟수만큼 반복
    if (answer === '') {
      answer += '수';
    } else if (answer[answer.length - 1] === '수') answer += '박';
    else {
      answer += '수';
    }
  }
  return answer;
}

//const waterMelon = (n) => '수박'.repeat(n).slice(0, n);
