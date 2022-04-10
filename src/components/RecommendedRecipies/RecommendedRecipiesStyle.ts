import styled from "styled-components";

const RecommendedRecipiesStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    font-size: 30px;
    font-weight: bold;
    color: #333;
    margin-bottom: 20px;
  }

  .recommendations {
    width: 880px;
    height: 200px;
    overflow-y: hidden;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
    justify-content: flex-start;
  }

  .recommended-image {
    overflow-y: auto;
    width: 200px;
    height: 200px;
    border-radius: 20px;
    gap: 20px;
  }
`;

export default RecommendedRecipiesStyle;
