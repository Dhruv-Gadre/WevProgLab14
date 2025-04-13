import React from 'react';
import srcImage from '../Images/ben10.jpg';

function ImageDisplay() {
  return (
    <div>
      <img 
        src={"../Images/download.jpeg"}
        alt="Public folder image"
        height={"100px"}      
      />
      <img 
        src={srcImage} 
              alt="Src folder image"
              height={"100px"}
      />
    </div>
  );
}

export default ImageDisplay;