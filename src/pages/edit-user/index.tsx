import { useNavigate, useParams } from "react-router-dom";
import { Layout } from "../../components/layout";
import { Row } from "antd";
import { UserForm } from "../../components/user-form";
import { useAppSelector } from "../../app/hooks";
import { useDispatch } from "react-redux";
import { editUser } from "../../app/addSlice";
import { IUser } from "../../interfaces/IUser";
import { Path } from "../../path/path";

export const EditUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const user = useAppSelector((state) => {
    const users = state.users.list;
    const selectUser = users.find((user) => user.id === id);
    return selectUser;
  });

  const handleEditUser = (value: IUser) => {
    dispatch(editUser({...value, id}));
    navigate(`${Path.status}/updated`)
  };
  return (
    <Layout>
      <Row align="middle" justify="center">
        <UserForm
          onFinish={handleEditUser}
          title="Edit user"
          value={user}
          btnText="Edit"
        />
      </Row>
    </Layout>
  );
};
