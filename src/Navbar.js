// import  {Link, link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className = "navbar">
            <h1>The dojo blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create">New Blog</a>

            </div>
        </nav>   
     );
}
 
export default Navbar;
//sfc stateless constant function