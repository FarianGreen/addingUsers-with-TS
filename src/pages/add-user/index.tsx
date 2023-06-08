import { Row } from "antd";
import { Layout } from "../../components/layout";
import { UserForm } from "../../components/user-form";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { addUser } from "../../app/addSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Path } from "../../path/path";
import { IUser } from "../../interfaces/IUser";

export const AddUser = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const logined = useAppSelector((state) => state.login.isLoggined);

  useEffect(() => {
    if (!logined) {
      navigate("/login");
    }
  }, [logined, navigate]);

  const handleAddUser = (value: IUser) => {
    dispatch(addUser(value));
    navigate(`${Path.status}/created`);
  };

  return (
    <Layout>
      <Row align="middle" justify="center">
        <UserForm onFinish={handleAddUser} title="Add User" btnText="Add" />
      </Row>
    </Layout>
  );
};
