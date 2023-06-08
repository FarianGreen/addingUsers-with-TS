import { Card, Form, Space } from "antd";
import { CustomInput } from "../custom-input";
import { CustomButton } from "../custom-button";
import { Store } from "@reduxjs/toolkit";
import { IUser } from "../../interfaces/IUser";



type Props<T> = {
  onFinish: (values: T) => void;
  btnText: string;
  title: string;
  value?: any;
};
export const UserForm = ({ onFinish, title, btnText, value }: Props<IUser>) => {
  return (
    <Card title={title} style={{ width: "30rem" }}>
      <Form name="add-employee" onFinish={onFinish} initialValues={value}>
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
