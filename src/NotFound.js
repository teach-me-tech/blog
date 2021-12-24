import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className= 'not-found'>
            <h2>NOT FOUND</h2>
            <p>The page you are searching is not found!!</p>
            <Link to="/">Back to Homepage..</Link>
        </div>
     );
}
 
export default NotFound;