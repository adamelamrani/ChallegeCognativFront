import { Link } from "react-router-dom";
import LayoutHeaderStyle from "./LayoutHeaderStyle";

type LayoutProps = {
  children: React.ReactNode;
};
const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <LayoutHeaderStyle className="header">
        <Link to="/">
          <h2>Food recipies</h2>
        </Link>
      </LayoutHeaderStyle>
      {children}
    </>
  );
};

export default Layout;
