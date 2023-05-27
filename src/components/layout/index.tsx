import { Layout as AntLayout } from "antd";
import { Header } from "../header";
import "./layout.css"

type Props = {
  children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <div className="layout_main__styles">
      <Header/>
      <AntLayout.Content style={{ height: "100%" }}>
        {children}
      </AntLayout.Content>
    </div>
  );
};
