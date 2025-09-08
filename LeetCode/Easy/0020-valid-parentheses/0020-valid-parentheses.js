/**
 * @param {string} s
 * @return {boolean}
 */
dict = {
    ")": "(",
    "]": "[",
    "}": "{",
};

var isValid = function (s) {
    s = s.split("");
    stack = [];

    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === stack[stack.length - 1]) {
            s.pop();
            stack.pop();
        } else {
            stack.push(dict[s.pop()]);
        }
    }

    if (stack.length === 0) {
        return true;
    } else {
        return false;
    }
};