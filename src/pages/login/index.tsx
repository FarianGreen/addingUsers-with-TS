import { Card, Form, Row, Space, Typography } from "antd";
import { Layout } from "../../components/layout";
import { CustomInput } from "../../components/custom-input";
import { PasswordInput } from "../../components/custom-password-input";
import { CustomButton } from "../../components/custom-button";
import { Link, useNavigate } from "react-router-dom";
import { Path } from "../../path/path";
import { useDispatch } from "react-redux";
import { logIn } from "../../app/authSlice";

export const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const onFinish = (values: any) => {
    navigate('/')
    dispatch(logIn(true))
  };
  return (
    <Layout>
      <Row align="middle" justify="center">
        <Card title="Welcome" style={{ width: "30rem" }}>
          <Form onFinish={onFinish}>
            <CustomInput type="email" name="email" placeholder="Email" />
            <PasswordInput name="password" placeholder="Password" />
            <CustomButton type="primary" htmlType="submit">
              Sign in
            </CustomButton>
          </Form>
          <Space direction="vertical" size="large">
            <Typography.Text>
              Maby register ? <Link to={Path.register}>Register</Link>
            </Typography.Text>
          </Space>
        </Card>
      </Row>
    </Layout>
  );
};
