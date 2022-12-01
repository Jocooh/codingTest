function solution(angle) {
  if (angle === 180) return 4;
  if (angle > 90) return 3;
  if (angle === 90) return 2;
  return 1;
}
//1.0<angle<90 1
//2.angle=90 2
//3.90<angle<180 3
//4. angle=180 4
