import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Explore from "./pages/Explore";
import Login from "./pages/Login";
import Join from "./pages/Join";
import EditProfile from "./pages/EditProfile";
import Settings from "./pages/Settings";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route
          path="/*"
          element={
            <>
              <Navbar />
              <div className="pt-16">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/explore" element={<Explore />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/profile/:username" element={<Profile />} />
                  <Route path="/edit-profile" element={<EditProfile />} />
                  <Route path="/settings" element={<Settings />} />
                </Routes>
              </div>
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
