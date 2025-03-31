import { FC, useState } from "react";
const Demo1: FC = () => {
  const [userInfo, setUserInfo] = useState({ name: "书蓉", age: 20 });
  function changeName() {
    setUserInfo({
      ...userInfo, // 解构处理，不需要写完所有值
      age: 21,
    });
  }
  const [list, setList] = useState(["x", "y"]);
  function addItem() {
    setList([...list, "z|z"]);
  }
  return (
    <div>
      <h1>state--》不可变数据</h1>
      <div>{JSON.stringify(userInfo)}</div>
      <button onClick={changeName}> 点击可以让-书蓉-变年轻</button>
      <div>{JSON.stringify(list)}</div>
      <button onClick={addItem}> 点击可以让-增加数组</button>
    </div>
  );
};

export default Demo1;
