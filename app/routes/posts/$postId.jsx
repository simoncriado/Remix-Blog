import { useParams } from "@remix-run/react";

export default function SinglePost() {
  const params = useParams();

  return (
    <>
      <h2>Post Title of {params.postId}</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
        consequatur dignissimos provident amet quas dolorem, beatae aliquam
        labore vero est accusantium dolor iure nemo non aspernatur reiciendis.
        Voluptate, delectus suscipit!
      </p>
    </>
  );
}
