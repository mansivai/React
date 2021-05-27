import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            <h2>Sorry</h2>
            <p>404 page not found</p>
        
        <Link to='/'>Go to homepage!!!</Link>
        </div>
      );
}
 
export default NotFound;