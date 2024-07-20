import { createContext, useReducer, useState } from "react";

// Initial context
export const PostList = createContext({
  postlist: {},
  addpost: () => { },
  deletepost: () => { }
});
console.log(PostList);
const initialState = [{
  id: 1,
  title: "First Card",
  body: "This is the first card",
}, {
  id: 2,
  title: "Second Card",
  body: "This is the second card",
}];

const reducer = (state, action) => {
  return state;
};

const ContextPart = ({ children }) => {
  const [postreducer, dispatch] = useReducer(reducer, initialState);

  const addPost = () => {
  
  };

  const deletePost = (id) => {
    alert(id)
    console.log(id);
  };

  return (
    <PostList.Provider value={{ postreducer, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

export default ContextPart;
