import React from "react";
import './PostPage.css';

function ImageUpload(props){
    return(
        <div className="Center">
            <p><b>{props.heading}</b></p>
            <input
            type="file"
            name="img"
            accept="image/*"
            placeholder={props.placeholder}
            className="fileSelect"
            >
            </input>
            <button>Upload</button>
        </div>
    )
}

export default ImageUpload;