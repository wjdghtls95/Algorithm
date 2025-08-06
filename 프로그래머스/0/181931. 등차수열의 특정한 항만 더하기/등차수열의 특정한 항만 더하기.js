function solution(a, d, included) {
    let answer = 0;

    const terms = [];
    let term = a;

    for (let i = 0; i < included.length; i++) {
        terms.push(term)

        term += d;
    }
    console.log(terms);

    if (terms.length !== included.length) {
        throw new Error('wrong terms count');
    }

    for (let i = 0; i < included.length; i++) {
        if (included[i] === true) {
            answer += terms[i]
        }
    }

    return answer;
}