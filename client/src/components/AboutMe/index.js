import React from "react";
import { Typography } from "@material-ui/core";
import EventNoteIcon from "@material-ui/icons/EventNote";
import PeopleIcon from "@material-ui/icons/People";
import DevicesIcon from "@material-ui/icons/Devices";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";
import ScrollAnimation from "react-animate-on-scroll";
import "./AboutMe.scss";

export default class AboutMe extends React.Component {
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
                I enjoy writing <em>elegant code</em> to solve complex problems.{" "}
              </Typography>
              <Typography component="p">
                I'm a <em>flexible developer,</em> willing and able to quickly
                learn new languages and technologies, such as{" "}
                <em>React, Angular, Django</em> and <em>ASP.NET</em>
              </Typography>
            </div>
          </ScrollAnimation>
        </div>
        <div className="blue-background">
          <ScrollAnimation animateIn="fadeIn">
            <div className="full-height">
              <div className="about-me-graphics">
                <div className="row">
                  <div className="organized">
                    <div className="icon">
                      <EventNoteIcon />
                    </div>
                    <p>Organized</p>
                  </div>
                  <div className="collaborative">
                    <div className="icon">
                      <PeopleIcon />
                    </div>
                    <p>Collaborative</p>
                  </div>
                </div>
                <div className="row">
                  <div className="responsive">
                    <div className="icon">
                      <DevicesIcon />
                    </div>
                    <p>Responsive</p>
                  </div>
                  <div className="intuitive">
                    <div className="icon">
                      <EmojiObjectsIcon />
                    </div>
                    <p>Intuitive</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    );
  }
}
