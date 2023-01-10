import { BlogPreview } from '../components/BlogPreview';
import { blogData } from '../data/blogData';
import { Outlet } from 'react-router-dom';


export const BlogPage = () => {
    return (
        <>
            <h1>Blog page</h1>
            {blogData.map((blog) => (
                <BlogPreview key={blog.slug} post={blog} />
            ))}

            <Outlet />
        </>
    );
};
