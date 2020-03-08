import React from 'react';
import { StyledUl, StyledLi } from './styles';

const SocialMedia = ({ ...props }) => {
  return (
    <StyledUl {...props}>
      <StyledLi white={props.white} vertical={props.vertical}>
        <a
          href="https://www.facebook.com/solfranenergy/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="29.063"
            height="28.887"
            viewBox="0 0 29.063 28.887"
          >
            <path
              d="M29.531,15a14.531,14.531,0,1,0-16.8,14.355V19.2H9.038V15h3.691V11.8c0-3.642,2.168-5.653,5.488-5.653a22.363,22.363,0,0,1,3.253.284V10H19.638a2.1,2.1,0,0,0-2.368,2.269V15H21.3l-.645,4.2H17.271V29.355A14.536,14.536,0,0,0,29.531,15Z"
              transform="translate(-0.469 -0.469)"
              fill="#00385d"
            />
          </svg>
        </a>
      </StyledLi>
      <StyledLi white={props.white} vertical={props.vertical}>
        <a
          href="https://m.me/solfranenergy"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="29.063"
            height="29.061"
            viewBox="0 0 29.063 29.061"
          >
            <path
              d="M15.032.469c-8.2,0-14.563,6-14.563,14.1A13.776,13.776,0,0,0,5.043,24.991c.489.44.388.695.472,3.412a1.167,1.167,0,0,0,1.634,1.029c3.1-1.365,3.14-1.473,3.666-1.33,8.982,2.472,18.717-3.276,18.717-13.537C29.531,6.465,23.238.469,15.032.469Zm8.745,10.847L19.5,18.088a2.19,2.19,0,0,1-3.159.582l-3.4-2.547a.879.879,0,0,0-1.055,0L7.291,19.605a.691.691,0,0,1-1-.918l4.277-6.772a2.189,2.189,0,0,1,3.159-.582l3.4,2.546a.879.879,0,0,0,1.055,0L22.775,10.4a.689.689,0,0,1,1,.915Z"
              transform="translate(-0.469 -0.469)"
              fill="#00385d"
            />
          </svg>
        </a>
      </StyledLi>
    </StyledUl>
  );
};

export default SocialMedia;
