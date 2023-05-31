import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { PlusCircleOutlined } from "@ant-design/icons";
import { CustomButton } from "../../components/custom-button";
import { Layout } from "../../components/layout";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useNavigate } from "react-router-dom";
import { Path } from "../../path/path";

const columns: ColumnsType<object | any> = [
  { title: "Name", dataIndex: "name", key: "firstName" },
  { title: "Age", dataIndex: "age", key: "age" },
  { title: "Profession", dataIndex: "profession", key: "profession" },
];

export const Users = () => {
  const data = useAppSelector((state) => state.users.list);
  const navigate = useNavigate();
  const goToAddUser = () => navigate(Path.userAdd);
  return (
    <Layout>
      <CustomButton
        type="primary"
        onClick={goToAddUser}
        icon={<PlusCircleOutlined />}
      >
        Add user
      </CustomButton>
      <Table
        rowKey={(record) => record.id}
        columns={columns}
        dataSource={data}
        pagination={false}
        onRow={(record) => {
          return { onClick: () => navigate(`${Path.user}/${record.id}`) };
        }}
      />
    </Layout>
  );
};
