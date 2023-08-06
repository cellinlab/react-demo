import React from "react";

import { Divider } from "antd";

const Layout = () => {
  return (
    <div>
      <h2>Layout</h2>
      <hr />
      <h3>Divider</h3>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, quibusdam,
        quia, quos voluptates voluptatem quod exercitationem voluptatibus quas doloribus quidem.
        <Divider />
        Quisquam voluptatum, quibusdam, quia, quos voluptates voluptatem quod exercitationem
        voluptatibus quas doloribus quidem.
        <Divider plain>Text</Divider>
        <Divider orientation="left">Left Text</Divider>
        <Divider orientation="right">Right Text</Divider>
      </div>
    </div>
  );
};

export default Layout;
