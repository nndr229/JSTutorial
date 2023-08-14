let var_name = 'Nithin';
let var_name_1 = true;
let var_name_2 = 2;
let var_name_3 = 2.3;

let var_name_4 = null;

win = true;

if (!win) {
  console.log('OOPSS');
} else {
  console.log('HELLO WORLD!');
}

let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

function checkDrivingAge(age) {
  if (age >= 18) {
    console.log('You can drive');
  } else {
    console.log('No No');
  }
}

checkDrivingAge(123);

let arr2 = arr.map((val, idx) => {
  if (val < 4) {
    console.log(idx);
    return val;
  }
});

console.log(arr2);

const funcName = () => {
  console.log('Arrow function syntax');
};

funcName();

let object1 = { Nithin: [34, 45], Deepkumar: [34, 56], Manju: [56, 90] };

let object1Keys = Object.keys(object1);
let object1Values = Object.values(object1);

console.log();
console.log(object1Keys);
console.log(object1Values);

class Robot {
  constructor(name, isSentient) {
    this.name = name;
    this.isSentient = isSentient;
  }

  start() {
    console.log('I am alive!');
  }

  move() {
    console.log('I am moving');
  }
}

let robo_cop = new Robot('roboCop', true);
robo_cop.start();
robo_cop.move();
