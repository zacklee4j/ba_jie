import { FC, useState } from "react";
import "./List1.css";
import QuestionCard from "./components/QuestionCard";
const List2: FC = () => {
  // 列表页
  // 问卷数据列表
  const [questionList, setQuestionList] = useState([
    { id: "2q0", title: "问卷样式", isPublished: true },
    { id: "2q1", title: "大学生生活费", isPublished: false },
    { id: "2q2", title: "首份工作就业收入", isPublished: false },
    { id: "2q3", title: "毕业五年内工资涨幅", isPublished: false },
  ]);
  function delQuestion(id: string) {
    setQuestionList(
      questionList.filter((q) => {
        if (q.id === id) return false;
        else return true;
      }),
    );
  }
  function pubQuestion(id: string) {
    setQuestionList(
      questionList.map((q) => {
        if (q.id !== id) return q;
        return {
          ...q,
          isPublished: true,
        };
      }),
    );
  }
  return (
    <div>
      <h1>问卷列表页2</h1>
      <div>
        {questionList.map((question) => {
          const { id, title, isPublished } = question;
          return (
            <QuestionCard
              key={id}
              id={id}
              title={title}
              isPublished={isPublished}
              deleteQuestion={delQuestion}
              publishQustion={pubQuestion}
            />
          );
        })}
      </div>
    </div>
  );
};

export default List2;
