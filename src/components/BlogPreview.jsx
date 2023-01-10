import { Link } from 'react-router-dom';

export const BlogPreview = ({ post }) => {
    return (
        <li>
            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </li>
    );
};
