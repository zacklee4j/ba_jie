import { FC } from "react";
import "./List1.css";
const List1: FC = () => {
  // 列表页
  // 问卷数据列表
  const questionList = [
    { id: "q0", title: "问卷样式", isPublished: true },
    { id: "q1", title: "大学生生活费", isPublished: false },
    { id: "q2", title: "首份工作就业收入", isPublished: false },
    { id: "q3", title: "毕业五年内工资涨幅", isPublished: false },
  ];
  function editquestion(id: string) {
    console.log("正在编辑" + id);
  }
  return (
    <div>
      <h1>问卷列表页1</h1>
      <div>
        {questionList.map((question) => {
          const { id, title, isPublished } = question;
          return (
            <div key={id} className="list-item">
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
                  editquestion(id);
                }}
              >
                编辑问卷
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List1;
