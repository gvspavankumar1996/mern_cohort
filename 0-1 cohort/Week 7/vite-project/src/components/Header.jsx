import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <button onClick={() => navigate("/")}>Landing page</button>
      <button onClick={() => navigate("/dashboard")}>dashboard page</button>
      <div style={{ background: "black", color: "white" }}>Header</div>
    </>
  );
};

export default Header;
