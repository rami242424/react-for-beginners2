// cleanup function : component가 destroy될 떄 뭔가 할 수 있도록 해주는 것 => "return () => console.log("destroyed :(");"

import { useEffect, useState } from "react";

////방법 1 return 추가해주기(기본형_잘쓰이는 방법)////
// function Hello(){
//   useEffect(() => {
//     console.log("Created :)");
//     return () => console.log("Destroyed :(");
//   }, []);
//   return <h1>Hello</h1>;
// }

////방법 2 cleanup 함수로 만들어주기////
// function Hello(){
//   function destrFn(){
//     console.log("Destroyed :(");
//   }

//   function creatFn(){
//     console.log("Created :)");
//     return destrFn;
//   }
  
//   useEffect(creatFn, []);
//   return <h1>Hello</h1>;
// }

function Hello(){
    // function destrFn(){
    //   console.log("Destroyed :(");
    // }
  
    // function creatFn(){
    //   console.log("Created :)");
    //   return destrFn;
    // }
    
    //방법1 (주로 쓰이는 방법)
    useEffect(() => {
      console.log("Hi :)");
      return () => console.log("bye :(");
    }, []);
    return <h1>Hello</h1>;


    //방법2
  //   useEffect(function(){
  //     console.log("Hi :)");
  //     return function(){
  //       console.log("bye :(");
  //     }
  //   }, []);
  //   return <h1>Hello</h1>;
  // }
}
// --------------------------------------- //

function App() {
  const [showing, setShowing] = useState(false);
  // setShowing을 통해 이전 value를 받아온 다음에, 그 value의 반댓값을 return 
  const onClick = () => setShowing(prev => !prev);
  return (
    <div>
      {showing ? <Hello /> : null }
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
