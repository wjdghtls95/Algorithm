function solution(babbling) {
    const words = ["aya", "ye", "woo", "ma"];
    let count = 0;
    
    for (const babble of babbling) {
        let temp = babble;
        let isValid = true;
        let prevWord = "";
        
        while (temp.length > 0 && isValid) {
            let found = false;
            
            for (const word of words) {
                if (temp.startsWith(word)) {
                    // 연속 사용 체크
                    if (prevWord === word) {
                        isValid = false;
                        break;
                    }
                    
                    prevWord = word;
                    temp = temp.slice(word.length);
                    found = true;
                    break;
                }
            }
            
            if (!found) {
                isValid = false;
            }
        }
        
        if (isValid && temp.length === 0) {
            count++;
        }
    }
    
    return count;
}