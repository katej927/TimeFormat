export function TimeFormat(postingTime) {
  // 포스팅 시간 정보
  const setDate = new Date(postingTime);
  const setDateYear = setDate.getFullYear();
  const setDateMonth = setDate.getMonth() + 1;
  const setDateDate = setDate.getDate();

  // 현재 시간 정보
  const now = new Date();

  // 현재 시간- 포스트 시간
  const distance = now.getTime() - setDate.getTime();

  // 시간 차 (년, 일)
  const yearGap = Math.floor(distance / (1000 * 60 * 60 * 24 * 365));
  const DateGap = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hoursGap = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  console.log({ DateGap });
  if (yearGap > 0) {
    return `${setDateYear}년 ${setDateMonth}월 ${setDateDate}일`;
  } else if (DateGap > 7) {
    return `${setDateMonth}월 ${setDateDate}일`;
  } else if (7 >= DateGap > 1) {
    return `${DateGap}일 전`;
  } else {
    return `${hoursGap}시간 전`;
  }
}
