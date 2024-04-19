"use strict";
function flatten(arr) {
    let arr3 = [];
    for (const item of arr) {
        if (Array.isArray(item)) {
            arr3.push(...flatten(item));
        }
        else {
            arr3.push(item);
        }
    }
    return arr3;
}
let arr = [1, [2, [3, 4], 5], 6];
let arr2 = flatten(arr);
console.log(arr2);
