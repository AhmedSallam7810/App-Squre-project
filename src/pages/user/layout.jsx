import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Layout, Menu, Button, theme } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../store/actions";
const { Header, Sider, Content } = Layout;

function RootLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector((state) => state.data);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const layoutstyle = {
    height: "100vh",
  };
  const menustlyle = {
    paddingTop: "4rem",
    backgroundColor: "#333",
  };
  return (
    <Layout style={layoutstyle}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{ backgroundColor: "#333" }}
      >
        <div className="demo-logo-vertical"></div>
        <Menu
          style={menustlyle}
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: <Link to="/user/table">clients table</Link>,
            },
            {
              key: "2",
              icon: <LogoutOutlined />,
              label: (
                <Link
                  onClick={() => {
                    dispatch(logout());
                    navigate("/");
                  }}
                >
                  logout
                </Link>
              ),
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />

          <span
            className="social-icons"
            style={{ display: "flex", marginRight: "40px" }}
          >
            <Link to="#">
              <span style={{ fontSize: "17.5px", marginRight: "10px" }}>
                {data.name}
              </span>
              <i>
                <FaUserCircle />
              </i>
            </Link>
          </span>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}
export default RootLayout;
