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
