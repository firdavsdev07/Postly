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
            <Link
              to="/accounts/password/change"
              className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
            >
              <span className="text-gray-700">Change Password</span>
              <span className="text-gray-400">›</span>
            </Link>
            <Link
              to="/accounts/login_activity"
              className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
            >
              <span className="text-gray-700">Login Activity</span>
              <span className="text-gray-400">›</span>
            </Link>
            <Link
              to="/accounts/emails_sent"
              className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
            >
              <span className="text-gray-700">Emails from Postly</span>
              <span className="text-gray-400">›</span>
            </Link>
          </div>
        </div>

        {/* Privacy Section */}
        <div className="bg-white rounded-lg border border-gray-200 mb-6">
          <div className="p-4 border-b border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900 flex items-center">
              <Shield className="w-5 h-5 mr-2" />
              Privacy
            </h2>
          </div>
          <div className="divide-y divide-gray-100">
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-700 font-medium">
                  Account Privacy
                </span>
              </div>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="accountPrivacy"
                    value="public"
                    checked={privacy.accountPrivacy === "public"}
                    onChange={(e) =>
                      handlePrivacyChange("accountPrivacy", e.target.value)
                    }
                    className="w-4 h-4 text-blue-500 border-gray-300 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">Public</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="accountPrivacy"
                    value="private"
                    checked={privacy.accountPrivacy === "private"}
                    onChange={(e) =>
                      handlePrivacyChange("accountPrivacy", e.target.value)
                    }
                    className="w-4 h-4 text-blue-500 border-gray-300 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">Private</span>
                </label>
              </div>
            </div>

            <div className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-gray-700 font-medium">
                    Activity Status
                  </span>
                  <p className="text-sm text-gray-500">
                    Show when you're active
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={privacy.activityStatus}
                    onChange={() =>
                      handlePrivacyChange(
                        "activityStatus",
                        !privacy.activityStatus,
                      )
                    }
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                </label>
              </div>
            </div>

            <Link
              to="/accounts/privacy/blocked_accounts"
              className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
            >
              <span className="text-gray-700">Blocked Accounts</span>
              <span className="text-gray-400">›</span>
            </Link>
            <Link
              to="/accounts/privacy/close_friends"
              className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
            >
              <span className="text-gray-700">Close Friends</span>
              <span className="text-gray-400">›</span>
            </Link>
          </div>
        </div>

        {/* Notifications Section */}
        <div className="bg-white rounded-lg border border-gray-200 mb-6">
          <div className="p-4 border-b border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900 flex items-center">
              <Bell className="w-5 h-5 mr-2" />
              Notifications
            </h2>
          </div>
          <div className="divide-y divide-gray-100">
            <div className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Heart className="w-4 h-4 mr-2 text-gray-500" />
                  <span className="text-gray-700">Likes</span>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={notifications.likes}
                    onChange={() => handleNotificationChange("likes")}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                </label>
              </div>
            </div>

            <div className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <MessageCircle className="w-4 h-4 mr-2 text-gray-500" />
                  <span className="text-gray-700">Comments</span>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={notifications.comments}
                    onChange={() => handleNotificationChange("comments")}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                </label>
              </div>
            </div>

            <div className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-2 text-gray-500" />
                  <span className="text-gray-700">New Followers</span>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={notifications.followers}
                    onChange={() => handleNotificationChange("followers")}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                </label>
              </div>
            </div>

            <div className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Smartphone className="w-4 h-4 mr-2 text-gray-500" />
                  <span className="text-gray-700">Push Notifications</span>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={notifications.pushNotifications}
                    onChange={() =>
                      handleNotificationChange("pushNotifications")
                    }
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                </label>
              </div>
            </div>

            <div className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2 text-gray-500" />
                  <span className="text-gray-700">Email Notifications</span>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={notifications.emailNotifications}
                    onChange={() =>
                      handleNotificationChange("emailNotifications")
                    }
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Security Section */}
        {/* <div className="bg-white rounded-lg border border-gray-200 mb-6">
          <div className="p-4 border-b border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900 flex items-center">
              <Lock className="w-5 h-5 mr-2" />
              Security
            </h2>
          </div>
          <div className="divide-y divide-gray-100">
            <Link
              to="/accounts/two_factor_authentication"
              className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
            >
              <span className="text-gray-700">Two-Factor Authentication</span>
              <span className="text-gray-400">›</span>
            </Link>
            <Link
              to="/accounts/login_activity"
              className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
            >
              <span className="text-gray-700">Login Activity</span>
              <span className="text-gray-400">›</span>
            </Link>
            <Link
              to="/accounts/connected_apps"
              className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
            >
              <span className="text-gray-700">Apps and Websites</span>
              <span className="text-gray-400">›</span>
            </Link>
          </div>
        </div>*/}

        {/* Data and Storage Section */}
        {/* <div className="bg-white rounded-lg border border-gray-200 mb-6">
          <div className="p-4 border-b border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900 flex items-center">
              <Download className="w-5 h-5 mr-2" />
              Data and Storage
            </h2>
          </div>
          <div className="divide-y divide-gray-100">
            <Link
              to="/accounts/download"
              className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
            >
              <span className="text-gray-700">Download Your Data</span>
              <span className="text-gray-400">›</span>
            </Link>
            <Link
              to="/accounts/data_policy"
              className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
            >
              <span className="text-gray-700">Data Policy</span>
              <span className="text-gray-400">›</span>
            </Link>
            <Link
              to="/accounts/storage"
              className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
            >
              <span className="text-gray-700">Storage Usage</span>
              <span className="text-gray-400">›</span>
            </Link>
          </div>
        </div>*/}

        {/* Help and Support Section */}
        {/* <div className="bg-white rounded-lg border border-gray-200 mb-6">
          <div className="p-4 border-b border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900 flex items-center">
              <HelpCircle className="w-5 h-5 mr-2" />
              Help and Support
            </h2>
          </div>
          <div className="divide-y divide-gray-100">
            <Link
              to="/help"
              className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
            >
              <span className="text-gray-700">Help Center</span>
              <span className="text-gray-400">›</span>
            </Link>
            <Link
              to="/support"
              className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
            >
              <span className="text-gray-700">Contact Support</span>
              <span className="text-gray-400">›</span>
            </Link>
            <Link
              to="/report"
              className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
            >
              <span className="text-gray-700">Report a Problem</span>
              <span className="text-gray-400">›</span>
            </Link>
          </div>
        </div>*/}

        {/* About Section */}
        {/* <div className="bg-white rounded-lg border border-gray-200 mb-6">
          <div className="p-4 border-b border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900 flex items-center">
              <Globe className="w-5 h-5 mr-2" />
              About
            </h2>
          </div>
          <div className="divide-y divide-gray-100">
            <Link
              to="/legal/terms"
              className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
            >
              <span className="text-gray-700">Terms of Service</span>
              <span className="text-gray-400">›</span>
            </Link>
            <Link
              to="/legal/privacy"
              className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
            >
              <span className="text-gray-700">Privacy Policy</span>
              <span className="text-gray-400">›</span>
            </Link>
            <div className="flex items-center justify-between p-4">
              <span className="text-gray-700">Version</span>
              <span className="text-gray-500 text-sm">1.0.0</span>
            </div>
          </div>
        </div>*/}

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
              <span className="text-red-600">Temporarily Disable Account</span>
              <span className="text-red-400">›</span>
            </button>
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
