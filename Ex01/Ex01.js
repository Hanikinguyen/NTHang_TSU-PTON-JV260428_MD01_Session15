let arr = [];

for (let i = 0; i < 10; i++) {
  arr[i] = Number(prompt(`Nhập phần tử thứ ${i + 1}:`));
}

let count = 0;

for (let i = 0; i < 10; i++) {
  if (arr[i] >= 10) {
    count++;
  }
}

alert(`Có ${count} số lớn hơn hoặc bằng 10`);
console.log(`Mảng: ${arr}`);
console.log(`Số phần tử >= 10: ${count}`);