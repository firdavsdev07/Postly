import { useState } from "react";
import { Link } from "react-router";
import { ArrowLeft, Camera, X } from "lucide-react";

function EditProfile() {
  const [formData, setFormData] = useState({
    username: "your_username",
    name: "Your Name",
    bio: "📸 Photographer | 🌍 Travel enthusiast | ☕ Coffee lover\nLiving life one adventure at a time ✨\n📍 New York, USA",
    website: "www.yourwebsite.com",
    email: "your.email@example.com",
    phoneNumber: "+1 (555) 123-4567",
    gender: "prefer-not-to-say",
  });

  const [avatar, setAvatar] = useState(
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150"
  );
  const [isLoading, setIsLoading] = useState(false);
  const [showRemovePhoto, setShowRemovePhoto] = useState(false);

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
      console.log("Profile updated:", formData);
      // Show success message or redirect
    }, 1500);
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setAvatar(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const removePhoto = () => {
    setAvatar("https://via.placeholder.com/150x150/cccccc/666666?text=No+Photo");
    setShowRemovePhoto(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-gray-200 bg-white sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/profile" className="text-gray-600 hover:text-gray-800">
                <ArrowLeft className="w-6 h-6" />
              </Link>
              <h1 className="text-xl font-semibold">Edit Profile</h1>
            </div>
            <button
              type="submit"
              form="edit-profile-form"
              disabled={isLoading}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-blue-300 transition-colors text-sm font-medium"
            >
              {isLoading ? "Saving..." : "Save"}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-8">
        {/* Profile Photo Section */}
        <div className="flex items-center space-x-6 mb-8">
          <div className="relative">
            <img
              src={avatar}
              alt="Profile"
              className="w-20 h-20 rounded-full object-cover"
            />
            <button
              onClick={() => document.getElementById("photo-upload").click()}
              className="absolute -bottom-1 -right-1 bg-blue-500 hover:bg-blue-600 text-white rounded-full p-1.5 transition-colors"
            >
              <Camera className="w-4 h-4" />
            </button>
            <input
              id="photo-upload"
              type="file"
              accept="image/*"
              onChange={handlePhotoUpload}
              className="hidden"
            />
          </div>
          <div>
            <h2 className="text-lg font-medium">{formData.username}</h2>
            <div className="flex space-x-4 mt-2">
              <button
                onClick={() => document.getElementById("photo-upload").click()}
                className="text-blue-500 hover:text-blue-600 text-sm font-medium"
              >
                Change profile photo
              </button>
              <button
                onClick={() => setShowRemovePhoto(true)}
                className="text-red-500 hover:text-red-600 text-sm font-medium"
              >
                Remove current photo
              </button>
            </div>
          </div>
        </div>

        {/* Form */}
        <form id="edit-profile-form" onSubmit={handleSubmit} className="space-y-6">
          {/* Username */}
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            />
            <p className="text-xs text-gray-500 mt-1">
              In most cases, you'll be able to change your username back to {formData.username} for another 14 days.
            </p>
          </div>

          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            />
            <p className="text-xs text-gray-500 mt-1">
              Help people discover your account by using the name you're known by: either your full name, nickname, or business name.
            </p>
          </div>

          {/* Bio */}
          <div>
            <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-2">
              Bio
            </label>
            <textarea
              id="bio"
              name="bio"
              rows={3}
              value={formData.bio}
              onChange={handleInputChange}
              maxLength={150}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm resize-none"
            />
            <p className="text-xs text-gray-500 mt-1">
              {formData.bio.length}/150
            </p>
          </div>

          {/* Website */}
          <div>
            <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-2">
              Website
            </label>
            <input
              type="url"
              id="website"
              name="website"
              value={formData.website}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              placeholder="https://www.example.com"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">
              Phone number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            />
          </div>

          {/* Gender */}
          <div>
            <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-2">
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            >
              <option value="prefer-not-to-say">Prefer not to say</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="custom">Custom</option>
            </select>
            <p className="text-xs text-gray-500 mt-1">
              This won't be part of your public profile.
            </p>
          </div>
        </form>

        {/* Additional Actions */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="space-y-4">
            <Link
              to="/accounts/password/change"
              className="block text-blue-500 hover:text-blue-600 text-sm font-medium"
            >
              Change password
            </Link>
            <button className="block text-blue-500 hover:text-blue-600 text-sm font-medium text-left">
              Apps and websites
            </button>
            <button className="block text-blue-500 hover:text-blue-600 text-sm font-medium text-left">
              Email and SMS
            </button>
            <button className="block text-blue-500 hover:text-blue-600 text-sm font-medium text-left">
              Push notifications
            </button>
            <button className="block text-blue-500 hover:text-blue-600 text-sm font-medium text-left">
              Manage contacts
            </button>
            <button className="block text-blue-500 hover:text-blue-600 text-sm font-medium text-left">
              Privacy and security
            </button>
          </div>
        </div>

        {/* Temporarily disable account */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <button className="text-blue-500 hover:text-blue-600 text-sm font-medium">
            Temporarily disable my account
          </button>
        </div>
      </div>

      {/* Remove Photo Modal */}
      {showRemovePhoto && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-sm w-full">
            <div className="p-6 text-center">
              <h3 className="text-lg font-medium mb-2">Remove Profile Photo?</h3>
              <p className="text-gray-600 text-sm mb-6">
                Are you sure you want to remove your current profile photo?
              </p>
              <div className="flex space-x-3">
                <button
                  onClick={removePhoto}
                  className="flex-1 py-2 px-4 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors text-sm font-medium"
                >
                  Remove
                </button>
                <button
                  onClick={() => setShowRemovePhoto(false)}
                  className="flex-1 py-2 px-4 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors text-sm font-medium"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default EditProfile;
