let add = function (num1, num2) {
    return num1 + num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

console.log(add(multiply(36325, 9824), 777));
console.log(36325 * 9824 + 777);

function areArraysSame(ary1, ary2) {
    if (ary1.length !== ary2.length) {
        return false
    }
    for (let i = 0; i < ary1.length; i++) {
        if (ary1[i] !== ary2[i]) {
            return false;
        }
    }
    return true;
}

console.log(areArraysSame([1,2,3], [4,5,6]))
console.log(areArraysSame([1,2,3], [1,2,3]))
console.log(areArraysSame([1,2,3], [1,2,3,4]))
