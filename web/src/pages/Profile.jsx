import { useState } from "react";
import { useParams, Link } from "react-router";
import { Grid, Heart, Bookmark, Settings } from "lucide-react";

function Profile() {
  const { username } = useParams();
  const isOwnProfile = !username; // If no username in URL, it's user's own profile

  const [activeTab, setActiveTab] = useState("posts");
  const [isFollowing, setIsFollowing] = useState(false);

  const [userProfile] = useState({
    username: username || "your_username",
    displayName: "Your Name",
    bio: "📸 Photographer | 🌍 Travel enthusiast | ☕ Coffee lover\nLiving life one adventure at a time ✨\n📍 New York, USA",
    website: "www.yourwebsite.com",

    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150",
    isVerified: true,
  });

  const [posts] = useState([
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400",
      likes: 1247,
      comments: 23,
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      likes: 892,
      comments: 15,
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400",
      likes: 2156,
      comments: 87,
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400",
      likes: 3421,
      comments: 124,
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400",
      likes: 756,
      comments: 34,
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=400",
      likes: 1892,
      comments: 67,
    },
    {
      id: 7,
      image:
        "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400",
      likes: 945,
      comments: 28,
    },
    {
      id: 8,
      image:
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400",
      likes: 2341,
      comments: 156,
    },
    {
      id: 9,
      image:
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400",
      likes: 1678,
      comments: 89,
    },
  ]);

  const [savedPosts] = useState([
    {
      id: 10,
      image:
        "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400",
      likes: 834,
      comments: 42,
    },
    {
      id: 11,
      image:
        "https://images.unsplash.com/photo-1485217988980-11786ced9454?w=400",
      likes: 1456,
      comments: 73,
    },
    {
      id: 12,
      image:
        "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=400",
      likes: 2987,
      comments: 201,
    },
  ]);

  const formatCount = (count) => {
    if (count >= 1000000) {
      return (count / 1000000).toFixed(1) + "M";
    } else if (count >= 1000) {
      return (count / 1000).toFixed(1) + "K";
    }
    return count.toString();
  };

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      {/* Profile Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center mb-8 space-y-6 md:space-y-0 md:space-x-8">
        {/* Profile Picture */}
        <div className="flex-shrink-0">
          <img
            src={userProfile.avatar}
            alt={userProfile.username}
            className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover"
          />
        </div>

        {/* Profile Info */}
        <div className="flex-1">
          {/* Username and Actions */}
          <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-4">
            <div className="flex items-center space-x-2">
              <h1 className="text-2xl font-light">{userProfile.username}</h1>
              {userProfile.isVerified && (
                <svg
                  className="w-5 h-5 text-blue-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </div>

            <div className="flex space-x-3">
              {isOwnProfile ? (
                <>
                  <Link
                    to="/edit-profile"
                    className="px-4 py-1 bg-gray-200 text-black rounded text-sm font-medium hover:bg-gray-300 transition-colors"
                  >
                    Edit Profile
                  </Link>
                  <Link
                    to="/settings"
                    className="px-4 py-1 bg-gray-200 text-black rounded text-sm font-medium hover:bg-gray-300 transition-colors flex items-center space-x-1"
                  >
                    <Settings className="w-4 h-4" />
                    <span>Settings</span>
                  </Link>
                </>
              ) : (
                <>
                  <button
                    onClick={handleFollow}
                    className={`px-4 py-1 rounded text-sm font-medium transition-colors ${
                      isFollowing
                        ? "bg-gray-200 text-black hover:bg-gray-300"
                        : "bg-blue-500 text-white hover:bg-blue-600"
                    }`}
                  >
                    {isFollowing ? "Following" : "Follow"}
                  </button>
                  <button className="px-4 py-1 bg-gray-200 text-black rounded text-sm font-medium hover:bg-gray-300 transition-colors">
                    Message
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-1">
            <div className="font-semibold">{userProfile.displayName}</div>
            <div className="text-sm whitespace-pre-line">{userProfile.bio}</div>
            {userProfile.website && (
              <a
                href={`https://${userProfile.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 text-sm hover:underline"
              >
                {userProfile.website}
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Highlights/Stories */}
      <div className="flex space-x-6 overflow-x-auto mb-8 pb-2">
        {["Travel", "Food", "Nature", "Art"].map((highlight, index) => (
          <div
            key={index}
            className="flex flex-col items-center space-y-1 flex-shrink-0"
          >
            <div className="w-16 h-16 rounded-full bg-gray-200 border-2 border-gray-300 flex items-center justify-center">
              <span className="text-2xl">
                {highlight === "Travel" && "✈️"}
                {highlight === "Food" && "🍕"}
                {highlight === "Nature" && "🌲"}
                {highlight === "Art" && "🎨"}
              </span>
            </div>
            <span className="text-xs text-center">{highlight}</span>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="border-t border-gray-300">
        <div className="flex justify-center space-x-16">
          <button
            onClick={() => setActiveTab("posts")}
            className={`py-3 text-sm font-medium flex items-center space-x-1 ${
              activeTab === "posts"
                ? "border-t border-black text-black"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            <Grid className="w-4 h-4" />
            <span>POSTS</span>
          </button>

          {isOwnProfile && (
            <button
              onClick={() => setActiveTab("saved")}
              className={`py-3 text-sm font-medium flex items-center space-x-1 ${
                activeTab === "saved"
                  ? "border-t border-black text-black"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <Bookmark className="w-4 h-4" />
              <span>SAVED</span>
            </button>
          )}

          <button
            onClick={() => setActiveTab("liked")}
            className={`py-3 text-sm font-medium flex items-center space-x-1 ${
              activeTab === "liked"
                ? "border-t border-black text-black"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            <Heart className="w-4 h-4" />
            <span>LIKED</span>
          </button>
        </div>
      </div>

      {/* Posts Grid */}
      <div className="mt-4">
        {activeTab === "posts" && (
          <div className="grid grid-cols-3 gap-1 md:gap-4">
            {posts.map((post) => (
              <div
                key={post.id}
                className="relative aspect-square cursor-pointer group"
              >
                <img
                  src={post.image}
                  alt={`Post ${post.id}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-200 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 flex items-center space-x-4 text-white">
                    <div className="flex items-center space-x-1">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                      </svg>
                      <span className="font-semibold">
                        {formatCount(post.likes)}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v3c0 .6.4 1 1 1 .2 0 .3 0 .4-.1L14.1 18H20c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H13.9l-3.9 3v-3H4V4h16v12z" />
                      </svg>
                      <span className="font-semibold">
                        {formatCount(post.comments)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "saved" && isOwnProfile && (
          <div className="grid grid-cols-3 gap-1 md:gap-4">
            {savedPosts.map((post) => (
              <div
                key={post.id}
                className="relative aspect-square cursor-pointer group"
              >
                <img
                  src={post.image}
                  alt={`Saved post ${post.id}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-200 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 flex items-center space-x-4 text-white">
                    <div className="flex items-center space-x-1">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                      </svg>
                      <span className="font-semibold">
                        {formatCount(post.likes)}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v3c0 .6.4 1 1 1 .2 0 .3 0 .4-.1L14.1 18H20c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H13.9l-3.9 3v-3H4V4h16v12z" />
                      </svg>
                      <span className="font-semibold">
                        {formatCount(post.comments)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "liked" && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">❤️</div>
            <h3 className="text-xl font-light mb-2">No liked posts yet</h3>
            <p className="text-gray-500">Posts you like will appear here.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
