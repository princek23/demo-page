import React from "react";
import "./Avatar.css";
import "tachyons";

const Avatar = (props) => {
  return (
    <div>
      <h1>Welcome to Avatar World</h1>
    <div className="avatarstyle ma4 bg-light-green dib pa4">
      <img src="https://joeschmoe.io/api/v1/prince" alt="Avatar" />
      <h1 className="">{props.name}</h1>
      <p>{props.work}</p>

    </div>
    <button>Save</button>
    </div>
  )
};

export default Avatar;
