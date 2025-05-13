function solution(participant, completion) {
    const hash = new Map();

    // 참가자 이름 카운팅
    for (const name of participant) {
        hash.set(name, (hash.get(name) || 0) + 1);
    }

    // 완주자 이름 카운트 감소
    for (const name of completion) {
        hash.set(name, hash.get(name) - 1);

        if (hash.get(name) === 0) {
            hash.delete(name);
        }
    }

    return [...hash.keys()][0];
}

