import React from 'react';

const BlogPost = ({ title, author, date, content, imageUrl }) => {
  return (
    <article className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg my-8">
      {imageUrl && (
        <img 
          src={imageUrl}
          alt={title}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
      )}
      <h1 className="text-3xl font-bold text-gray-900 mb-4">{title}</h1>
      <div className="flex items-center text-gray-600 mb-6">
        <span className="mr-4">{author}</span>
        <span>{new Date(date).toLocaleDateString()}</span>
      </div>
      <div className="prose max-w-none">
        {content}
      </div>
      <div className="mt-8 pt-4 border-t border-gray-200">
        <div className="flex items-center space-x-4">
          <button className="text-blue-600 hover:text-blue-800">
            Share
          </button>
          <button className="text-blue-600 hover:text-blue-800">
            Like
          </button>
          <button className="text-blue-600 hover:text-blue-800">
            Comment
          </button>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;
