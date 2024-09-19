import React from 'react';
import Lottie from 'react-lottie';
import useMediaQuery from '@mui/material/useMediaQuery';
import NotFoundAnimation from '../../assets/404.json';



const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: NotFoundAnimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};


const webCss = { width: '100vh', alignSelf: 'center', justifySelf: 'center', marginLeft: window.innerWidth / 4 };
const mobileCss = { marginTop: window.innerHeight / 4}

const NotFound = () => {
  const matches = useMediaQuery('(min-width:600px)');

  return (
    <div style={matches ? webCss : mobileCss}>
      <Lottie
        options={defaultOptions}
      />
    </div>
  )
}

export default NotFound