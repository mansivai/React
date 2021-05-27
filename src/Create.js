import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title,setTitle] = useState("");
    const [body,setBody] = useState("");
    const [author, setAuthor] = useState("mario");
    const [isPending, setIsPending]=useState(false);
    const history=useHistory();

    const handleSubmit =(e)=>{
        e.preventDefault();
        const blog={title, body, author};

        setIsPending(true);
        fetch(' http://localhost:8000/blogs',{
            method:'POST',
            headers: {'Content-Type':'application/json'},
            body:JSON.stringify(blog)
        }).then(()=>{
            console.log('new blog added');
            setIsPending(false);
            // history.go(-1);
            // no. of steps want to go back
            history.push('/');
        })


    };

    return ( 
<div className="create">
    <h2>Create a blog here</h2>
    <form onSubmit={handleSubmit}>
        <lable>Blog Title</lable>
            <input 
            type="text"
            required
            value={title}
            onChange={(e)=> setTitle(e.target.value)}
            />
        <lable>Blog Body</lable>
        <textarea required
                    value={body}
                    onChange={(e)=> setBody(e.target.value)}
        ></textarea>
        <lable>Blog Author: </lable>
        <select
                            value={author}
                            onChange={(e)=> setAuthor(e.target.value)}>
            <option value='mario'>mario</option>
            <option value='mansi'>mansi</option>
        </select>
       { !isPending && <button>Add Blog</button>}
       { isPending && <button disabled>Loading..</button>}
        <p>Hi {title}</p>
    </form>
</div>
     );
}
 
export default Create;