interface User {
    user_id: number; // userId
    userName: String; // user 이름
    password: String; // password 얼굴 인식으로 바뀌면 바뀔 수 있는 부분
    birthDate: String; // 생일
    phoneNumber: String; // 전화번호
}

interface scheduleList {
    user_id: number;
    schedule_id: number;
    title: string; // 스케줄명
    content: string; // 내용
    year: string;
    month: string;
    date: string;
    startedTime: string; // 시작시간
    endedTime: String; // 끝 시간
    category: String;
    scheduleNote: string; // 비고
}

interface usingFunction {
    user_id: number;
    funcList: []; // 현재 뭘 사용하고 있는지
}

interface func1 {
    funcName: String;
    content: string;
}

interface func2 {
    funcName: String;
    content: String;
}

// interface Calendar {
//     schedule: scheduleList[]; //user마다 다른 Schedule
//     openFunc: string[];
// }

// interface category {
//     categoryName: String;
// }
