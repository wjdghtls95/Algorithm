function isValid(s) {
    const stack = []

    const pairs = {
        ')': '(',
        ']': '[',
        '}': '{'
    }

    for (const c of s) {
        if (['(', '[', '{'].includes(c)) {
            stack.push(c)
        } else {
            if (stack.pop() !== pairs[c]) {
                return false
            }
        }
    }

    return stack.length === 0
}

function solution(s) {
    let count = 0;

    for(let i = 0; i < s.length; i++) {
        const rotated = s.slice(i) + s.slice(0, i)

        if(isValid(rotated)) {
            count++
        }

    }

    return count
}