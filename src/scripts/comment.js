import React from 'react'
import "../styles/comment.css"
import {Link} from "react-router-dom"
import Getdiscussion from './getdiscussions'
const Comment = () => {
  return (
 <>
     <Link  to="/discussion"  className='link'>Add Discussion</Link>
    
 <div className="comment">
    <Getdiscussion/>

     
    </div>
 </>
    

  )
}

export default Comment