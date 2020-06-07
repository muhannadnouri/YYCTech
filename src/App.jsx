import React, { useState } from "react";
import "./styles.css";
import "antd/dist/antd.css";
import { Menu } from "antd";
import { MailOutlined, AppstoreOutlined } from "@ant-design/icons";

import DataTable from "./DataTable";

export default function App() {
  const [current, setCurrent] = useState("about");
  // onst [theme, setTheme] = useState("dark");

  const handleClick = e => {
    // console.log("Click ", e);
    setCurrent(e.key);
  };

  return (
    <>
      <Menu
        onClick={e => handleClick(e)}
        selectedKeys={[current]}
        mode="horizontal"
        theme={"dark"}
      >
        <Menu.Item key="home" icon={<AppstoreOutlined />}>
          Home
        </Menu.Item>
        <Menu.Item key="about" icon={<MailOutlined />}>
          About
        </Menu.Item>
        <Menu.Item key="contact">
          <a
            href="https://muhannadnouri.com/contact/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact
          </a>
        </Menu.Item>
      </Menu>
      {current === "home" && <DataTable />}
      {current === "about" && (
        <div className="App">
          <h1 style={{ textAlign: "center" }}>Welcome</h1>
          <h2>
            This website is a collection of both tech and non-tech companies in
            Calgary that are looking for software professionals!
          </h2>
        </div>
      )}
    </>
  );
}
