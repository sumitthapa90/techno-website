import Image from 'next/image';
import React from 'react';

type Props = {
  img:string
};

const ImgHover = (props: Props) => {
  return (
    <div style={{position:"relative"}}>
      <Image
        style={{ borderRadius: '50%' }}
        src={props.img}
        alt="MD"
        width={250}
        height={250}
      />
<div style={{position:"absolute", top:"5px"}}><svg
        width="250"
        height="250"
        viewBox="0 0 265 255"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="132.5" cy="127.5" rx="132.5" ry="127.5" fill="url(#paint0_linear_1018_2047)" />
        <defs>
         
        </defs>
      </svg></div>

      
    </div>
  );
};

export default ImgHover;
