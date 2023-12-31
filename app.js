"use strict";
const add = (n1, n2, cb) => {
    const result = n1 + n2;
    return cb(result);
};
const showResult = (n1) => {
    return n1;
};
let result = add(4, 2, showResult);
console.log(result);
