import { Row } from "antd";
import { Layout } from "../../components/layout";
import { UserForm } from "../../components/user-form";
import { useAppDispatch } from "../../app/hooks";
import { addUsers } from "../../app/addSlice";
import { useNavigate } from "react-router-dom";
import { Path } from "../../path/path";

type Users = {
  id: string;
  name: string;
  age: string;
  profession: string;
};

export const AddUser = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleAddUser = (value: Users) => {
    dispatch(addUsers(value));
    navigate(Path.home);
  };

  return (
    <Layout>
      <Row align="middle" justify="center">
        <UserForm onFinish={handleAddUser} title="Add User" btnText="Add" />
      </Row>
    </Layout>
  );
};
