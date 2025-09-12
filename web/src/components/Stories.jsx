import { useState } from "react";

function Stories() {
  const [stories] = useState([
    {
      id: 1,
      username: "Your Story",
      avatar:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150",
      isOwn: true,
      hasStory: false,
    },
    {
      id: 2,
      username: "john_doe",
      avatar:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150",
      hasStory: true,
      viewed: false,
    },
    {
      id: 3,
      username: "travel_girl",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150",
      hasStory: true,
      viewed: true,
    },
    {
      id: 4,
      username: "food_explorer",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
      hasStory: true,
      viewed: false,
    },
    {
      id: 5,
      username: "fitness_coach",
      avatar:
        "https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=150",
      hasStory: true,
      viewed: true,
    },
    {
      id: 6,
      username: "art_studio",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
      hasStory: true,
      viewed: false,
    },
    {
      id: 7,
      username: "music_lover",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
      hasStory: true,
      viewed: true,
    },
    {
      id: 8,
      username: "nature_pics",
      avatar:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=150",
      hasStory: true,
      viewed: false,
    },
  ]);

  const handleStoryClick = (story) => {
    if (story.isOwn && !story.hasStory) {
      // Handle add story
      console.log("Add story");
    } else {
      // Handle view story
      console.log("View story:", story.username);
    }
  };

  return (
    <div className="p-4">
      <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
        {stories.map((story) => (
          <div
            key={story.id}
            onClick={() => handleStoryClick(story)}
            className="flex flex-col items-center space-y-1 cursor-pointer flex-shrink-0"
          >
            <div className="relative">
              {/* Story Ring */}
              <div
                className={`w-14 h-14 rounded-full p-0.5 ${
                  story.isOwn && !story.hasStory
                    ? "bg-gray-300"
                    : story.hasStory && !story.viewed
                      ? "bg-gradient-to-r from-purple-500 via-pink-500 to-red-500"
                      : story.hasStory && story.viewed
                        ? "bg-gray-300"
                        : "bg-gray-300"
                }`}
              >
                <div className="w-full h-full bg-white rounded-full p-0.5">
                  <img
                    src={story.avatar}
                    alt={story.username}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>

              {/* Add Story Plus Icon */}
              {story.isOwn && !story.hasStory && (
                <div className="absolute bottom-0 right-0 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center border-2 border-white">
                  <svg
                    className="w-2 h-2 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              )}
            </div>

            {/* Username */}
            <span className="text-xs text-center max-w-14 truncate">
              {story.username}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stories;
