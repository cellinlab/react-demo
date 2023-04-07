import React from 'react';
import { Provider } from 'react-redux';
import { Button } from 'antd';

import store from './store';

import NiceModal, {
  createModal,
  useModal,
} from './useModal';

const MyModal = createModal('MY_MODAL', () => {
  return (
    <NiceModal id="MY_MODAL" title="My Modal">
      <div>My Modal</div>
    </NiceModal>
  );
});

const DemoInner = () => {
  const modal = useModal('MY_MODAL');

  const handleShow = () => {
    modal.show().then((args) => {
      console.log('args', args);
    });
  };

  const resolved = () => {
    modal.resolve('hello');
  };

  return (
    <>
      <Button onClick={() => modal.show()}>Show Modal</Button>
      <Button onClick={handleShow}>Show Modal With Promise</Button>
      <Button onClick={resolved}>Resolved</Button>
      <MyModal />
    </>
  );
};

const Demo = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>useModal</h1>
        <DemoInner />
      </div>
    </Provider>
  );
}

export default Demo;
