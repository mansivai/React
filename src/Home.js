// import {useState, useEffect} from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';
const Home = () => {
  // const [name, setName] = useState('Mario');
  // const handleDelete=(id) =>{
  //   const newBlogs = blogs.filter((blog) => blog.id !== id);
  //   setBlogs(newBlogs) ; 
  // }
 const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');




  return (
    <div className="home">
      {/* <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
      <BlogList blogs={blogs.filter((blog) => blog.author === "Mario")} title="Mario's Blog" />
      <button onClick= {() => setName("Minnie")}>change name</button>
      <p>{name}</p> */}
      {error && <div>{error}</div>}
      {isPending && <div>Loading....</div> }
      {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
    </div>
  );
}
 
export default Home;