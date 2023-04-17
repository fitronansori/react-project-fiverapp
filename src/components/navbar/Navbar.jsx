import React, { useEffect, useState } from "react";
import "./Navbar.scss";
/**
 * import Link from react-router-dom untuk membuat link ke halaman lain
 * to digunakan untuk menentukan path yang akan di tuju
 * import useLocation from react-router-dom untuk mendapatkan path yang sedang aktif
 */
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  // mendapatkan path yang sedang aktif
  const { pathname } = useLocation();

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
    // jika active bernilai true atau path yang sedang aktif bukan "/ (Home)", maka tambahkan class active ke navbar
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link to={"/"} className="link">
            <span className="logo-text">fiverr</span>
          </Link>
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
                      <Link className="link hover" to={"/gigs"}>
                        Gigs
                      </Link>
                      <Link className="link hover" to={"/add"}>
                        Add New Gig
                      </Link>
                    </>
                  )}
                  <Link className="link hover" to={"/orders"}>
                    Orders
                  </Link>
                  <Link className="link hover" to={"/messages"}>
                    Messages
                  </Link>
                  <Link className="link hover" to={"/"}>
                    Log Out
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* jika active bernilai true atau path yang sedang aktif bukan "/ (Home)", maka tampilkan menu  */}
      {(active || pathname !== "/") && (
        <>
          <hr />

          <div className="menu">
            <Link className="link menuLink" to="/">
              Graphics & Design
            </Link>
            <Link className="link menuLink" to="/">
              Video & Animation
            </Link>
            <Link className="link menuLink" to="/">
              Writing & Translation
            </Link>
            <Link className="link menuLink" to="/">
              AI Services
            </Link>
            <Link className="link menuLink" to="/">
              Digital Marketing
            </Link>
            <Link className="link menuLink" to="/">
              Music & Audio
            </Link>
            <Link className="link menuLink" to="/">
              Programming & Tech
            </Link>
            <Link className="link menuLink" to="/">
              Business
            </Link>
            <Link className="link menuLink" to="/">
              Lifestyle
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
