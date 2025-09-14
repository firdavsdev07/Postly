import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Explore from "./pages/Explore";
import Login from "./pages/Login";
import Join from "./pages/Join";
import EditProfile from "./pages/EditProfile";
import Settings from "./pages/Settings";
import Navbar from "./components/Navbar";
import { AuthContenxt } from "./context/AuthContext";
import { useState } from "react";
import { PrivateRoute, PublicRoute } from "./routes/RouteGuards";

function App() {
  const [user, setUser] = useState({
    email: "",
    fullName: "",
    username: "",
    password: "",
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <AuthContenxt.Provider value={[user, setUser]}>
        <Routes>
          {/* Public Routes */}
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/join"
            element={
              <PublicRoute>
                <Join />
              </PublicRoute>
            }
          />

          {/* Private Routes */}
          <Route
            path="/*"
            element={
              <PrivateRoute>
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
              </PrivateRoute>
            }
          />
        </Routes>
      </AuthContenxt.Provider>
    </div>
  );
}

export default App;
