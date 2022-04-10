import styled from "styled-components";

const RecipiesStyleComponent = styled.div`
  .recipes-title {
    font-size: 30px;
    font-weight: bold;
    color: #333;
    margin-bottom: 20px;
  }

  .recipe {
    margin-bottom: 20px;
    display: flex;
    height: 300px;
    border-radius: 20px;
    overflow: hidden;
    background-color: #fff;
    box-shadow: #bbb 0px 0px 5px;

    .recipe-image {
      height: 100%;
    }

    .recipe-info {
      flex: 1;
      padding: 20px 30px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .recipe-category {
        font-size: 20px;
        font-weight: bold;
        color: #666;
      }

      .recipe-name {
        font-size: 25px;
        font-weight: bold;
        color: #333;
        margin-top: 10px;
      }

      .recipe-stuff {
        display: flex;
        gap: 20px;
        margin-top: 10px;
        list-style: none;

        .recipe-stuff li {
          font-size: 18px;
          color: #666;
        }
      }

      .recipe-button {
        align-self: flex-end;
        background-color: #333;
        color: #fff;
        padding: 10px 20px;
        border-radius: 20px;
      }

      .recipe-arrow {
        display: none;
      }

      .recipe-button:hover {
        align-self: flex-end;
        background-color: #333;
        color: #fff;
        padding: 10px 20px;
        border-radius: 20px;
        background-color: black;
      }

      .recipe-button:active {
        align-self: flex-end;
        background-color: #333;
        color: #fff;
        padding: 10px 20px;
        border-radius: 20px;
        background-color: black;
        transform: scale(0.9);
      }
    }
  }

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    .recipe {
      margin-bottom: 20px;
      display: flex;
      flex-direction: column;
      height: 300px;
      width: 90vw;
      border-radius: 5px;
      overflow: hidden;
      background-color: #fff;
      box-shadow: #bbb 0px 0px 5px;

      .recipe-image {
        height: 70%;
        object-fit: cover;
      }

      .recipe-info {
        padding: 5px 30px;

        .recipe-category {
          font-size: 15px;
          margin-top: 10px;
        }

        .recipe-name {
          font-size: 20px;
          margin: 0;
        }

        .recipe-stuff {
          margin: 0;
        }

        .recipe-button {
          display: none;
        }

        .recipe-arrow {
          display: flex;
          align-self: flex-end;
          height: 50px;
          width: 50px;
          position: relative;
          top: -50px;
        }
      }
    }
  }
`;

export default RecipiesStyleComponent;
