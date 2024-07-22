import React, { useContext } from 'react';
import { PostList } from '../Context/Context';
import { TiDeleteOutline } from "react-icons/ti";

export const Post = ({}) => {
  const { postreducer, deletePost} = useContext(PostList);

  return (
    <div style = {{display:"flex",gap:"20px",position:"relative"}}>
      {postreducer.map((item, index) => (
        <div className="card" style={{ width: "18rem" }} key={index}>
          <img src={item.imageURL} className="card-img-top" alt={item.title} />

          <TiDeleteOutline style = {{fontSize:"30PX",position:"absolute",right:"0",cursor:"pointer"}} onClick={()=>{deletePost(item.id)}}/>

          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
        <div style = {{display:"flex",gap:"10px",}}>
        {
            item.tags.map((tag,index)=>{
             return <p key = {index + 1} style = {{color:"#fff",background:"red",padding:"5px",borderRadius:"10px"}}>{tag}</p>
            })
          }
        </div>

        
            <p className="card-text">{item.body}</p>
            <a href="#" className="btn btn-primary">View</a>
          </div>
        </div>
      ))}
    </div>
  );
};
