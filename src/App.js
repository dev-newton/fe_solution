import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import Signup1 from "./pages/Signup/Signup1";
import Signup2 from "./pages/Signup/Signup2";
import Signin from "./pages/Signin/Signin";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./pages/Dashboard/Dashboard";

import "./styles/style.css";
import "./styles/util.css";

const App = () => {
  const location = useLocation();
  const checkPathname = (pathname) => location.pathname.includes(pathname);

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/signup_1" />} />
      <Route
        path="/"
        element={
          <Sidebar background={checkPathname("signup") ? "bg1" : "bg2"} />
        }
      >
        <Route path="signup_1" element={<Signup1 />} />
        <Route path="signup_2" element={<Signup2 />} />
        <Route path="signin" element={<Signin />} />
      </Route>
      <Route path="/dashboard" element={<Sidebar background="bg1" />}>
        <Route path="/dashboard/home" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default App;
