import { FC } from "react";
import "./QuestionCard.css";
// 自定义类型
type PropsType = {
  id: string;
  title: string;
  isPublished: boolean;
  deleteQuestion?: (id: string) => void;
  publishQustion?: (id: string) => void;
};
const QuestionCard: FC<PropsType> = (props) => {
  const { id, title, isPublished, deleteQuestion, publishQustion } = props;
  function publish(id: string) {
    console.log("edit--->  ", id);
    // publishQustion && publishQustion(id)
    if (publishQustion) {
      publishQustion(id);
    }
  }
  function del(id: string) {
    if (deleteQuestion) {
      deleteQuestion(id);
    }
  }
  return (
    <div key={id} id={id} className="list-item">
      <strong>{title}</strong>
      &nbsp;
      {isPublished ? (
        <span style={{ color: "green" }}>已发布</span>
      ) : (
        <span>未发布</span>
      )}
      &nbsp;
      <button
        onClick={() => {
          publish(id);
        }}
      >
        发布问卷
      </button>
      <button
        onClick={() => {
          del(id);
        }}
      >
        删除问卷
      </button>
    </div>
  );
};

export default QuestionCard;
