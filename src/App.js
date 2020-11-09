import React from "react";
import "./App.css";
import Navigation from "./components/navigation/navigation.component";
import Logo from "./components/logo/logo.component";
import ImageLinkForm from "./components/imageLinkForm/imageLinkForm.component";
import Rank from "./components/rank/rank.component";
import FaceRecognition from "./components/faceRecognition/faceRecognition.component";

import Particles from "react-particles-js";
import Clarifai from "clarifai";
import "tachyons";

const app = new Clarifai.App({
  //Your api key, this is mine
  apiKey: "3737fb950391413698e10be84f45440c",
});

const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800,
      },
    },
  },
};

function App() {
  const [inputImage, setInputImage] = React.useState("");
  const [imageUrl, setImageUrl] = React.useState("");

  const onInputChange = (e) => {
    setInputImage(e.target.value);
  };
  const onButtonSubmit = () => {
    setImageUrl(inputImage);
  };

  React.useEffect(() => {
    console.log(imageUrl);
    if (imageUrl.length > 0) {
      app.models.predict(Clarifai.FACE_DETECT_MODEL, imageUrl).then(
        function (response) {
          console.log(response.outputs[0].data.regions[0]);
        },
        function (err) {
          // there was an error
        }
      );
    }
  }, [imageUrl]);

  return (
    <div className="App">
      <Particles className="particles" params={particlesOptions} />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm
        onInputChange={onInputChange}
        onButtonSubmit={onButtonSubmit}
      />
      <FaceRecognition imageUrl={imageUrl} />
    </div>
  );
}

export default App;
