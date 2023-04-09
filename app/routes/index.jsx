import { Link, useLoaderData } from "@remix-run/react";

export const loader = () => {
  const data = {
    posts: [
      {
        id: 1,
        title: "Post 1",
        content: "Lorem ipsum blabla",
      },
    ],
  };

  return data;
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
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}
