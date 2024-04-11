// useEffect(우리가 딱 한번만 실행하고 싶은 코드, react.js가 지켜보아야하는 것들_그리고 그것들이 변화할 때, react.js가 코드를 실행시킨다.);
// 이렇게 두개의 아규먼트로 되어있다.
// useEffect : 코드를 언제 실행할 지 선택하는 것!!
// react.js가 동작하는 관점에서 말하자면 방어막이다. (react.js : state를 변화시킬 때 component를 재실행시키는 것)

import { useEffect, useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  //// 1. 빈 [] 아무것도 지켜보지 않는다.(단 한번만 실행됨)/////
  useEffect(() => {
    console.log("I run only once");
  }, []); //[]: 빈 array : 코드가 단 한번만 실행되는 이유(리액트가 지켜볼 게 아무것도 없어서 처음 한번만 실행됨)
  
  // --------------------------------------------------
  // useEffect(() => {
  //   console.log("SEARCH FOR", keyword); 
  //   // keyword가 변화할 때만 코드를 실행하기
  // }, [keyword]); //[keyword]: keyword가 변화할 때 코드를 실행할 것이라고 react.js에게 알려주는 것 -> keyword가 변화할 때 마다 코드가 항상 실행됨.
  // --------------------------------------------------

  // 다시
  useEffect(() => {
    // keyword가 빈 값이 아니라면, 그 때 keyword를 검색하자
    // 그리고
    // keyword.length 가 5보다 길 때
    // if(keyword !== "" && keyword.length > 5){
    //   console.log("SEARCH FOR", keyword);
    // }
    console.log("I run when 'keyword' changes");
  }, [keyword]); // -> [keyword]가 변화(change)할 때 브라우저에 콘솔로그를 찍을 예정 -> [keyword] : const[keyword] state에 있는 값, 즉 [keyword]는 setKeyword라는 function으로 인해 변화된다.( => setKeyword(event.target.value);) -> 그리고 setKeyword는 onChange라는 function에 의해 호출되고 -> onChange는 사용자 input이 변화할 때 호출된다.

  ///////// 2. 한 개의 아이템만 지켜보기[counter]//////////
  useEffect(() => {
    console.log("I run when 'counter' changes");
  }, [counter]); // [counter]가 변화(change) 할 때만 실행(dependency값은 없음[counter, dependency])

  ///////// 3. 둘 중 하나가 실행 될 때 코드를 실행한다.[keyword, counter]//////////
  useEffect(() => {
    console.log("I run when keyword & counter change");
  }, [keyword, counter]); // [keyword, counter] 모두를 지켜보다가 둘 중 하나라도 변화가 일어나면, 이 코드를 실행한다.

  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search here.." />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
