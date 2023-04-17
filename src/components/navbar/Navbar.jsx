import React, { useEffect, useState } from "react";
import "./Navbar.scss";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);

    return () => window.removeEventListener("scroll", isActive);
  }, []);

  const currentUser = {
    id: 1,
    username: "Fitron Ansori",
    imgUrl: "https://avatars.githubusercontent.com/u/69096896?v=4",
    isSeller: true,
  };

  return (
    <div className={active ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <span className="logo-text">Fiverr</span>
          <span className="dot">.</span>
        </div>

        <div className="links">
          <span>Fiverr Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign In</span>
          {/* If the user is not a seller, then display the text Become A Seller */}
          {!currentUser?.isSeller && <span>Become A Saller</span>}
          {/* If the user is not a seller, then display the button Join */}
          {!currentUser?.isSeller && <button>Join</button>}

          {/* if currentUser is not null, then display the user profile */}
          {currentUser && (
            <div className="user" onClick={() => setOpen(!open)}>
              <img src={currentUser.imgUrl} alt="" />
              <span>{currentUser.username}</span>

              {open && (
                <div className="option">
                  {/* if currentUser is a seller, then display the text Gigs and Add New Gig */}
                  {currentUser?.isSeller && (
                    <>
                      <span>Gigs</span>
                      <span>Add New Gig</span>
                    </>
                  )}
                  <span>Order</span>
                  <span>Messages</span>
                  <span>Log Out</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {active && (
        <>
          <hr />

          <div className="menu">
            <span>test</span>
            <span>test</span>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
