import React from "react";

const FaceRecognition = ({ imageUrl }) => {
  return (
    <div className="center ma">
      <div className="absolute mt2">
        {imageUrl.length > 0 ? (
          <img
            src={imageUrl}
            alt="faceRecognition"
            width="500px"
            height="auto"
          />
        ) : null}
      </div>
    </div>
  );
};
//https://res.cloudinary.com/demo/image/upload/l_golden_star,g_north_west,w_20,x_314,y_148/w_500/docs/plain_face.jpg
export default FaceRecognition;
