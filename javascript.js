//bai so nguyen to
let numbers = parseInt(prompt("Nhap so luong can in ra"));
function snt(n) {
  if (n < 2) return 0;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) return 0;
  }
  return 1;
}

let j = 0;
let cnt = 1;
while (cnt <= numbers && cnt <= 20) {
  if (snt(j) == 1) {
    console.log(j);
    ++cnt;
  }
  j++;
}
