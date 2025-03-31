import { useState } from "react";
import List1 from "./List1";
import List2 from "./List2";
import Demo from "./StateDemo";
import Demo1 from "./StateDemo1";
import ImmerDemo from "./ImmerDemo";
function App() {
  let oricount = 0;
  function oriCountAdd() {
    oricount++;
    console.log("oricount--->" + oricount);
  }
  // 使用react内置的hooks
  const [conbineCount, setconbineCount] = useState(0);
  function conbineCountAdd() {
    setconbineCount(conbineCount + 1);
    setconbineCount(conbineCount + 1);
    setconbineCount(conbineCount + 1);
    setconbineCount(conbineCount + 1);
    console.log("newcount--->" + conbineCount);
  }
  const [count, setCount] = useState(0);
  function newCountAdd() {
    setCount((count) => count + 1);
    console.log("newcount--->" + count);
  }
  return (
    <>
      {/*<List1 />*/}
      <div>
        <button onClick={oriCountAdd}>oricount_click {oricount}</button>
        <button onClick={newCountAdd}>newcount_click {count}</button>
        <Demo />
        <button onClick={conbineCountAdd}>newcount_click {conbineCount}</button>
        <Demo1 />
      </div>
      <div>
        <List1 />
      </div>
      <div>
        <List2 />
      </div>
      <div>
        <ImmerDemo />
      </div>
    </>
  );
}

export default App;
