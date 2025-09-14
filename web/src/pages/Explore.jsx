import { useState } from "react";

function Explore() {
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
    {
      id: 13,
      image:
        "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=400",
      likes: 567,
      comments: 19,
    },
    {
      id: 14,
      image:
        "https://images.unsplash.com/photo-1492680967812-4b9226ee884d?w=400",
      likes: 1923,
      comments: 98,
    },
    {
      id: 15,
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=400",
      likes: 743,
      comments: 31,
    },
    {
      id: 16,
      image:
        "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400",
      likes: 2156,
      comments: 127,
    },
    {
      id: 17,
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400",
      likes: 1334,
      comments: 54,
    },
    {
      id: 18,
      image:
        "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400",
      likes: 2789,
      comments: 189,
    },
  ]);

  const [hoveredPost, setHoveredPost] = useState(null);

  const formatCount = (count) => {
    if (count >= 1000000) {
      return (count / 1000000).toFixed(1) + "M";
    } else if (count >= 1000) {
      return (count / 1000).toFixed(1) + "K";
    }
    return count.toString();
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-center mb-4">Explore</h1>
        <div className="flex justify-center space-x-8">
          <button className="text-blue-500 font-semibold border-b-2 border-blue-500 pb-2">
            For You
          </button>
          <button className="text-gray-500 hover:text-gray-700 pb-2">
            Popular
          </button>
          <button className="text-gray-500 hover:text-gray-700 pb-2">
            Recent
          </button>
        </div>
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-3 gap-1 md:gap-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="relative aspect-square cursor-pointer group"
            onMouseEnter={() => setHoveredPost(post.id)}
            onMouseLeave={() => setHoveredPost(null)}
          >
            <img
              src={post.image}
              alt={`Post ${post.id}`}
              className="w-full h-full object-cover"
            />

            {/* Overlay on Hover */}
            {hoveredPost === post.id && (
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-all duration-200">
                <div className="flex items-center space-x-6 text-white">
                  {/* Likes */}
                  <div className="flex items-center space-x-1">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                    <span className="font-semibold">
                      {formatCount(post.likes)}
                    </span>
                  </div>

                  {/* Comments */}
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
            )}
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="flex justify-center mt-8">
        <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
          Load More
        </button>
      </div>
    </div>
  );
}

export default Explore;
