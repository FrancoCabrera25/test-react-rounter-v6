import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { blogData } from '../data/blogData';

export const BlogDetailPage = () => {
    const navigate = useNavigate();
    const { slug } = useParams();
    const post = blogData.find((f) => f.slug === slug);

    const back = () => {
      navigate('/blog');
    }
    return (
        <>
            <h1>Title: {post.title}</h1>
            <span>{post.content}</span>
            {/* <div>BlogDetailPage{slug}</div> */}
            <button onClick={back}>Volver</button>
        </>
    );
};
