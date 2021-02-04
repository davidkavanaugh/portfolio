import React from "react";
import { Container, Typography, IconButton } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import ScrollAnimation from "react-animate-on-scroll";

import "./Contact.scss";

class Contact extends React.Component {
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
        id="contact"
        ref={(section) => {
          this.Contact = section;
        }}
      >
        <ScrollAnimation animateIn="fadeIn" style={{ width: "100%" }}>
          <Container maxWidth="sm">
            <Typography component="h3" variant="h3">
              Contact Info
            </Typography>
            <div className="contact-text">
              <Typography component="p">
                <a
                  href="mailto:davidkavanaugh.dev@outlook.com?subject=Re: Portfolio"
                  className="unselectable"
                >
                  davidkavanaugh.dev
                  <span className="breakpoint">@outlook.com</span>
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
          </Container>
        </ScrollAnimation>
      </section>
    );
  }
}

export default Contact;
