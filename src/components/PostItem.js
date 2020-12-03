import React from 'react';


function PostItem (props) {
    return (
        <a className="d-block shadow p-3 m-3 rounded text-decoration-none text-dark">
            <h3>{props.title}</h3>
            <p>{props.body}{props.body}{props.body}{props.body}{props.body}{props.body}{props.body}{props.body}</p>
        </a>
    )
}


export default PostItem;