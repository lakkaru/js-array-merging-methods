const arr1 = [20, 30, 40];
const arr2 = [60, 70];
//Required array [10,20,30,40,50,60,70,80] //
//Method 1 - by pushing elements with loops
const arrReq1 = [];
arrReq1.push(10);
console.log(arrReq1); // [10]
arr1.forEach((val) => {
  arrReq1.push(val);
});
console.log(arrReq1); // (4) [10, 20, 30, 40]
arrReq1.push(50);
console.log(arrReq1); // (5) [10, 20, 30, 40, 50]
arr2.forEach((val) => {
  arrReq1.push(val);
});
console.log(arrReq1); // (7) [10, 20, 30, 40, 50, 60, 70]
arrReq1.push(80);
console.log(arrReq1); // (8) [10, 20, 30, 40, 50, 60, 70, 80]

//Method 2 - by shift, unshift, and push
const arrReq2 = [];
arrReq2.unshift(10);
console.log(arrReq2); // [10]
arr1.forEach((val) => {
  arrReq2.push(val);
});
console.log(arrReq2); // (4) [10, 20, 30, 40]
arrReq2.push(50);
console.log(arrReq2); // (5) [10, 20, 30, 40, 50]
arr2.forEach((val) => {
  arrReq2.push(val);
});
console.log(arrReq2); // (7) [10, 20, 30, 40, 50, 60, 70]
arrReq2.push(80);
console.log(arrReq2); // (8) [10, 20, 30, 40, 50, 60, 70, 80]

// Method 3 - splice
const arrReq3 = [];
arrReq3.splice(1, 0, 10);
console.log(arrReq3); // [10]
arr1.forEach((val, key) => {
  arrReq3.splice(key + 1, 0, val);
});
console.log(arrReq3); // (4) [10, 20, 30, 40]
arrReq3.splice(4, 0, 50);
console.log(arrReq3); // (5) [10, 20, 30, 40, 50]
arr2.forEach((val) => {
  arrReq3.splice(arrReq3.length + 1, 0, val);
});
console.log(arrReq3); // (7) [10, 20, 30, 40, 50, 60, 70]
arrReq3.splice(7, 0, 80);
console.log(arrReq3); // (8) [10, 20, 30, 40, 50, 60, 70, 80]

// Method 4 - concat()
let arrReq4 = [];
arrReq4 = arrReq4.concat(10, arr1, 50, arr2, 80);
console.log(arrReq4); // (8) [10, 20, 30, 40, 50, 60, 70, 80]

// Method 5- object.assign
let arrReq5 = [0, 0, 0, 0, 0, 0, 0, 0];
arrReq5 = Object.assign(arrReq5, [80]);
console.log(arrReq5); // (8) [80, 0, 0, 0, 0, 0, 0, 0]
arrReq5.copyWithin(7);
console.log(arrReq5);// (8) [80, 0, 0, 0, 0, 0, 0, 80]
arrReq5 = Object.assign(arrReq5, arr2);
console.log(arrReq5);// (8) [60, 70, 0, 0, 0, 0, 0, 80]
arrReq5.copyWithin(5,0,2);
console.log(arrReq5);//(8) [60, 70, 0, 0, 0, 60, 70, 80]
arrReq5 = Object.assign(arrReq5, [50]);
console.log(arrReq5);//(8) [50, 70, 0, 0, 0, 60, 70, 80]
arrReq5.copyWithin(4,0,1);
console.log(arrReq5);//(8) [50, 70, 0, 0, 50, 60, 70, 80]
arrReq5 = Object.assign(arrReq5, arr1);
console.log(arrReq5);//(8) [20, 30, 40, 0, 50, 60, 70, 80]
arrReq5.copyWithin(1,0,3);
console.log(arrReq5);//(8) [20, 20, 30, 40, 50, 60, 70, 80]
arrReq5 = Object.assign(arrReq5, [10]);
console.log(arrReq5);// (8) [10, 20, 30, 40, 50, 60, 70, 80]

//Method 6- spread operator
const arrReq6=[10, ...arr1, 50, ...arr2, 80];
console.log(arrReq6);//(8) [10, 20, 30, 40, 50, 60, 70, 80]
