const arr1=[20,30,40];
const arr2=[60,70];
//Required array [10,20,30,40,50,60,70,80] //
//Method 1 - by pushing elements with loops
const arrReq1=[];
arrReq1.push(10);
console.log(arrReq1); // [10]
arr1.forEach(val=>{
    arrReq1.push(val);
});
console.log(arrReq1); // (4) [10, 20, 30, 40]
arrReq1.push(50);
console.log(arrReq1); // (5) [10, 20, 30, 40, 50]
arr2.forEach(val=>{
    arrReq1.push(val);
});
console.log(arrReq1); // (7) [10, 20, 30, 40, 50, 60, 70]
arrReq1.push(80);
console.log(arrReq1); // (8) [10, 20, 30, 40, 50, 60, 70, 80]

//Method 2 - by shift, unshift, and push
const arrReq2=[];
arrReq2.unshift(10);
console.log(arrReq2); // [10]
arr1.forEach(val=>{
    arrReq2.push(val);
});
console.log(arrReq2); // (4) [10, 20, 30, 40]
arrReq2.push(50);
console.log(arrReq2); // (5) [10, 20, 30, 40, 50]
arr2.forEach(val=>{
    arrReq2.push(val);
});
console.log(arrReq2); // (7) [10, 20, 30, 40, 50, 60, 70]
arrReq2.push(80);
console.log(arrReq2); // (8) [10, 20, 30, 40, 50, 60, 70, 80]

// Method 3 - splice
const arrReq3=[];
arrReq3.splice(1,0, 10);
console.log(arrReq3); // [10]
arr1.forEach((val, key) => {
    arrReq3.splice(key+1, 0, val);
});
console.log(arrReq3); // (4) [10, 20, 30, 40]
arrReq3.splice(4,0, 50); 
console.log(arrReq3); // (5) [10, 20, 30, 40, 50]
arr2.forEach(val => {
    arrReq3.splice(arrReq3.length+1, 0, val);
});
console.log(arrReq3); // (7) [10, 20, 30, 40, 50, 60, 70]
arrReq3.splice(7,0, 80); 
console.log(arrReq3); // (8) [10, 20, 30, 40, 50, 60, 70, 80]

// Method 4 - concat()
let arrReq4=[];
arrReq4= arrReq4.concat(10, arr1, 50, arr2, 80);
console.log(arrReq4);// (8) [10, 20, 30, 40, 50, 60, 70, 80]

