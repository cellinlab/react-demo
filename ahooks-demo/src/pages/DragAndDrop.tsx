import { useState } from "react";
import { useDrag, useDrop } from "ahooks";

const DragAndDrop = () => {
  const [dragging, setDragging] = useState<string | null>(null);

  const getDragProps = useDrag({
    onDragStart: (data) => {
      setDragging(data);
    },
    onDragEnd: () => {
      setDragging(null);
    },
  });

  const [props, { isHovering }] = useDrop({
    onText: (text, e) => {
      console.log(text, e);
    },
    onFiles: (files, e) => {
      console.log(files, e);
    },
    onUri: (uri, e) => {
      console.log(uri, e);
    },
    onDom: (content, e) => {
      console.log(content, e);
    },
  });

  return (
    <div>
      <h2>DragAndDrop</h2>
      <div
        style={{
          border: "1px dashed #e8e8e8",
          padding: 16,
          textAlign: "center",
        }}
        {...props}
      >
        {isHovering ? "release here" : "drop here"}
      </div>
      <div
        style={{
          display: "flex",
          marginTop: 8,
        }}
      >
        {Array.from(Array(5)).map((e, i) => {
          return (
            <div
              {...getDragProps(`box${i}`)}
              style={{
                border: "1px solid #e8e8e8",
                padding: 16,
                width: 80,
                textAlign: "center",
                marginRight: 16,
                cursor: "move",
                opacity: dragging === `box${i}` ? 0.4 : 1,
              }}
            >
              box{i}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DragAndDrop;
