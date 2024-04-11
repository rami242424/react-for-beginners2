// useEffect(우리가 딱 한번만 실행하고 싶은 코드,니콜설명예정코드);
// 이렇게 두개의 아규먼트로 되어있다.

import { useEffect, useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  console.log('i run all the time');

  // useEffect() : 코드가 딱 한번만 실행될 수 있도록 보호해줌
  useEffect(() => {
    console.log("call the api");
  }, []);
  // const iRunOnlyOnce = () => {
  //   console.log("i run only once");
  // }
  // useEffect(iRunOnlyOnce, []);
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
