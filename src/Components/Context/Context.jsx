import { createContext, useEffect, useReducer, useState } from "react";

// Initial context
export const PostList = createContext({
  postlist: {},
  addpost: () => {},
  deletepost: () => {},
});
const initialState = [];

const reducer = (state, action) => {
  let current = state;
  if (action.type === "DELETE") {
    current = current.filter((data) => data.id !== action.payload.id);
    return current;
  } else if (action.type === "ADD_POST") {
    const res = [...state, action.payload];
    return res;
  }
  return state;
};

const ContextPart = ({ children }) => {
  const [postreducer, dispatch] = useReducer(reducer, initialState);

  // const addPost = (title, body, tags) => {
  //   console.log(`The Title is ${title}, Body is ${body}, Tags are ${tags}`);

  //   dispatch({
  //     type:"ADD_POST",
  //     payload:{
  //         id: Date.now(),
  //         title,
  //         body,
  //         // tags
  //     }
  //   });
  // };
  const [data, setdata] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setdata(data);
      });
  }, []);
  const addPost = (res) => {
    dispatch({
      type: "ADD_POST",
      payload: res,
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
