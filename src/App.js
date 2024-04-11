// useEffect(우리가 딱 한번만 실행하고 싶은 코드, react.js가 지켜보아야하는 것들_그리고 그것들이 변화할 때, react.js가 코드를 실행시킨다.);
// 이렇게 두개의 아규먼트로 되어있다.

import { useEffect, useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);

  // setKeyword(event.target.value);-> event를 발생시킨 input에서 value를 받아서  keyword state에 넣어줌
  const onChange = (event) => setKeyword(event.target.value);
  // console.log('i run all the time');

  useEffect(() => {
    // console.log("call the api");
    console.log("I run only once");
  }, []); //[]: 빈 array : 코드가 단 한번만 실행되는 이유(리액트가 지켜볼 게 아무것도 없어서 처음 한번만 실행됨)
  
  // useEffect(() => {
  //   console.log("SEARCH FOR", keyword); 
  //   // keyword가 변화할 때만 코드를 실행하기
  // }, [keyword]); //[keyword]: keyword가 변화할 때 코드를 실행할 것이라고 react.js에게 알려주는 것 -> keyword가 변화할 때 마다 코드가 항상 실행됨.

  // 다시
  useEffect(() => {
    // keyword가 빈 값이 아니라면, 그 때 keyword를 검색하자
    // 그리고
    // keyword.length 가 5보다 길 때
    // if(keyword !== "" && keyword.length > 5){
    //   console.log("SEARCH FOR", keyword);
    // }
    console.log("I run when 'keyword' changes");
  }, [keyword]);

  useEffect(() => {
    console.log("I run when 'counter' changes");
  }, [counter]);

  useEffect(() => {
    console.log("I run when keyword & counter change");
  }, [keyword, counter]);

  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search here.." />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
