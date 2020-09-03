import React from 'react'
import { Link} from 'react-router-dom'
function Navigation (props) {
    return (
        <div className='Navigation'>
        Navigation
       <ul>
           <li><Link to="/Books"> Books</Link></li>
           <li><Link to="/Photos">Photos</Link></li>
           <li> <Link to="/">Home</Link></li>
           
       </ul>
       

        
    
        
        </div>
    );

}
export default Navigation