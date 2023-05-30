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
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.users.list);
  const navigate = useNavigate();
  return (
    <Layout>
      <CustomButton
        type="primary"
        onClick={() => null}
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
          return { onClick: () => navigate(`${Path.emploee}/${record.id}`) };
        }}
      />
    </Layout>
  );
};
