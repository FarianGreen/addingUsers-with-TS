import { Layout, Space, Typography } from "antd";
import "./header.css";
import { LoginOutlined, TeamOutlined, UserOutlined } from "@ant-design/icons";
import { CustomButton } from "../custom-button";
import { Link } from "react-router-dom";
import { Path } from "../../path/path";

export const Header = () => {
  return (
    <Layout.Header className="header">
      <Space>
        <TeamOutlined className="teamIcon" />
        <Link to={Path.home}>
          <CustomButton type="ghost">
            <Typography.Title level={1}>Users</Typography.Title>
          </CustomButton>
        </Link>
      </Space>
      <Space>
        <Link to={Path.register}>
          <CustomButton type="ghost" icon={<UserOutlined />}>
            Registration
          </CustomButton>
        </Link>
        <Link to={Path.login}>
          <CustomButton type="ghost" icon={<LoginOutlined />}>
            Sign In
          </CustomButton>
        </Link>
      </Space>
    </Layout.Header>
  );
};
