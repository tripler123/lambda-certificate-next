import React from "react";
import Header from '../../components/Header'

const BasicLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default BasicLayout;
