import React, {useState, useRef, useEffect} from "react";
import Draggable from "draggable";
import { Modal, Button } from "antd";

const DragMoal = (props) => {
  const {
    modalClass = `drag-modal-${Math.random().toString(36).substr(2, 8)}`,
  } = props;
  const [visible, setVisible] = useState(false);
  
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

  const openModal = () => {
    setVisible(true);
  };

  return (
    <div>
      <h3>DragMoal</h3>
      <Button
        type="primary"
        onClick={openModal}
      >
        Open Modal
      </Button>
      <Modal
        className={modalClass}
        title="Draggable Modal"
        open={visible}
        onOk={() => {}}
        onCancel={() => {
          setVisible(false);
        }}
        width="800px"
        bodyStyle={{
          padding: "25px 40px",
        }}
        maskClosable={false}
        destroyOnClose={true}
      >
        yoyo
      </Modal>
    </div>
  )
}

export default DragMoal