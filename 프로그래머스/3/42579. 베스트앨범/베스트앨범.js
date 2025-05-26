function solution(genres, plays) {
    const genreTotalPlay = new Map();
    const genreSongMap = new Map();

    for (let i = 0; i < genres.length; i++) {
        // 장르 플레이 횟수
        const genre = genres[i];
        const play = plays[i];

        genreTotalPlay.set(genre, (genreTotalPlay.get(genre) || 0) + play);

        if(!genreSongMap.has(genre)) {
            genreSongMap.set(genre, []);
        }

        genreSongMap.get(genre).push([i, play]);
    }

    const sortGenres = [...genreTotalPlay.entries()].sort((a, b) => b[1] - a[1]).map(i => i[0]);

    const result = []

    // 3. 각 장르마다 상위 2곡 추출
    for (const genre of sortGenres) {
        const songs = genreSongMap.get(genre);

        // 재생 수 높은 순 → 인덱스 낮은 순 정렬
        songs.sort((a, b) => {
            if (b[1] === a[1]) return a[0] - b[0]; // 같은 재생 수면 index 작은 순
            return b[1] - a[1];
        });

        result.push(...songs.slice(0, 2).map(song => song[0]));
    }

    return result;
}

console.log(solution(['classic', 'pop', 'classic', 'classic', 'pop'], [500, 600, 150, 800, 2500]));
