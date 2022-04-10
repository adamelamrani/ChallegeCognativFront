import styled from "styled-components";

const LayoutHeaderStyle = styled.div`
  background-color: #333;
  box-shadow: #333 0px 0px 10px;
  padding: 0 100px;
  position: fixed;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;

  h2 {
    color: white;
  }

  h2:hover {
    color: red;
  }

  a {
    text-decoration: none;
  }

  a:visited {
    color: inherit;
  }
`;

export default LayoutHeaderStyle;
