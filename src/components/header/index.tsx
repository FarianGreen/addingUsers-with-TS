import { Layout, Space, Typography } from "antd";
import "./header.css";
import {
  LoginOutlined,
  LogoutOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { CustomButton } from "../custom-button";
import { Link, useNavigate } from "react-router-dom";
import { Path } from "../../path/path";
import { useAppSelector } from "../../app/hooks";
import { useDispatch } from "react-redux";
import { logOut } from "../../app/authSlice";

export const Header = () => {
  const isLogined = useAppSelector((state) => state.login.isLoggined);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogoutClick = () => {
    dispatch(logOut(false));
    localStorage.removeItem("isLoggined");
    navigate("/login");
  };
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

      {isLogined ? (
        <CustomButton
          type="ghost"
          icon={<LogoutOutlined />}
          onClick={onLogoutClick}
        >
          Log Out
        </CustomButton>
      ) : (
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
      )}
    </Layout.Header>
  );
};
