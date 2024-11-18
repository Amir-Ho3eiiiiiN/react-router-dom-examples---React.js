import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./Pages/Home";
import LoginForm from "./Pages/LoginForm";
import Posts from "./Pages/Posts";
import Post from "./components/Post";
import Dashboard from "./Pages/Dashboard";
import Profiles from "./components/Profiles";
import Payments from "./components/Payments";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="app" />} />
        <Route path="/app" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<LoginForm />} />
          <Route path="posts" element={<Posts />} />
          <Route path="posts/:id" element={<Post />} />
          <Route path="dashboard" element={<Dashboard />}>
            <Route index element={<Navigate to="profile" />} />
            <Route path="profile" element={<Profiles />} />
            <Route path="payments" element={<Payments />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
