'use strict'

let numbers=[5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,
    51,53,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100]
for (let item of numbers){
    console.log(item)}




    let array1 = [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];
    for (let index = 0; index < array1.length; index++) {
      const element = array1[index];
      if (element > 0 && element < 10) {
        console.log(element);
      }
    }


let array2= [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < array2.length; i++) {
  sum += array2[i];
}
console.log(sum);

let array3 = [1, 2, 3, 4, 5];
let sum = 0;
let shv = 0;
for (x = 0; x < array3.length; x++) {
  sum += array3[x];
  shv = sum / array3.length;
}
console.log(shv);

let user = {
    firstname: "giorgi",
    lastname: "smith",
    age: 25,  
    studentstatus: "active"
  }

    console.log(user.studentstatus)

    let user2 = {
        name: "anna",
        age: 20,
        studentstatus: "active",
      };
      let result =
        user2.age < 18 && user2.studentstatus === `active`
          ? `Hello user `
          : user2.name === `levani`
          ? `hello levan`
          : user2.age < 25 || user.studentstatus === `active`
          ? `Hello anna`
          : `Erorr`;
      console.log(result);



 let array6 = [ 2, 3, 5, 10,25,24,11, 100 , 6,7, 10 ]
 let even = [];
for(let i = 0; i < array6.length; i++) {
       if (array6[i] % 2 == 0)
       even.push(array6[i]);
}

console.log(even)


let users = [
    { username: "giorgi", status: false },
    { username: "levani", status: false },
    { username: "anna", status: true },
  ];
  console.log(users[2]);

  let array7 = [32, 14, null, "40", 50];
  for (let sd = 0; sd < array7.length; sd++) {
    const asd = Number(array7[sd]);
    if (asd % 5 == 0) {
      console.log(asd);
    }
  }

    

  let array8 = [
    [2, -3, 5, 11],
    [1, -35, -11],
    [12, -36, -24],
  ];
  for (let f2 = 0; f2 < array8.length; f2++) {
    const f4 = array8[f2];
    for (let f6 = 0; f6 < f4.length; f6++) {
      let f12 = f4[f6];
      if (f12 > 0) {
        console.log(f12);
      }
    }
  }
