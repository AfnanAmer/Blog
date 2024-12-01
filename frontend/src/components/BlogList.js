import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Pagination from './Pagination';

function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchBlogs = async () => {

      try {
        
        setLoading(true);

        // Fetch blogs from the API
        const response = await fetch(
          // Data is fetched from the API
          `${process.env.REACT_APP_API_URL}/blogs?page=${currentPage}`,
          {
            // Headers are set to accept JSON and include the API key
            headers: {
              'Accept': 'application/json',
              'X-API-Key': process.env.REACT_APP_API_KEY
            },
            credentials: 'include'
          }
        );
        
        // Data is parsed as JSON
        const data = await response.json();
        setBlogs(data.items);
        setTotalPages(data.total_pages);

      } catch (error) {

        console.error('Error fetching blogs:', error);

      } finally {
        // Loading is set to false
        setLoading(false);

      }
    };

    fetchBlogs();

  }, [currentPage]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      window.scrollTo(0, 0);
    }
  };

  if (loading) {
    return <div className="text-center py-12">Loading...</div>;
  }

  return (           
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                className="h-48 w-full object-cover"
                src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3"
                alt="Blog thumbnail"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">{blog.title}</h2>
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
        
        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </div>
  );
}

export default BlogList;
