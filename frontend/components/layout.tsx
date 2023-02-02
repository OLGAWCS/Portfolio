import React from "react";
import Header from "./header";

interface Props {
  children?: React.ReactNode;
}
const Layout = ({ children, ...props }: Props) => {
  return (
    <div>
      <Header />
      <main {...props}>{children}</main>
    </div>
  );
};

export default Layout;
