import { produce } from "immer"
import { FC, useState } from "react"

const ImmerDemo: FC = () => {
  const [userInfo, setUserInfo] = useState([{ id: "2q0", title: "问卷样式", isPublished: true }])
  //function changeInfo(){
  //setUserInfo(produce(draft=>{
  //  draft.title = 'immer-title'
  // }))
  //}
  function addItem() {
    setUserInfo(
      produce(draft => {
        draft.push({
          id: "2q0",
          title: "immer-增加问卷样式",
          isPublished: true,
        })
      })
    )
  }
  return (
    <div>
      <h1>使用immer修改不可变数据</h1>
      <div>{JSON.stringify(userInfo)}</div>
      <button> 通过immer修改数据</button>
      <button onClick={addItem}> 通过immer修改数据</button>
    </div>
  )
}

export default ImmerDemo
