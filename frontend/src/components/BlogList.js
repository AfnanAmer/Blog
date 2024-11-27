import React from 'react';
import BlogPost from './BlogPost';

const BlogList = ({ posts }) => {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 gap-8">
                <BlogPost
                    title="Sample Blog Post 1"
                    author="John Doe"
                    date="2023-05-20"
                    content="This is a sample blog post content. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    imageUrl="/sample-image-1.jpg"
                />
                <BlogPost
                    title="Sample Blog Post 1"
                    author="John Doe"
                    date="2023-05-20"
                    content="This is a sample blog post content. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    imageUrl="/sample-image-1.jpg"
                />

            </div>
        </div>
    );
};

export default BlogList;
