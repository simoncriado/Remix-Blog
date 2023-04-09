export default function CreatePost() {
  return (
    <>
      <h3>Create here a new post</h3>
      <form method="POST">
        <div>
          <label htmlFor="title">Post title</label>
          <br />
          <input type="text" id="title" name="title" />
        </div>
        <div>
          <label htmlFor="content">Post body</label>
          <br />
          <textarea type="text" id="content" name="content" />
        </div>
        <button type="submit">Add new Post</button>
      </form>
    </>
  );
}
