function solution(id_list, report, k) {
    const reportSet = new Set(report);
    const userReport = new Map()
    const userReportCount = new Map()

    id_list.forEach(user => {
        userReport.set(user, new Set())
        userReportCount.set(user, 0)
    })

    for(const report of reportSet) {
        const [from, to] = report.split(' ');

        userReport.get(from).add(to); // 신고한 사람 기록
        userReportCount.set(to, userReportCount.get(to) + 1); // 신고 횟수 증가
    }

    // 정지 대상 유저 구하기
    const banned = new Set(id_list.filter(user => userReportCount.get(user) >= k));

    // 메일 카운트 구하기
    const result = id_list.map(user => {
        const reported = userReport.get(user);

        let count = 0;

        for(const target of reported) {
            if(banned.has(target)) count++;
        }
        return count;
    })

    return result;
}

// function solution(id_list, report, k) {
//   const answer = new Array(id_list.length).fill(0);
//   const reportedList = {}; // 신고당한 id
//   // const setReport = new Set(report); // 중복제거

//   id_list.map((user) => { // key = userid를 value = 빈 배열 가지는 객체
//     reportedList[user] = [];
//   })
//   // report_list { muzi: [], frodo: [], apeach: [], neo: [] }

//   report.map((user) => { // 사람, 신고한사람 들어가는 배열
//     const [userID, reportId] = user.split(' ');
//     if (!reportedList[reportId].includes(userID)) {
//       reportedList[reportId].push(userID);
//     } // if절 -> 신고자 포함되는지 보고 안되어있을때 이름 추가(중복제거)
//   });

//   for(const key in reportedList) {
//     if(reportedList[key].length >= k) {
//       reportedList[key].map((user) => {
//         answer[id_list.indexOf(user)] += 1;
//       })
//     }
//   }
//   return answer;
// }