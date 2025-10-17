// 객체 리터럴타입
let user: {
  id?: number;
  name: string;
} = {
  id: 1,
  name: "이정환",
};
// user.id; 가능

let dog: {
  name: string;
  color: string;
} = {
  name: "돌돌이",
  color: "brown",
};

let config: {
  // 프로퍼티 변경 불가
  readonly apiKey: string;
} = {
  apiKey: "MY API KEY",
};

// config.apiKey = "hacked";
