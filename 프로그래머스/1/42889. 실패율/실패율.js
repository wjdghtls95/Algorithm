function solution(N, stages) {

    const challenger = Array(N + 2).fill(0);

    for(const stage of stages) {
        challenger[stage] += 1;
    }

    const fails = {}
    let totalPlayers = stages.length;

    for(let i = 1; i <= N; i++) {
        if(challenger[i] === 0) {
            fails[i] = 0;
            continue;
        }

        fails[i] = challenger[i] / totalPlayers;

        totalPlayers -= challenger[i];
    }

    return Object.entries(fails).sort((a, b) => b[1] - a[1]).map((i) => Number(i[0]));

}