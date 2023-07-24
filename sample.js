function solution (a, b, c) {
    let s = 1/2 * (a+b+c);
//Heron's formula
    a = Math.sqrt(s*(s-a)*(s-b)*(s-c));
    return a;
}
solution(5,6,7);