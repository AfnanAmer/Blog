import React, { useState, useEffect } from 'react';
import { useKeycloak } from "@react-keycloak/web";
import { useParams, useNavigate } from 'react-router-dom';

 
const BlogPost = () => {
  const { keycloak } = useKeycloak();

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
            
            <div className="mt-8 border-t border-gray-100 pt-8 flex justify-between items-center">
              <button
                onClick={() => navigate('/')}
                className="text-blue-600 hover:text-blue-800 flex items-center"
              >
                ← Back to Blogs
              </button>
              {/* Delete button */}
              {keycloak.authenticated && (
                <button
                  onClick={async () => {
                    try {
                      const response = await fetch(`${process.env.REACT_APP_API_URL}/blogs/${blog.id}`, {
                        method: 'DELETE',
                        headers: {
                          'X-API-Key': process.env.REACT_APP_API_KEY
                        },
                        credentials: 'include'
                      });
                      
                      if (!response.ok) {
                        throw new Error('Failed to delete blog');
                      }
                      
                      navigate('/');
                    } catch (error) {
                      console.error('Error deleting blog:', error);
                      setError('Failed to delete blog');
                    }
                  }}
                  className="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition duration-300 gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                  </svg>
                  Delete
                </button>
              )}

            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogPost;
