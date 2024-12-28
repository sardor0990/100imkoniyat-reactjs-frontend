import styled, { keyframes } from 'styled-components';
// Container for the card grid
export const CardWrapper = styled.div`
  
  /* Background with dots and linear gradient */
  background-image: 
    radial-gradient(circle, rgba(192, 192, 192, 0.4) 1px, transparent 1px), /* Dots */
    linear-gradient(to top, rgba(245, 134, 52, 1), rgba(245, 134, 52, 0.9)); /* Orange gradient */
  
  background-size: 10px 10px, cover; /* Size for the dots and gradient */
  background-position: center;
  background-repeat: repeat; /* Repeat the dots */

  @media (max-width: 1024px) {
    width: 45%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1); /* Scale it up */
  }
  100% {
    transform: scale(1);
  }
`;

export const GoToArrow = styled.img`
  width: 64px; /* Set the width */
  height: 64px; /* Set the height */
  transform: translateY(-15px); /* Move it up and to the left */
  animation: ${pulseAnimation} 1s infinite; /* Apply the pulse animation */

  /* Add hover effect */
  &:hover {
    transform: translateY(-15px) translateX(15px) scale(1.1); /* Scale up on hover */
    transition: transform 0.2s ease; /* Smooth transition */
  }
`;