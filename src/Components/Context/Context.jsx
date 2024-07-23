import { createContext, useReducer, useState } from "react";

// Initial context
export const PostList = createContext({
  postlist: {},
  addpost: () => {},
  deletepost: () => {},
});
console.log(PostList);
const initialState = [
  {
    id: 1,
    title: "First Card",
    body: "This is the first card",
    tags: ["Cards", "Best cards"],
  },
  {
    id: 2,
    title: "Second Card",
    body: "This is the second card",
    tags: ["Cards", "Best cards"],
  },
];

const reducer = (state, action) => {
  let current = state;
  if (action.type === "DELETE") {
    current = current.filter((data) => data.id !== action.payload.id);
    return current;
  }
  return state;
};

const ContextPart = ({ children }) => {
  const [postreducer, dispatch] = useReducer(reducer, initialState);

  const addPost = (title, body, tags) => {
    console.log(`The Title is ${title}, Body is ${body}, Tags are ${tags}`);
    dispatch({
      type:"ADD_POST",
      payload:{
        
      }
    });
  };

  const deletePost = (id) => {
    dispatch({
      type: "DELETE",
      payload: {
        id,
      },
    });
  };

  return (
    <PostList.Provider value={{ postreducer, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

export default ContextPart;
