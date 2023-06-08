import { ConfigProvider, theme } from "antd";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Path } from "./path/path";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { Users } from "./pages/users";
import { AddUser } from "./pages/add-user";
import { User } from "./pages/user";
import { Status } from "./pages/status";
import { EditUser } from "./pages/edit-user";
const router = createBrowserRouter([
  { path: Path.home, element: <Users /> },
  { path: Path.login, element: <Login /> },
  { path: Path.register, element: <Register /> },
  { path: Path.userAdd, element: <AddUser /> },
  { path: `${Path.user}/:id`, element: <User /> },
  { path: `${Path.status}/:status`, element: <Status /> },
  { path: `${Path.usersEdit}/:id`, element: <EditUser /> },
]);
function App() {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
      }}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  );
}

export default App;
