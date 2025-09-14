import { useState } from "react";
import {
  Heart,
  MessageCircle,
  Send,
  Bookmark,
  MoreHorizontal,
} from "lucide-react";

function PostCard({ post }) {
  const [isLiked, setIsLiked] = useState(post.isLiked);
  const [likes, setLikes] = useState(post.likes);
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState("");

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
  };

  const handleComment = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      setNewComment("");
    }
  };

  const formatLikes = (count) => {
    if (count >= 1000000) {
      return (count / 1000000).toFixed(1) + "M";
    } else if (count >= 1000) {
      return (count / 1000).toFixed(1) + "K";
    }
    return count.toString();
  };

  return (
    <div className="bg-white border border-gray-300 rounded-lg mx-4 sm:mx-0">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center space-x-3">
          <img
            src={post.avatar}
            alt={post.username}
            className="w-8 h-8 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold text-sm">{post.username}</p>
          </div>
        </div>
        <button className="text-gray-600 hover:text-gray-800">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      {/* Image */}
      <div className="w-full">
        <img
          src={post.image}
          alt="Post content"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Actions */}
      <div className="px-4 py-3">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-4">
            {/* Like Button */}
            <button
              onClick={handleLike}
              className="hover:scale-110 transition-transform"
            >
              <Heart
                className={`w-6 h-6 ${
                  isLiked ? "text-red-500 fill-red-500" : "text-gray-700"
                }`}
                fill={isLiked ? "currentColor" : "none"}
              />
            </button>

            {/* Comment Button */}
            <button
              onClick={() => setShowComments(!showComments)}
              className="hover:scale-110 transition-transform"
            >
              <MessageCircle className="w-6 h-6 text-gray-700" />
            </button>

            {/* Share Button */}
            <button className="hover:scale-110 transition-transform">
              <Send className="w-6 h-6 text-gray-700" />
            </button>
          </div>

          {/* Bookmark Button */}
          <button className="hover:scale-110 transition-transform">
            <Bookmark className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Likes */}
        <p className="font-semibold text-sm mb-1">{formatLikes(likes)} likes</p>

        {/* Caption */}
        <div className="mb-2">
          <span className="font-semibold text-sm mr-2">{post.username}</span>
          <span className="text-sm">{post.caption}</span>
        </div>

        {/* View Comments */}
        {post.comments && post.comments.length > 0 && (
          <button
            onClick={() => setShowComments(!showComments)}
            className="text-gray-500 text-sm mb-2 hover:text-gray-700"
          >
            View all {post.comments.length} comments
          </button>
        )}

        {/* Comments */}
        {showComments && post.comments && (
          <div className="space-y-1 mb-2">
            {post.comments.map((comment, index) => (
              <div key={index} className="text-sm">
                <span className="font-semibold mr-2">{comment.username}</span>
                <span>{comment.text}</span>
                <span className="text-gray-500 ml-2">{comment.timeAgo}</span>
              </div>
            ))}
          </div>
        )}

        {/* Time */}
        <p className="text-gray-500 text-xs uppercase tracking-wide mb-3">
          {post.timeAgo} ago
        </p>

        {/* Add Comment */}
        <form
          onSubmit={handleComment}
          className="border-t border-gray-200 pt-3"
        >
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Add a comment..."
              className="flex-1 text-sm border-none outline-none bg-transparent placeholder-gray-400"
            />
            {newComment.trim() && (
              <button
                type="submit"
                className="text-blue-500 font-semibold text-sm hover:text-blue-600 px-2 py-1"
              >
                Post
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default PostCard;
