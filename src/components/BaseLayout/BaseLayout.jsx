import React from "react";
import "./BaseLayout.css";
function BaseLayout({ children }) {
  return (
    <>
      <header className="header">
        <div className="logo">
          <img src="vite.svg" alt="logo" />
          <h2>Plant IT</h2>
        </div>
        <div className="navigation">
          <p>About us</p>
          <p>Shop</p>
          <p>Our plants</p>
          <p>Contact</p>
        </div>
        <div>Actions</div>
      </header>
      {children}
      <footer className="footer">Base Layout Footer</footer>
    </>
  );
}

export default BaseLayout;
