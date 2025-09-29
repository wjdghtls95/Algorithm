function solution(n, words) {
    // 사용한 단어를 추적하기 위한 Set
    const usedWords = new Set();

    // 첫 번째 단어는 무조건 가능 (규칙 적용 X)
    if (words[0].length === 1) return [1, 1];  // 한 글자면 바로 탈락

    usedWords.add(words[0]);
    let lastChar = words[0][words[0].length - 1];

    // 두 번째 단어부터 규칙 확인
    for (let i = 1; i < words.length; i++) {
        const currentWord = words[i];
        const currentPlayer = (i % n) + 1;  // 현재 플레이어 번호
        const currentRound = Math.floor(i / n) + 1;  // 현재 라운드

        // 탈락 조건 확인
        if (currentWord.length === 1 ||  // 한 글자인가?
            currentWord[0] !== lastChar ||  // 끝말잇기 규칙 위반?
            usedWords.has(currentWord)) {   // 중복 단어인가?

            return [currentPlayer, currentRound];
        }

        // 단어 사용 처리
        usedWords.add(currentWord);
        lastChar = currentWord[currentWord.length - 1];
    }

    // 아무도 탈락하지 않음
    return [0, 0];
}