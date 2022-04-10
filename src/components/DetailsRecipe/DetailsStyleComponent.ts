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

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    .top {
      display: flex;
      flex-direction: column;
      padding: 0;

      img {
        height: 300px;
        width: 100vw;
        object-fit: cover;
        border-radius: 0;
      }

      .top-information {
        padding: 10px;
      }

      .recipe-detail-stuff {
        width: 100%;
        justify-content: space-evenly;
      }

      .top-information .ingredients {
        width: 100%;
        padding: 20px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-top: 15px;
        list-style: none;

        h2 {
          align-self: center;
        }
      }
    }
    .bottom {
      padding: 20px;

      .description {
        font-size: 20px;
        text-align: center;
      }
    }
  }
`;

export default DetailsStyleComponent;
