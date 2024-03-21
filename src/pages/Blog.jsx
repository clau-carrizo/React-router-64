import { Link, useLoaderData } from "react-router-dom";

const Blog = () => {
    const { posts } = useLoaderData();
    console.log(posts);

    return (
        <ul>
            {posts.length > 0 ? (
                posts.map((blog) => (
                    <li key={blog.id}>
                        <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
                    </li>
                ))
            ) : (
                <li>No posts found</li>
            )}
        </ul>
    );
};
export default Blog;

export const loaderBlogs = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!res.ok)
    throw {
        status: res.status,
        statusText: 'No encontrado',
    }

    const posts = await res.json();

    return { posts };
};
