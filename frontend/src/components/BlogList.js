import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/blogs${selectedCategory ? `/category/${selectedCategory}` : ''}`,
          {
            headers: {
              'Accept': 'application/json',
              'X-API-Key': process.env.REACT_APP_API_KEY
            },
            credentials: 'include'
          }
        );

        const data = await response.json();
        setBlogs(data.items);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [selectedCategory]);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  if (loading) {
    return <div className="text-center py-12">Loading...</div>;
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="flex justify-end mb-6 space-x-4">
          <div className="relative">
            <select
              value={selectedCategory}
              onChange={handleCategoryChange}
              className="appearance-none w-48 px-4 py-2.5 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors duration-200"
            >
              <option value="">All Categories</option>
              <option to={`/blogs/category/${'technology'}`} value="technology">Technology</option>
              <option to={`/blogs/category/${'lifestyle'}`}value="lifestyle">Lifestyle</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogs
            .filter(blog => !selectedCategory || blog.category === selectedCategory)
            .map((blog) => (
              <div key={blog.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  className="h-48 w-full object-cover"
                  src={blog.image_url}
                  alt="Blog thumbnail"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">{blog.title}</h2>
                  <div className="mb-3">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {blog.category}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    {blog.body.substring(0, 150)}...
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{blog.date}</span>
                    <Link
                      to={`/blog/${blog.id}`}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogList;
