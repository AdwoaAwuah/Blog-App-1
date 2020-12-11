import React from 'react';


function PostItem (props) {
    return (
        <div className="d-block shadow p-3 m-3 rounded text-decoration-none text-dark">
            <h3>{props.title}</h3>
            <p>{props.body}</p>
            <span></span>
        </div>
    )
}


export default PostItem;