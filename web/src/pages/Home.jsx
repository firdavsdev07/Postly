import { useState } from "react";
import PostCard from "../components/PostCard";
import Stories from "../components/Stories";

function Home() {
  const [posts] = useState([
    {
      id: 1,
      username: "john_doe",
      avatar:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600",
      caption: "Beautiful sunset at the beach! 🌅 #nature #sunset #peaceful",
      likes: 1247,
      timeAgo: "2h",
      isLiked: false,
      comments: [
        { username: "jane_smith", text: "Amazing shot! 📸", timeAgo: "1h" },
        {
          username: "mike_wilson",
          text: "Where is this place?",
          timeAgo: "45m",
        },
      ],
    },
    {
      id: 2,
      username: "travel_girl",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600",
      caption: "Coffee and mountains ☕️ Perfect morning combo!",
      likes: 892,
      timeAgo: "4h",
      isLiked: true,
      comments: [
        { username: "coffee_lover", text: "Goals! ☕️", timeAgo: "3h" },
        {
          username: "mountain_hiker",
          text: "Which mountain is this?",
          timeAgo: "2h",
        },
      ],
    },
    {
      id: 3,
      username: "food_explorer",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600",
      caption: "Homemade pizza night! 🍕 Recipe in my bio",
      likes: 2156,
      timeAgo: "6h",
      isLiked: false,
      comments: [
        { username: "pizza_fan", text: "Looks delicious! 😋", timeAgo: "5h" },
        { username: "chef_anna", text: "Perfect crust!", timeAgo: "4h" },
        {
          username: "hungry_student",
          text: "Can you share the recipe?",
          timeAgo: "3h",
        },
      ],
    },
    {
      id: 4,
      username: "fitness_coach",
      avatar:
        "https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=150",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600",
      caption:
        "Morning workout completed! 💪 Remember: consistency is key #fitness #motivation",
      likes: 3421,
      timeAgo: "8h",
      isLiked: true,
      comments: [
        {
          username: "gym_buddy",
          text: "Inspiring as always! 💪",
          timeAgo: "7h",
        },
        {
          username: "newbie_lifter",
          text: "Any tips for beginners?",
          timeAgo: "6h",
        },
      ],
    },
    {
      id: 5,
      username: "art_studio",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
      image:
        "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600",
      caption: "Latest painting finished! 🎨 Oil on canvas, 24x36 inches",
      likes: 756,
      timeAgo: "12h",
      isLiked: false,
      comments: [
        {
          username: "art_collector",
          text: "Beautiful work! Is it for sale?",
          timeAgo: "10h",
        },
        {
          username: "fellow_artist",
          text: "Love the color palette! 🎨",
          timeAgo: "9h",
        },
      ],
    },
  ]);

  return (
    <div className="max-w-2xl mx-auto">
      {/* Stories Section */}
      <div className="bg-white border border-gray-300 rounded-lg mb-6">
        <Stories />
      </div>

      {/* Posts Feed */}
      <div className="space-y-6">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>

      {/* Load More Button */}
      <div className="flex justify-center py-8">
        <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
          Load More Posts
        </button>
      </div>
    </div>
  );
}

export default Home;
