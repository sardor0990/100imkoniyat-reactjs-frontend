import styled from 'styled-components';
// Container for the card grid
export const CardContainer = styled.div`
  display: flex;
  flex-direction: row; /* Ensure items are aligned in rows */
  flex-wrap: wrap; /* Allow wrapping to the next row when necessary */
  gap: 20px; /* Space between cards */
  justify-content: flex-start; /* Space between cards in the row */
  align-items: flex-start; /* Align cards at the start of the row */
`;

// Style for each card container
export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Ensure content inside is spaced */
  width: 30%; /* Each card takes up 1/3 of the row */
  box-sizing: border-box; /* Ensure padding is included in width */
  border-radius: 8px; /* Optional: Round the corners */
  min-height: 200px; /* Set a minimum height to prevent collapse */

  @media (max-width: 1024px) {
    width: 45%; /* 2 cards per row on medium screens */
  }

  @media (min-width: 768px) {
        width: 32%;
}

  @media (max-width: 768px) {
    width: 100%; /* 1 card per row on small screens */
  }
`;

// Style for the card step
export const CardStep = styled.div`
  box-sizing: border-box;
`;

// Style for the image icon
export const ImgIcon = styled.img<{ rotate: boolean }>`
  max-width: 326px;
  height: auto;
  transform: ${(props) => (props.rotate ? "rotateY(180deg)" : "rotateY(0deg)")};
  transition: transform 0.3s ease;

  @media (max-width: 768px) {
    display: none;
  }
`;