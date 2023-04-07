import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from 'antd';

const modalCbs = {};
export const useModal = (modalId) => {
  const dispatch = useDispatch();

  const show = useCallback(
    (args) => {
      return new Promise((resolve) => {
        modalCbs[modalId] = resolve;
        dispatch({
          type: 'SHOW_MODAL',
          payload: {
            modalId,
            args,
          },
        });
      });
    },
    [dispatch, modalId]
  );

  const hide = useCallback(
    (force) => {
      dispatch({
        type: 'HIDE_MODAL',
        payload: {
          modalId,
          force,
        },
      });
    },
    [dispatch, modalId]
  );

  const resolve = useCallback(
    (args) => {
      if (modalCbs[modalId]) {
        modalCbs[modalId](args);
        delete modalCbs[modalId];
      }
    },
    [modalId]
  );

  const args = useSelector((state) => state[modalId]);
  const hiding = useSelector((state) => state.hiding[modalId]);

  return {
    args,
    hiding,
    visible: !!args,
    show,
    hide,
    resolve,
  };
};

export const createModal = (modalId, Comp) => {
  return (props) => {
    const { visible, args } = useModal(modalId);

    return visible ? <Comp {...args} {...props} /> : null;
  };
};

const NiceModal = ({ id, children, ...rest }) => {
  const modal = useModal(id);

  return (
    <Modal
      onCancel={() => modal.hide()}
      onOk={() => modal.hide()}
      afterClose={() => modal.hide(true)}
      open={!modal.hiding}
      {...rest}
    >
      {children}
    </Modal>
  );
};

export default NiceModal;
