import { ConfigProvider, theme } from "antd";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Path } from "./path/path";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
const router = createBrowserRouter([
  { path: Path.home, element: <h1>Home</h1> },
  { path: Path.login, element: <Login /> },
  { path: Path.register, element: <Register /> },
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
