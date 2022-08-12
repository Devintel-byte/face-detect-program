import React from "react";

const FaceRecogniton = ({ imageUrl }) => {
    return (
       <div className="center">
        <img src={imageUrl} alt='' />
       </div>
    );
}

export default FaceRecogniton;
