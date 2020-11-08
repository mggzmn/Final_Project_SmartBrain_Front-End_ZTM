import React from "react";
import "./imageLinkForm.styles.css";
const ImageLinkForm = () => {
  return (
    <div>
      <p className="f3">
        {"This magic Brain will detect faces in your pictures"}
      </p>
      <div className="center">
        <div className="center form pa4 br3 shadow-5">
          <input type="text" className="f4 pa2 w-70 center" />
          <button className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple">
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
