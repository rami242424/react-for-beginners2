import { useState } from "react";
import Button from './Button';

function App(){
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]); 
  const onChange = (event) => setToDo(event.target.value);
  // console.log(toDo);
  const onSubmit = (event) => {
    event.preventDefault();
    // console.log(toDo);
    if(toDo === ""){
      return; // toDo === ""이 true라면, onSubmit 함수를 작동하지 않도록 한다(return한다.)
    }

    //방법1
    setToDos(currentArray => [toDo, ...currentArray]
    );
    
    //방법2
    // setToDos(function(currentArray){
      //   return
      // });
      
      setToDo(""); // input이 submit되고 나서 input칸 비워주기
      // 자스에서처럼 toDo = "" 이런식으로 state를 직접 수정하지 않는다.(절대)
      console.log(toDos);
  };
  // console.log(toDos);

  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input 
          onChange={onChange} 
          value={toDo} 
          type="text" 
          placeholder="Write your to do.."
          />
        <button>Add To Do</button>
      </form>
      <hr/>
      {/* 작동은 되나, console에 key를 입력해야된다는 에러가 뜬다. 
      <ul>
        {toDos.map((item) => (
          <li>{item}</li>
        ))}
      </ul> */}
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

    </div>
  );
}

export default App;