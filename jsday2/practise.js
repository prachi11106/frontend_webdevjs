//1
let a1 = [10, 20, 30, 40, 50];

for (let i = 0; i < a1.length; i++) {
    console.log(a1[i]);
}
//2
let a2 = [1, 2, 3, 4, 5];

for (let i = 0; i < 5; i++) {
    a2[i] = a2[i] + 5;
}

for (let i = 0; i < 5; i++) {
    console.log(a2[i]);
}
//3
let a3 = [1, 2, 3, 4, 5];
let temp1;

for (let i = 0; i < a3.length / 2; i++) {
    temp1 = a3[i];
    a3[i] = a3[a3.length - 1 - i];
    a3[a3.length - 1 - i] = temp1;
}

for (let i = 0; i < a3.length; i++) {
    console.log(a3[i]);
}
//4
let a4 = [4, 1, 6, 2, 5];
let temp2;

for (let i = 0; i < a4.length; i++) {
    for (let j = i + 1; j < a4.length; j++) {
        if (a4[i] < a4[j]) {
            temp2 = a4[i];
            a4[i] = a4[j];
            a4[j] = temp2;
        }
    }
}

for (let i = 0; i < a4.length; i++) {
    console.log(a4[i]);
}
//5
let a5 = [1, 2, 2, 3, 4, 4, 5];
let b5 = [];
let count = 0;

for (let i = 0; i < a5.length; i++) {
    let found = false;

    for (let j = 0; j < count; j++) {
        if (a5[i] === b5[j]) {
            found = true;
        }
    }

    if (found === false) {
        b5[count] = a5[i];
        count++;
    }
}
for (let i = 0; i < count; i++) {
    console.log(b5[i]);
}
//day 3 other  files
//6
let a6 = [1, 2, 2, 3, 4, 4, 5];
let b6 = [];
let k6 = 0;

for (let i = 0; i < a6.length; i++) {
    let flag = false;

    for (let j = 0; j < k6; j++) {
        if (a6[i] === b6[j]) {
            flag = true;
        }
    }

    if (flag === false) {
        b6[k6] = a6[i];
        k6++;
    }
}

console.log(b6);
//7
let a7 = [1, 2, 3, 4, 5];
let b7 = [];

for (let i = a7.length; i > 0; i--) {
    b7[b7.length] = a7.pop();
}

console.log(b7);
//8
let a8= [2, -3, 5, -1, 6, -4];
let b8 = [];
let k8 = 0;

for (let i = 0; i < a8.length; i++) {
    if (a8[i] >= 0) {
        b8[k8] = a8[i];
        k8++;
    }
}

console.log(b8);
//9
let a9 = [1, 2, 3, 4, 5, 6];
let even = [];
let odd = [];
let e = 0, o = 0;

for (let i = 0; i < a9.length; i++) {
    if (a9[i] % 2 === 0) {
        even[e] = a9[i];
        e++;
    } else {
        odd[o] = a9[i];
        o++;
    }
}

console.log("Even:", even);
console.log("Odd:", odd);
//10
let a10 = [0, 1, 0, 3, 5, 0, 2];
let b10 = [];
let k10 = 0;
let zeroCount = 0;

for (let i = 0; i < a10.length; i++) {
    if (a10[i] !== 0) {
        b10[k10] = a10[i];
        k10++;
    } else {
        zeroCount++;
    }
}

for (let i = 0; i < zeroCount; i++) {
    b10[k10] = 0;
    k10++;
}

console.log(b10);
//11
let a11 = [1, 2, 3, 2, 1];
let flag = true;

for (let i = 0; i < a11.length / 2; i++) {
    if (a11[i] !== a11[a11.length - 1 - i]) {
        flag = false;
    }
}

if (flag === true) {
    console.log("Palindrome");
} else {
    console.log("Not Palindrome");
}

