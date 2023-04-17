import { useNavigation, useActionData, Form } from "@remix-run/react";
import { json, redirect } from "@remix-run/node";
import { db } from "../../services/db";

const badRequest = (data) => {
  return json(data, { status: 400 });
};

export const action = async ({ request }) => {
  const form = await request.formData();
  const title = form.get("title");
  const body = form.get("body");

  const fieldErrors = {
    title: title.length < 3 ? "Title must be at least 3 characters" : null,
    body: body.length < 10 ? "Body must be at least 10 character" : null,
  };

  const hasErrors = Object.values(fieldErrors).some(Boolean);

  const fields = { body, title };
  if (hasErrors) {
    return badRequest({ fieldErrors, fields });
  }

  // Fake delay to show submitting status
  await new Promise((resolve) => {
    setTimeout(resolve, 1500);
  });

  const post = await db.post.create({ data: fields });

  console.log({ title, body });
  return redirect("/posts/" + post.id);
};

export function ErrorBoundary({ error }) {
  return (
    <div>
      <strong>Something went wrong: </strong>
      <span style={{ color: "red" }}>{error.message}</span>
    </div>
  );
}

export default function CreatePost() {
  const transition = useNavigation();
  const actionData = useActionData();

  const { fieldErrors } = actionData ?? {};
  const { title: titleError, body: bodyError } = fieldErrors ?? {};

  const isSubmitting = transition.state === "submitting";

  return (
    <>
      <h3>Create here a new post</h3>
      <Form method="POST" disabled={isSubmitting}>
        <div>
          <label htmlFor="title">Post title</label>
          <br />
          <input placeholder="Post title" type="text" id="title" name="title" />
          {titleError && (
            <p style={{ color: "red" }}>
              <small>{titleError}</small>
            </p>
          )}
        </div>
        <div>
          <label htmlFor="body">Post body</label>
          <br />
          <textarea
            placeholder="Post content"
            type="text"
            id="body"
            name="body"
          />
          {bodyError && (
            <p style={{ color: "red" }}>
              <small>{bodyError}</small>
            </p>
          )}
        </div>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Create Post"}
        </button>
      </Form>
    </>
  );
}
