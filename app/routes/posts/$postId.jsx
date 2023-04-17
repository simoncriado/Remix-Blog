import { useLoaderData } from "@remix-run/react";
import { db } from "../../services/db";

export const loader = async ({ params }) => {
  // Server side. Connection to DB and accesing data
  const post = await db.post.findUnique({
    where: {
      id: params.postId,
    },
  });

  return {
    post,
  };
};

export default function SinglePost() {
  const { post } = useLoaderData();

  return (
    <>
      <h2>Post Title of {post.title}</h2>
      <p>{post.body}</p>
    </>
  );
}
