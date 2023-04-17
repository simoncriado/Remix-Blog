import { Link, useLoaderData } from "@remix-run/react";
import { db } from "../services/db";

export const loader = async () => {
  // Server side. Connection to DB and accesing data
  const posts = await db.post.findMany();

  return {
    posts,
  };
};

export default function Index() {
  const { posts } = useLoaderData();

  return (
    <div>
      <h1>Welcome to my first Remix Page</h1>
      <p>
        Here I will be playing around and will try to create a simple blog app
      </p>
      <nav>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/posts/create">Create new post</Link>
          </li>
        </ul>
      </nav>

      {posts.map((post) => (
        <div key={post.id}>
          <Link to={`/posts/${post.id}`}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
