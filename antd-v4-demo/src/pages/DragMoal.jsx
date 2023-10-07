import React, {useEffect} from "react";
import Draggable from "draggable";
import { Modal } from "antd";

const DragMoal = (props) => {
  const {
    modalClass = `drag-modal-${Math.random().toString(36).substr(2, 8)}`,
    visible,
  } = props;
  
  const initDrag = () => {
    const dragModal = document.querySelector(`.${modalClass}`);
    const drag = new Draggable(dragModal);
  };

  useEffect(() => {
    if (visible) {
      setTimeout(() => {
        initDrag();
      }, 0);
    }
  }, [visible]);

  return (
    <Modal
      {...props}
      className={modalClass}
      title="Draggable Modal"
      open={visible}
      onOk={() => {}}
      width="800px"
      bodyStyle={{
        padding: "25px 40px",
      }}
      maskClosable={false}
      destroyOnClose={true}
    >
      yoyo
    </Modal>
  )
}

export default DragMoal