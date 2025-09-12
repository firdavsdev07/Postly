import { useState } from "react";
import { Link } from "react-router";
import { Eye, EyeOff } from "lucide-react";

function Join() {
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    username: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Handle signup logic here
      console.log("Signup attempt:", formData);
    }, 1500);
  };

  const isFormValid =
    formData.email &&
    formData.fullName &&
    formData.username &&
    formData.password;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        {/* Logo */}
        <div className="flex justify-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Postly</h1>
        </div>

        {/* Sign Up Form */}
        <div className="bg-white py-8 px-4 shadow border border-gray-300 sm:rounded-lg sm:px-10">
          <div className="text-center mb-6">
            <p className="text-lg font-semibold text-gray-600 mb-2">
              Sign up to see photos and videos from your friends.
            </p>
          </div>

          {/* Facebook Sign Up */}
          <div className="mb-4">
            <button
              type="button"
              className="w-full flex justify-center items-center py-2 px-4 border border-transparent text-sm font-semibold rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Log in with Facebook
            </button>
          </div>

          {/* OR Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500 font-semibold">
                OR
              </span>
            </div>
          </div>

          <form className="space-y-3" onSubmit={handleSubmit}>
            {/* Email Input */}
            <div>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 text-sm bg-gray-50"
                placeholder="Mobile number or email"
              />
            </div>

            {/* Full Name Input */}
            <div>
              <input
                id="fullName"
                name="fullName"
                type="text"
                autoComplete="name"
                required
                value={formData.fullName}
                onChange={handleInputChange}
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 text-sm bg-gray-50"
                placeholder="Full name"
              />
            </div>

            {/* Username Input */}
            <div>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                value={formData.username}
                onChange={handleInputChange}
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 text-sm bg-gray-50"
                placeholder="Username"
              />
            </div>

            {/* Password Input */}
            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="new-password"
                required
                value={formData.password}
                onChange={handleInputChange}
                className="appearance-none relative block w-full px-3 py-2 pr-12 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 text-sm bg-gray-50"
                placeholder="Password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4 text-gray-400" />
                ) : (
                  <Eye className="h-4 w-4 text-gray-400" />
                )}
              </button>
            </div>

            {/* Terms and Privacy */}
            <div className="text-center text-xs text-gray-500 my-4 px-4">
              <p>
                By signing up, you agree to our{" "}
                <Link to="/terms" className="text-blue-600 hover:text-blue-500">
                  Terms
                </Link>
                ,{" "}
                <Link
                  to="/privacy"
                  className="text-blue-600 hover:text-blue-500"
                >
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <Link
                  to="/cookies"
                  className="text-blue-600 hover:text-blue-500"
                >
                  Cookies Policy
                </Link>
                .
              </p>
            </div>

            {/* Sign Up Button */}
            <div>
              <button
                type="submit"
                disabled={!isFormValid || isLoading}
                className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors ${
                  isFormValid && !isLoading
                    ? "bg-blue-500 hover:bg-blue-600"
                    : "bg-blue-300 cursor-not-allowed"
                }`}
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Signing up...
                  </div>
                ) : (
                  "Sign up"
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Log In Link */}
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

        {/* Get the App */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600 mb-4">Get the app.</p>
          <div className="flex justify-center space-x-3">
            <a href="#" className="inline-block">
              <img
                className="h-10"
                src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"
                alt="Download on the App Store"
              />
            </a>
            <a href="#" className="inline-block">
              <img
                className="h-10"
                src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"
                alt="Get it on Google Play"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Join;
