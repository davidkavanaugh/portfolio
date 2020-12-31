import React, { Fragment } from "react";
import NavDrawer from "./NavDrawer";
import { AppBar, Hidden } from "@material-ui/core/";
import { Route } from "react-router-dom";
import { Link } from "react-scroll";
import Logo from "../../images/logo.png";
import "./Navbar.scss";

const Navbar = () => {
  const navLinks = {
    About: {
      url: "about-me",
    },
    Projects: {
      url: "projects",
    },
    // Resume: {
    //   url: "resume",
    // },
    // "Blog": {
    //     "url": "blog"
    // },
    Contact: {
      url: "contact",
    },
  };

  return (
    <div id="navbar">
      <AppBar position="fixed" style={{ boxShadow: "0px 0px 0px 0px" }}>
        <Route
          path="/"
          render={({ location }) => (
            <Fragment>
              <Hidden smDown>
                <div className="nav">
                  <img
                    src={Logo}
                    alt="logo"
                    onClick={() =>
                      window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                      })
                    }
                  />
                  <div id="links">
                    {Object.entries(navLinks).map(([key, value]) => {
                      return (
                        <Link
                          className="link"
                          key={key}
                          activeClass="active"
                          to={value.url}
                          spy={true}
                          smooth={true}
                          hashSpy={true}
                          duration={500}
                          isDynamic={true}
                          onSetActive={() => console.log(key)}
                          ignoreCancelEvents={false}
                        >
                          {key}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </Hidden>
              <Hidden mdUp>
                <div className="nav">
                  <span></span>
                  <NavDrawer navLinks={navLinks} />
                </div>
              </Hidden>
            </Fragment>
          )}
        />
      </AppBar>
    </div>
  );
};

export default Navbar;
