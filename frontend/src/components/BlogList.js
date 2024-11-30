import React from 'react';

const BlogList = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">Blog Posts</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img 
                            className="h-48 w-full object-cover"
                            src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3"
                            alt="Blog thumbnail"
                        />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold text-gray-900 mb-2">Building Web Applications</h2>
                            <p className="text-gray-600 mb-4">
                                Learn how to build scalable web applications using modern technologies.
                            </p>
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-500">May 20, 2023</span>
                                <a href="#" className="text-blue-600 hover:text-blue-800">Read More →</a>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img 
                            className="h-48 w-full object-cover"
                            src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3"
                            alt="Blog thumbnail"
                        />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold text-gray-900 mb-2">Building Web Applications</h2>
                            <p className="text-gray-600 mb-4">
                                Learn how to build scalable web applications using modern technologies.
                            </p>
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-500">May 20, 2023</span>
                                <a href="#" className="text-blue-600 hover:text-blue-800">Read More →</a>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img 
                            className="h-48 w-full object-cover"
                            src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3"
                            alt="Blog thumbnail"
                        />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold text-gray-900 mb-2">Building Web Applications</h2>
                            <p className="text-gray-600 mb-4">
                                Learn how to build scalable web applications using modern technologies.
                            </p>
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-500">May 20, 2023</span>
                                <a href="#" className="text-blue-600 hover:text-blue-800">Read More →</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // {/* <div className="bg-gray-50 min-h-screen">
        //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        //         <h1 className="text-3xl font-bold text-gray-900 mb-8">Latest Blog Posts</h1>
        //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        //             {/* Blog Card */}
        //             <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
        //                 <img 
        //                     className="h-48 w-full object-cover"
        //                     src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3"
        //                     alt="Blog thumbnail"
        //                 />
        //                 <div className="p-6">
        //                     <div className="flex items-center mb-4">
        //                         <img 
        //                             className="h-10 w-10 rounded-full mr-3"
        //                             src="https://randomuser.me/api/portraits/men/1.jpg"
        //                             alt="Author"
        //                         />
        //                         <div>
        //                             <p className="text-sm font-medium text-gray-900">John Doe</p>
        //                             <p className="text-sm text-gray-500">May 20, 2023</p>
        //                         </div>
        //                     </div>
        //                     <h2 className="text-xl font-semibold text-gray-900 mb-2">Building Modern Web Applications</h2>
        //                     <p className="text-gray-600 mb-4 line-clamp-3">
        //                         Learn how to build scalable and maintainable web applications using modern technologies and best practices.
        //                     </p>
        //                     <div className="flex items-center justify-between">
        //                         <div className="flex space-x-2">
        //                             <span className="px-3 py-1 text-sm bg-blue-100 text-blue-600 rounded-full">React</span>
        //                             <span className="px-3 py-1 text-sm bg-green-100 text-green-600 rounded-full">Web Dev</span>
        //                         </div>
        //                         <button className="text-blue-600 hover:text-blue-800 font-medium">Read More →</button>
        //                     </div>
        //                 </div>
        //             </div>

        //             {/* Repeat similar cards for more blog posts */}
                    
        //         </div>
        //     </div>
        // </div> */}
    );
};

export default BlogList;
