import { Link } from "react-router-dom";

const BlogList = (props) => {
    // console.log(props.blogs)
    const title = props.title;
    return ( 
        
        <div className BlogList>
            <h1 >{title}</h1>
            {props.blogs.map((blog)=>(
                <div className="blog-preview" key={blog.id} >
                    <Link to={`/blogs/${blog.id}`} style={{textDecoration: 'none'}}><h2>{blog.title}</h2>
                        <p>Written by: {blog.author}</p>
                        {/* <button onClick={() => props.handleDelete(blog.id)}>delete blog</button> */}
                    </Link>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;