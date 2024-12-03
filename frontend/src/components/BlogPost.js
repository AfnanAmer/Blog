import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

 
const BlogPost = () => {
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch blog from the API
    const fetchBlog = async () => {
      // Try to fetch the blog
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/blogs/${id}`, {
          headers: {
            'Accept': 'application/json',
            'X-API-Key': process.env.REACT_APP_API_KEY
          },
          credentials: 'include'
        });

        // If the blog is not found, throw an error
        if (!response.ok) {
          throw new Error('Blog not found');
        }

        const data = await response.json();
        setBlog(data);
      } catch (error) {
        // If there is an error, set the error message
        setError(error.message);
        console.error('Error fetching blog:', error);
      }
    };

    fetchBlog();
  }, [id]);

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Error</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={() => navigate('/')}
            className="text-blue-600 hover:text-blue-800"
          >
            ← Back to Blogs
          </button>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-2xl text-gray-600">Loading...</div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <article className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="relative h-96">
            <img 
              src={blog.image_url || "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3"}
              alt="Blog cover"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 p-8">
              <div className="mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  {blog.category}
                </span>
              </div>
              <h1 className="text-4xl font-bold text-white">{blog.title}</h1>
            </div>
          </div>

          <div className="px-8 py-10">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 leading-relaxed whitespace-pre-wrap">
                {blog.body}
              </p>
            </div>
            
            <div className="mt-8 border-t border-gray-100 pt-8">
              <button
                onClick={() => navigate('/')}
                className="text-blue-600 hover:text-blue-800 flex items-center"
              >
                ← Back to Blogs
              </button>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogPost;
