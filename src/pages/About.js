import React from "react";
import { useSearchParams } from "react-router-dom";

const About = () => {
  // useSearchParams는 배열 타입의 값을 반환한다.

  // const [쿼리파라미터를 조회/수정 하는 메서드들이 담긴 객체반환,
  // 쿼리파라미터를 객체 형태로 업에티흐 할 수 있는 함수를 반환] = useSearchParams();
  const [searchParams, setSearchParams] = useSearchParams();
  // get() 메서드를 통해 특정 쿼리 파라미터를 조회 할 수 있다.
  // set() 메서드를 통해 특정 쿼리 파라미터를 업데이트 할 수 있다.
  const detail = searchParams.get("detail");
  const mode = searchParams.get("mode");

  // 쿼리파라미터를 조회 할 때 값은 무조건 문자열 타입
  // 필요에 따라 "", 숫자는 parseInt() 해야됨
  const onToggleDetail = () => {
    setSearchParams({ mode: 1, detail: detail === "true" ? false : true });
  };

  const onIncreaseMode = () => {
    const nextMode = mode === null ? 1 : parseInt(mode) + 1;
    setSearchParams({ mode: nextMode, detail });
  };

  return (
    <div>
      <h1>소개페이지 입니다.</h1>
      <p>리액트 라우터 사용</p>
      <p>mode: {mode}</p>
      <p>detail: {detail}</p>
      <button onClick={onIncreaseMode}>mode</button>
      <button onClick={onToggleDetail}>detail</button>
    </div>
  );
};

export default About;
