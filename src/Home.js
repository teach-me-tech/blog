// import { useState, useEffect } from 'react';
import useFetch from './useFetch';
import BlogList from './BlogList';


const Home = () => {
    
    // const handleDelete=(id)=>{
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setblogs(newBlogs);
    // }
    
    const {ispending, error, data:blogs} = useFetch("http://localhost:8000/blogs")
     return ( 
         <div className="home">
            {error && <div>{error}</div>}
             {ispending && <h1>LOADING..</h1>}
            {blogs && <BlogList blogs= {blogs} title= 'All Blogs!'/>}
            {/* <BlogList blogs= {blogs.filter((blog)=>(blog.author==='mario'))} title= 'Mario`s blog!'/> */}
         </div>
     );
}
 
export default Home;



// let name = 'mario';
    // const [name, setname] = useState('mario');
    // const handleClick =()=>
    // {
    //     setname('shivam');
    // }

 // useEffect(()=>{ })fires at each dom render
    // useEffect(()=>{ }, [dependencies comes here])// now it will run only after render with given dependencies.