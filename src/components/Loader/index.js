import React from 'react'
import Lottie from 'react-lottie';
import ZekatLoader from '../../assets/loader.json';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: ZekatLoader,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

const Index = () => {
  var center = parseInt(window.innerHeight / 3);

  return (
    <div style={{ marginTop: center }}  >
      <Lottie
        options={defaultOptions}
        height={300}
        width={300}
      />
    </div>
  )
}

export default Index