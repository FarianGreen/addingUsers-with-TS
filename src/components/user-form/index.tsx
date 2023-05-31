import { Card, Form, Space } from "antd";
import { CustomInput } from "../custom-input";
import { CustomButton } from "../custom-button";

type User = {
  id: string;
  name: string;
  age: string;
  profession: string;
};

type Props<T> = {
  onFinish: (value: User) => void;
  btnText: string;
  title: string;
};
export const UserForm = ({ onFinish, title, btnText }: Props<User>) => {
  return (
    <Card title={title} style={{ width: "30rem" }}>
      <Form name="add-employee" onFinish={onFinish}>
        <CustomInput type="text" name="name" placeholder="Name" />
        <CustomInput type="number" name="age" placeholder="Age" />
        <CustomInput name="profession" placeholder="Profession" />
        <Space direction="vertical" size="large">
          <CustomButton htmlType="submit">{btnText}</CustomButton>
        </Space>
      </Form>
    </Card>
  );
};
