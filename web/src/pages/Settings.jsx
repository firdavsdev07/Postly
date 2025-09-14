import { useState } from "react";
import { Link } from "react-router";
import {
  ArrowLeft,
  Shield,
  Bell,
  Eye,
  Download,
  Heart,
  MessageCircle,
  Users,
  Lock,
  Smartphone,
  Mail,
  Globe,
  HelpCircle,
  AlertTriangle,
} from "lucide-react";

function Settings() {
  const [notifications, setNotifications] = useState({
    likes: true,
    comments: true,
    followers: true,
    directMessages: true,
    emailNotifications: false,
    pushNotifications: true,
  });

  const [privacy, setPrivacy] = useState({
    accountPrivacy: "public",
    activityStatus: true,
    storySharing: true,
    allowTagging: "everyone",
    allowMentions: "everyone",
  });

  const handleNotificationChange = (key) => {
    setNotifications((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handlePrivacyChange = (key, value) => {
    setPrivacy((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="border-b border-gray-200 bg-white sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center space-x-4">
            <Link to="/profile" className="text-gray-600 hover:text-gray-800">
              <ArrowLeft className="w-6 h-6" />
            </Link>
            <h1 className="text-xl font-semibold">Settings</h1>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-6">
        {/* Account Section */}
        <div className="bg-white rounded-lg border border-gray-200 mb-6">
          <div className="p-4 border-b border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900 flex items-center">
              <Users className="w-5 h-5 mr-2" />
              Account
            </h2>
          </div>
          <div className="divide-y divide-gray-100">
            <Link
              to="/edit-profile"
              className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
            >
              <span className="text-gray-700">Edit Profile</span>
              <span className="text-gray-400">›</span>
            </Link>
          </div>
        </div>

        {/* Dangerous Actions */}
        <div className="bg-white rounded-lg border border-red-200 mb-6">
          <div className="p-4 border-b border-red-100">
            <h2 className="text-lg font-semibold text-red-600 flex items-center">
              <AlertTriangle className="w-5 h-5 mr-2" />
              Account Actions
            </h2>
          </div>
          <div className="divide-y divide-red-100">
            <button className="flex items-center justify-between w-full p-4 hover:bg-red-50 transition-colors text-left">
              <span className="text-red-600">Delete Account</span>
              <span className="text-red-400">›</span>
            </button>
          </div>
        </div>

        {/* Logout Button */}
        <div className="mb-8">
          <button className="w-full py-3 px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors font-medium">
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}

export default Settings;
