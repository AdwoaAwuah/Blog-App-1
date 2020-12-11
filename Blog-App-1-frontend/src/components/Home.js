import React, {useState, useEffect} from 'react';
import axios from 'axios'; 

import PostItem from './PostItem';
import Form from './AddPosts';


function Home () {

    // https://jsonplaceholder.typicode.com/posts
    // 1. componentDidMound, componenetDidUpdate, componentWillUnmount

    const [posts, setPosts] = useState([])

    useEffect(()=> {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response)=> {
            setPosts(response.data)
            console.log(response.data)
        })
    }, [])

    /**
     * {
     *  title: "",
     *  body; "",
     *  id: "",
     *  userId: ""
     * }
     * 
     * {...post}
     * title={post.title} body={post.body} id={post.id} userId={post.userId}
     */

    
    return (
        <div>
            <h1 className="mb-5">Maame's Blog</h1>
            <div>
                
            </div>
            <div className="row">
                <div className="col-8 mx-auto">
                    {
                        posts.map((post)=> (<PostItem key={post.id} {...post} />))
                    }
                </div>
            </div>
        </div>
    )
}


export default Home;