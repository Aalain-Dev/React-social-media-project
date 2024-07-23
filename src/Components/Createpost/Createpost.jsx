import React, { useContext } from 'react'
import { PostList } from '../Context/Context'

const Createpost = () => {


  return (
<div className="container">
<form>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">Email Title</label>
      <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Title'/>
    </div>
    <div className="mb-3">  
      <label htmlFor="exampleInputPassword1" className="form-label">Enter Body</label>
      <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Enter Body'/>
    </div>
    <div className="mb-3">  
      <label htmlFor="exampleInputPassword1" className="form-label">Enter Tags</label>
      <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Enter Tags'/>
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
</div>
  )
}

export default Createpost