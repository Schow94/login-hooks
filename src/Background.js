import React from 'react';
import Image1 from './images/image1.jpg';
import Image2 from './images/image2.jpg';
import Image3 from './images/image3.jpg';
import Image4 from './images/image4.jpg';

let rand = Math.ceil(Math.random() * 5);
let image = `Image${rand}`;

const styles = {
  backgroundImage: `url(${Image1})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  height: '100%',
  width: '100wv',
  backgroundColor: 'black',
  overflow: 'auto'
};

function Background(props) {
  console.log(image);
  return <div style={styles}>{props.children}</div>;
}

export default Background;
