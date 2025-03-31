import { FC, useState } from "react";
const Demo: FC = () => {
  const [count, setCount] = useState(0);
  function syncCountAdd() {
    setCount(count + 1);
    console.log("synccount--->" + count);
  }

  return (
    <div>
      <button onClick={syncCountAdd}>synccount_click {count}</button>
    </div>
  );
};

export default Demo;
