import React, { useState, useEffect } from "react";

import { Modal, Button, Spin, Form, Input, Select } from "antd";

const PerfModal = () => {
  const [addVisible, setAddVisible] = useState(false);
  const [modalStr, setModalStr] = useState("添加");
  const [loading, setLoading] = useState(false);
  const [initialValues, setInitialValues] = useState({});
  const [databases, setDatabases] = useState([]);
  const [loadDbBtnDisabled, setLoadDbBtnDisabled] = useState(true);

  const [form] = Form.useForm();

  useEffect(() => {
    setDatabases([]);
  }, [loadDbBtnDisabled]);

  const onValuesChange = (changedValues, allValues) => {
    let allFilled = true;
    for (let key in allValues) {
      if (!allValues[key]) {
        allFilled = false;
        break;
      }
    }
    setLoadDbBtnDisabled(!allFilled);
  };

  const onCheckClick = () => {
    setDatabases([
      {
        path: Math.random().toString(36).substr(2, 8),
      },
    ]);
  };
  return (
    <div>
      <h3>PerfModal</h3>
      <Button
        type="primary"
        onClick={() => {
          setAddVisible(true);
        }}
      >
        Open Modal
      </Button>
      <Modal
        title={`${modalStr} Innovator Server`}
        visible={addVisible}
        onOk={() => {}}
        onCancel={() => {}}
        width="800px"
        bodyStyle={{
          padding: "25px 40px",
        }}
        loading={loading}
        maskClosable={false}
        destroyOnClose={true}
      >
        <Spin spinning={loading}>
          <Form
            form={form}
            initialValues={initialValues}
            onValuesChange={onValuesChange}
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 18 }}
          >
            <Form.Item
              name="serverName"
              label="服务名称"
              rules={[
                {
                  required: true,
                  message: "必填",
                },
              ]}
            >
              <Input placeholder="请输入服务器名称，不能与已有的重复" />
            </Form.Item>
            <Form.Item
              name="serverUrl"
              label="服务地址"
              rules={[
                {
                  required: true,
                  message: "必填",
                },
              ]}
            >
              <Input placeholder="请输入服务器地址，如 https://host:port/geoscene" />
            </Form.Item>
            <Form.Item
              name="userName"
              label="用户名"
              rules={[
                {
                  required: true,
                  message: "必填",
                },
              ]}
            >
              <Input placeholder="请输入用户名" autoComplete="new-password" />
            </Form.Item>
            <Form.Item
              name="password"
              label="密码"
              rules={[
                {
                  required: true,
                  message: "必填",
                },
              ]}
            >
              <Input.Password placeholder="请输入密码" autoComplete="new-password" />
            </Form.Item>
          </Form>
          <div>
            <Button size="small" shape="round" disabled={loadDbBtnDisabled} onClick={onCheckClick}>
              加载数据库列表
            </Button>
          </div>
          {databases && databases.length > 0 && (
            <Form.Item
              name="dataStore"
              label="数据库"
              rules={[
                {
                  required: true,
                  message: "必填",
                },
              ]}
            >
              <Select allowClear placeholder="请选择数据库">
                {databases.map((item) => (
                  <Select.Option key={item.path} value={item.path}>
                    {item.path}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          )}
        </Spin>
      </Modal>
    </div>
  );
};

export default PerfModal;
