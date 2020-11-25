import React from "react";

const Header = () => {
  return (
    <nav className="navbar">
      <section className="navbar__header wrapper">
        <img
          className="navbar__header--logo"
          src="/images/LambdaIcon.svg"
          alt="lambda logo"
        />
      </section>
    </nav>
  );
};

export default Header;
