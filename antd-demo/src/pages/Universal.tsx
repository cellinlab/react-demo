import React from "react";

import { Button, Space } from "antd";
import {
  SearchOutlined,
  PlayCircleFilled,
  PlayCircleOutlined,
  PlayCircleTwoTone,
} from "@ant-design/icons";

const Universal = () => {
  return (
    <div>
      <h2>Universal</h2>
      <hr />
      <h3>Button</h3>
      <Space direction="vertical">
        <Space>
          <Button type="primary">Primary Button</Button>
          <Button>Default Button</Button>
          <Button type="dashed">Dashed Button</Button>
          <Button type="text">Text Button</Button>
          <Button type="link">Link Button</Button>
        </Space>
        <Space>
          <Button type="primary" shape="circle" icon={<SearchOutlined />} />
          <Button type="primary" icon={<SearchOutlined />}>
            Search
          </Button>
        </Space>
      </Space>
      <h3>Icon</h3>
      <Space>
        <PlayCircleFilled />
        <PlayCircleOutlined />
        <PlayCircleTwoTone />
      </Space>
    </div>
  );
};

export default Universal;
