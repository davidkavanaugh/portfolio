import React from "react";
import { Typography, Hidden } from "@material-ui/core";
import ReactLogo from "../../images/react-logo.png";
import MongoLogo from "../../images/mongodb-logo.png";
import NodeLogo from "../../images/node-logo.png";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { CSSTransition } from "react-transition-group";
import { Link } from "react-scroll";
import ScrollAnimation from "react-animate-on-scroll";

import "./Home.scss";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keepScrolling: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    setTimeout(() => {
      this.setState({
        keepScrolling: true,
      });
    }, 1000);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    this.setState({
      keepScrolling: false,
    });
  };

  render() {
    return (
      <React.Fragment>
        <div id="home">
          <Hidden mdUp>
            <span></span>
          </Hidden>
          <span></span>
          <span></span>
          <div>
            <ScrollAnimation animateIn="fadeInDown" duration={0.5}>
              <Typography
                className="title"
                component="h1"
                variant="h1"
                align="center"
                style={{ padding: "0px 15px" }}
              >
                David Kavanaugh
              </Typography>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" duration={0.5}>
              <Typography variant="h5" component="h5" align="center">
                Full Stack Developer
              </Typography>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInUp" duration={0.5}>
              <div id="mern-stack">
                <img src={MongoLogo} alt="mongodb" />
                <img src={ReactLogo} alt="reactjs" />
                <img src={NodeLogo} alt="nodejs" />
              </div>
            </ScrollAnimation>
          </div>
          <span></span>
          <div id="keep-scrolling">
            {window.pageYOffset === 0 ? (
              <CSSTransition
                in={this.state.keepScrolling}
                appear={true}
                unmountOnExit
                classNames="keep-scrolling"
                timeout={500}
              >
                <div className="animate__animated animate__bounceInUp">
                  <Link
                    to="about-me"
                    spy={true}
                    smooth={true}
                    duration={500}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      cursor: "pointer",
                    }}
                  >
                    keep scrolling
                    <KeyboardArrowDownIcon />
                  </Link>
                </div>
              </CSSTransition>
            ) : null}
          </div>
          <Hidden mdUp>
            <span></span>
          </Hidden>
        </div>
      </React.Fragment>
    );
  }
}
