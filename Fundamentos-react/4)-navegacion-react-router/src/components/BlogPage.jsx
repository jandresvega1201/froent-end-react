import React from 'react';
import BlogLink from './BlogLink';
import {blogData} from "../util/blogData";
import { Outlet } from 'react-router-dom'

const BlogPage = () => {
    return (
        <>
            <h1>Blog page</h1>
            <Outlet />
            <ul>
                {
                    blogData.map(post => (
                        <BlogLink key={post.slug} post={post}/>
                    ))
                }
            </ul>
        </>
    );
};

export default BlogPage;