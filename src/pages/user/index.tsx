import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { Layout } from "../../components/layout";
import { Descriptions, Divider, Space } from "antd";
import { CustomButton } from "../../components/custom-button";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { removeUser } from "../../app/addSlice";
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
    dispatch(removeUser(id));
    navigate(`${Path.status}/deleted`);
  };

  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <Layout>
      <Descriptions title="User information" bordered>
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

            <Link to={`/user/edit/${user.id}`}>
              <CustomButton
                shape="round"
                type="default"
                icon={<EditOutlined />}
              >
                Edit
              </CustomButton>
            </Link>
          </Space>
        </>
      )}
    </Layout>
  );
};
