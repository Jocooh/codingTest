function solution(nums) {
    //최대로 가질 수 있는 포켓몬 수
  let max = nums.length / 2; 
  let set = [...new Set(nums)]; //중복제거
    //가질 수 있는 수 보다 만약 포켓몬 수가 더 많다? -> 내가 가질 수 있는 수 만큼 가져오기
    // 포켓몬 수가 더 적다? -> 중복이 제거된 포켓몬을 다 가질 수 있음
  return set.length > max ? max : set.length;
}