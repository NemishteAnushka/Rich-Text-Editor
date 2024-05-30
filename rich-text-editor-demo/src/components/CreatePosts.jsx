import React, { useRef, useState } from "react";
import JoditEditor from "jodit-react";

function CreatePosts() {
  const [post, setPost] = useState({
    post_title: "",
    post_content: "",
    post_category: "",
  });

  const editor = useRef(null);

  const handleOnChange = (e) => {
    setPost((prevState) => {
      const { name, value } = e.target;
      return { ...prevState, [name]: value };
    });
  };
  const handlePostContent = (newContent) => {
    setPost((prevState) => ({
      ...prevState,
      post_content: newContent,
    }));
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(post);
  };

  const { post_title, post_content, post_category } = post;

  const config = {
    buttons: ["print", "about"],
  };

  return (
    <div>
      <h1>Whats in your Mind</h1>
      <form onSubmit={handleOnSubmit}>
        <div>
          <label htmlFor="postTitle">Post Title : </label>
          <br />
          <input
            style={{ width: "80%", height: "30px" }}
            type="text"
            id="postTitle"
            name="post_title"
            value={post_title}
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label htmlFor="postContent">Post content : </label>
          <br />
          {
            /* <input
style={{ width: "80%", height: "200px" }}
type="text"
id="postContent"
name="post_content"
value={post_content}
onChange={handleOnChange}
/> */
            <JoditEditor
              ref={editor}
              value={post_content}
              config={config}
              //   tabIndex={1} // tabIndex of textarea
              //   onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
              onChange={handlePostContent}
            />
          }
        </div>
        <div>
          <label htmlFor="postCategory">Post category : </label>
          <br />
          <input
            style={{ width: "80%", height: "30px" }}
            type="text"
            id="postCategory"
            name="post_category"
            value={post_category}
            onChange={handleOnChange}
          />
        </div>
        <br />
        <button style={{ width: "120px", height: "30px" }} type="submit">
          POST
        </button>
      </form>
    </div>
  );
}

export default CreatePosts;
