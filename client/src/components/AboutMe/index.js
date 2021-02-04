import React from "react";
import { Typography, IconButton } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import ScrollAnimation from "react-animate-on-scroll";
import * as ProfilePic from "../../images/ProfilePic_square.jpg";
import "./AboutMe.scss";

export default class AboutMe extends React.Component {
  handleSocialBtn(platform) {
    let url = "";
    if (platform === "linkedin") {
      url = "https://www.linkedin.com/in/david-kavanaugh-9b444417b/";
    }
    if (platform === "github") {
      url = "https://github.com/davidkavanaugh";
    }
    window.location.href = url;
  }
  render() {
    return (
      <section
        id="about-me"
        ref={(section) => {
          this.AboutMe = section;
        }}
      >
        <div className="about-me-text">
          <ScrollAnimation animateIn="fadeIn">
            <div className="about-me-header">
              <div className="about-me-profilePic">
                <img src={ProfilePic} alt="self-portrait" />
              </div>
              <Typography
                component="h3"
                variant="subtitle1"
                style={{ marginBottom: "5px" }}
              >
                <em>Hello,</em> my name is
              </Typography>
              <Typography
                component="h4"
                variant="h6"
                style={{ lineHeight: "1.2em", marginBottom: "10px" }}
              >
                <strong style={{ fontSize: "1.3em" }}>David Kavanaugh</strong>
              </Typography>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn">
            <div className="about-me-body">
              <Typography component="p">
                I'm a professional software engineer based in{" "}
                <em>Seattle, Washington.</em>
              </Typography>
              <Typography component="p">
                I started learning <em>HTML</em> and <em>CSS</em> in middle
                school when my friends and I wanted to make a website for our
                band. I started developing <em>full-stack applications</em> in
                2017. I have been writing code <em>professionally</em> since
                2020.{" "}
              </Typography>
              <Typography component="p">
                I’m a proficient <em>Node</em>, <em>.NET</em>, and{" "}
                <em>Django</em> developer, and I’m able to quickly learn new
                languages and stacks. I have a passion for group-coding and
                collaboration--I enjoy talking through challenges with peers and
                discussing strategies for the best solutions.
              </Typography>
              <Typography component="p">
                Most recently, I’ve been working remotely as a back-end engineer
                at bidCHUCK.com. We’re building a <em>NodeJs</em> API in{" "}
                <em>Hapi</em> with <em>TypeScript</em>. The team is dedicated to
                <em> Test Driven Development</em> and{" "}
                <em>self-documenting code</em>.
              </Typography>
              <Typography component="p">
                If you have any questions or would like to speak further, please
                contact me by email or phone.
              </Typography>
              <div className="about-me-contact">
                <Typography component="p">
                  <a
                    href="mailto:davidkavanaugh.dev@outlook.com?subject=Re: Portfolio"
                    className="unselectable"
                  >
                    davidkavanaugh.dev@outlook.com
                  </a>
                </Typography>
                <Typography component="p">
                  <a href="tel:1-336-858-7702" className="unselectable">
                    (336) 858-7702
                  </a>
                </Typography>
                <Typography component="p">
                  <IconButton
                    className="iconBtn"
                    edge="start"
                    onClick={() => this.handleSocialBtn("linkedin")}
                  >
                    <LinkedInIcon fontSize="inherit" />
                  </IconButton>
                  <IconButton
                    className="iconBtn"
                    edge="end"
                    onClick={() => this.handleSocialBtn("github")}
                  >
                    <GitHubIcon fontSize="inherit" />
                  </IconButton>
                </Typography>
              </div>
            </div>
          </ScrollAnimation>
        </div>
        <div className="blue-background">
          <ScrollAnimation animateIn="fadeIn">
            <div className="full-height">
              <div className="about-me-graphics">
                <div className="row"></div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    );
  }
}
