import React from 'react';
import {blogData} from '../util/blogData';
import {useNavigate, useParams} from "react-router-dom";
import {useAuth} from "./auth/auth";
const BlogPost = () => {
    const {slug} = useParams();
    const navigate = useNavigate()
    const post = blogData.find(post => post.slug === slug)
    const auth = useAuth()

    const canDelete = auth.user?.isAdmin || post.author ===auth.user.userName

    const returnBlog = () => {
        navigate('/blog');
    }

    return (
        <>
            <h2>{post.title}</h2>
            <button onClick={returnBlog}>Volver al blog</button>
            <p>{post.author}</p>
            <p>{post.content}</p>

            {
                canDelete && (
                    <button>Eliminar blogPost</button>
                )
            }
        </>
    );
};

export default BlogPost;