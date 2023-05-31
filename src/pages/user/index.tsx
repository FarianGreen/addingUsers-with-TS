import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { Layout } from "../../components/layout";
import { Descriptions, Divider, Space } from "antd";
import { CustomButton } from "../../components/custom-button";
import { DeleteOutlined } from "@ant-design/icons";
import { removeUsers } from "../../app/addSlice";
import { Path } from "../../path/path";

export const User = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const user = useAppSelector((state) => {
    const users = state.users.list;
    const selectUser = users.find((user) => user.id === id);
    return selectUser;
  });

  if (!id) {
    return <Navigate to="/" />;
  }

  const deleteUser = () => {
    dispatch(removeUsers(id));
    navigate(Path.home);
  };

  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <Layout>
      <Descriptions title="Информация о сотруднике" bordered>
        <Descriptions.Item
          label="Name"
          span={3}
        >{`${user.name}`}</Descriptions.Item>
        <Descriptions.Item label="Age" span={3}>
          {user.age}
        </Descriptions.Item>
        <Descriptions.Item label="Profession" span={3}>
          {user.profession}
        </Descriptions.Item>
      </Descriptions>
      {user?.id === user.id && (
        <>
          <Divider orientation="left">Actions</Divider>
          <Space>
            <CustomButton
              shape="round"
              danger
              onClick={deleteUser}
              icon={<DeleteOutlined />}
            >
              Delete
            </CustomButton>
          </Space>
        </>
      )}
    </Layout>
  );
};
