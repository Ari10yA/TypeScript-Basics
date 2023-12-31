const add = (n1: number, n2: number, cb: ( n: number ) => void ): void => {
    const result = n1 + n2;
    return cb(result);
}

const showResult = (n1: number) => {
    return n1;
}

let result = add(4, 2, showResult);

console.log(result);

