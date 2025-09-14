import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router";
import { Eye, EyeOff } from "lucide-react";
import { AuthContenxt } from "../context/AuthContext";

function Login() {
  const [user, setUser] = useContext(AuthContenxt);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const initialUserState = {
    username: "",
    password: "",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
      const data = await response.json();
      console.log(data);
      const { username, _id } = data.user;
      localStorage.setItem("username", username);
      localStorage.setItem("_id", _id);

      setUser(initialUserState);

      navigate("/profile");
    } catch (err) {
      console.error(err.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        {/* Logo */}
        <div className="flex justify-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Postly</h1>
        </div>

        {/* Login Form */}
        <div className="bg-white py-8 px-4 shadow border border-gray-300 sm:rounded-lg sm:px-10">
          <div className="text-center mb-6">
            <p className="text-lg font-semibold text-gray-600 mb-2">Sign in</p>
          </div>
          <form className="space-y-4" onSubmit={handleLogin}>
            {/* Username Input */}
            <div>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                value={user.username || ""}
                onChange={handleChange}
                required
                className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 text-sm bg-gray-50"
                placeholder="Phone number, username, or email"
              />
            </div>

            {/* Password Input */}
            <div className="relative">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                value={user.password || ""}
                onChange={handleChange}
                required
                className="appearance-none relative block w-full px-3 py-3 pr-12 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 text-sm bg-gray-50"
                placeholder="Password"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              ></button>
            </div>

            {/* Login Button */}
            <div>
              <button
                type="submit"
                disabled={loading}
                className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-500 hover:bg-blue-600"
                }`}
              >
                {loading ? "Loading..." : "Login"}
              </button>
            </div>

            {/* Forgot Password */}
            {/* <div className="text-center">
              <Link
                to="/forgot-password"
                className="text-sm text-blue-600 hover:text-blue-500"
              >
                Forgot password?
              </Link>
            </div>*/}
          </form>
        </div>

        {/* Sign Up Link */}
        <div className="mt-6 bg-white py-4 px-4 shadow border border-gray-300 sm:rounded-lg sm:px-10 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/join"
              className="font-semibold text-blue-600 hover:text-blue-500"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
