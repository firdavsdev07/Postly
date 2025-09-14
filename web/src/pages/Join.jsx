import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { Eye, EyeOff } from "lucide-react";
import { AuthContenxt } from "../context/AuthContext";

function Join() {
  const [user, setUser] = useContext(AuthContenxt);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };
  const initialUserState = {
    email: "",
    fullName: "",
    username: "",
    password: "",
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("http://localhost:3000/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      const data = await response.json();

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
        <div className="flex justify-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Postly</h1>
        </div>

        <div className="bg-white py-8 px-4 shadow border border-gray-300 sm:rounded-lg sm:px-10">
          <div className="text-center mb-6">
            <p className="text-lg font-semibold text-gray-600 mb-2">Sign up</p>
          </div>

          <form className="space-y-3" onSubmit={handleSubmit}>
            {/* Email */}
            <div>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={user.email || ""}
                onChange={handleChange}
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 text-sm bg-gray-50"
                placeholder="Mobile number or email"
              />
            </div>

            {/* Full Name */}
            <div>
              <input
                id="fullName"
                name="fullName"
                type="text"
                autoComplete="name"
                required
                value={user.fullName || ""}
                onChange={handleChange}
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 text-sm bg-gray-50"
                placeholder="Full name"
              />
            </div>

            {/* Username */}
            <div>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                value={user.username || ""}
                onChange={handleChange}
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 text-sm bg-gray-50"
                placeholder="Username"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                value={user.password || ""}
                onChange={handleChange}
                className="appearance-none relative block w-full px-3 py-2 pr-12 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 text-sm bg-gray-50"
                placeholder="Password"
              />
            </div>

            {/* Submit */}
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
                {loading ? "Loading..." : "Sign up"}
              </button>
            </div>
          </form>
        </div>

        <div className="mt-6 bg-white py-4 px-4 shadow border border-gray-300 sm:rounded-lg sm:px-10 text-center">
          <p className="text-sm text-gray-600">
            Have an account?{" "}
            <Link
              to="/login"
              className="font-semibold text-blue-600 hover:text-blue-500"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Join;
