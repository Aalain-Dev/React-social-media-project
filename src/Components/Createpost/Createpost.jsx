import React, { useContext, useRef } from "react";
import { PostList } from "../Context/Context";

const Createpost = () => {
  const { addPost } = useContext(PostList);

  const titleElement = useRef();
  const bodyElement = useRef();
  const tagsElement = useRef();


// Data testing
  
















  const submitform = (e) => {
    e.preventDefault();


    const res = {
      id: Date.now(),
      title: titleElement.current.value,
      body: bodyElement.current.value,
      tags: tagsElement.current.value.split(" "),
    };
    titleElement.current.value = "";
    bodyElement.current.value = "";
    tagsElement.current.value = "";
    addPost(res)
    console.log(res);
  };

  return (
    <div className="container">
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Enter Title
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Title"
            ref={titleElement}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Enter Body
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter Body"
            ref={bodyElement}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Enter Tags
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter Tags"
            ref={tagsElement}
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={submitform}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Createpost;
