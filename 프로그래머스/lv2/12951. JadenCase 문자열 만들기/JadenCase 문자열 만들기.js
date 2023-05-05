function solution(s) {
    s = s.split(' ').map(el => el.split('').map((el, index) => 
    index == 0 ? el.toUpperCase() : el.toLowerCase()).join('')).join(' ')
    return s;
}
