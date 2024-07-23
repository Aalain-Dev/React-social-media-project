import React, { useContext, useRef } from "react";
import { PostList } from "../Context/Context";

const Createpost = () => {
  let title;
  let body;
  let tags;

  const titleElement = useRef();
  const bodyElement = useRef();
  const tagsElement = useRef();
  const submitform = (e) => {
    e.preventDefault();

    const res = {
      title: titleElement.current.value,
      body: bodyElement.current.value,
      tags: tagsElement.current.value,
    };
  };

  return (
    <div className="container">
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email Title
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
            type="password"
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
            type="password"
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
