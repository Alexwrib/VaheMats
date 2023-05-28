import React, { ReactElement } from "react";
import Header from "../Header";
interface ILayout {
  children: ReactElement;
}
const Layout = ({ children }: ILayout) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
