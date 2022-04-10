import styled from "styled-components";

const DetailsStyleComponent = styled.div`
  background-color: #fafafa;
  padding-top: 50px;

  a {
    text-decoration: none;
  }

  .top {
    display: flex;
    padding: 20px 100px;

    img {
      height: 400px;
      border-radius: 20px;
    }

    .top-information {
      display: flex;
      flex-direction: column;
      align-items: center;
      flex: 1;

      .recipe-detail-name {
        font-size: 25px;
        font-weight: bold;
        color: #333;
        margin-top: 10px;
      }

      .recipe-detail-category {
        font-size: 20px;
        font-weight: bold;
        color: #666;
      }

      .recipe-detail-stuff {
        list-style: none;
        display: flex;
        margin-top: 10px;
        gap: 30px;
        font-size: 18px;
        color: #666;
      }

      .ingredients {
        margin-top: 40px;
        list-style: none;

        h2 {
          font-size: 20px;
          color: #333;
          font-weight: bold;
        }

        li {
          margin-top: 10px;
          text-align: center;
        }
      }
    }
  }

  .bottom {
    padding: 20px 100px;

    .description {
      font-size: 30px;
      font-weight: bold;
      color: #333;
      margin-bottom: 20px;
    }

    .description-text {
      font-size: 18px;
      color: #666;
      line-height: 1.5;
      letter-spacing: 0.2px;
    }
  }
`;

export default DetailsStyleComponent;
