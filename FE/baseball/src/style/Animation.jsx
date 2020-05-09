import { keyframes } from "styled-components";

export const bounce = keyframes`
  0% {
    transform: translateY(-5%);
  }
  100% {
    transform: translateY(5%);
  }
`;

export const slideIn = ({from, to}) => keyframes`
  0% {
    transform: translate(${from});

  }
  100% {
    transform: translate(${to});
  }
`;

export const fadeIn = ({target = 1, changePoint = 66}) => keyframes`
  0% {
    opacity: 0;
  }

  ${changePoint}% { 
    opacity: 0; 
  }

  100% {
    opacity: ${target};
  }
`;
