import Topbar from "./components/Topbar/Topbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import {Routes, Route } from "react-router-dom";

function App() {
  const user=false;
  return (
    <>
      <Topbar />
      <Routes>
        <Route path="/" element={<Home/>}></Route>

        <Route path="/register" element={user?<Home/>:<Register/>}></Route>
        <Route path="/login" element={user?<Home/>:<Login/>}></Route>
        <Route path="/write" element={user?<Write/>:<Register/>}></Route>
        <Route path="/settings" element={user?<Settings/>:<Register/>}></Route>
        <Route path="/post/:postid" element={<Single/>}></Route>
      </Routes>
    </>
  );
}

export default App;
