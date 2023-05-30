import { Card, Form, Row, Space, Typography } from "antd";
import { Layout } from "../../components/layout";
import { CustomInput } from "../../components/custom-input";
import { PasswordInput } from "../../components/custom-password-input";
import { CustomButton } from "../../components/custom-button";
import { Link } from "react-router-dom";
import { Path } from "../../path/path";

export const Register = () => {
  return (
    <Layout>
      <Row align="middle" justify="center">
        <Card title="Register" style={{ width: "30rem" }}>
          <Form onFinish={() => null}>
            <CustomInput name="name" placeholder="Name" />
            <CustomInput type="email" name="email" placeholder="Email" />
            <PasswordInput name="password" placeholder="Password" />
            <PasswordInput
              name="confirmPassword"
              placeholder="Repeat password"
            />
            <CustomButton type="primary" htmlType="submit">
              Registrate
            </CustomButton>
          </Form>
          <Space direction="vertical" size="large">
            <Typography.Text>
              Already registered ? <Link to={Path.login}>Sign in</Link>
            </Typography.Text>
          </Space>
        </Card>
      </Row>
    </Layout>
  );
};
