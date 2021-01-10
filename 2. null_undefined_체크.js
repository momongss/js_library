// null 이거나, undefined 를 동시에 걸러내는 방법은 뭘까?

// 1. !data
// !을 붙이는 걸로 될까?? 일단 걸러지긴 할거다. 근데 문제는 0까지 걸러진
// 다는 것이다.

function check(data) {
  if (!data) {
    console.log("빈 데이터");
  }
}

check(null);
check(undefined);
check(0);

// 2. == 사용.
// == 사용이 권장되진 않지만, 이렇게 하면 간단하게 null, undefined을 걸러낼 수 있다.
console.log(null == undefined);

function check_null(data) {
  if (data == undefined) {
    console.log("널");
  }
}

check_null("");
