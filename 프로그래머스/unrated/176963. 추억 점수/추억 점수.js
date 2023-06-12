function solution(name, yearning, photo) {
  var answer = [];
  let score = new Map(); //name에 따른 yearning 값 세팅
  for (let i = 0; i < name.length; i++) {
    //photo안에 name값이 있다면 photo값으로 변경
    if (!score.has(name[i])) {
      score.set(name[i], yearning[i]);
    }
  }
  for (let i = 0; i < photo.length; i++) {
    for (let j = 0; j < photo[i].length; j++) {
      if (score.has(photo[i][j])) photo[i][j] = score.get(photo[i][j]);
      else {
        photo[i][j] = 0;
      }
    }
    console.log('photo', photo[i]);
    answer.push(photo[i].reduce((sum, value) => sum + Number(value), 0));

  }

  return answer;
}
