import React from "react";
import {
  Paper,
  Typography,
  Container,
  IconButton,
  Hidden,
} from "@material-ui/core";
import ScrollAnimation from "react-animate-on-scroll";
import PrintIcon from "@material-ui/icons/Print";
import PdfIcon from "@material-ui/icons/PictureAsPdf";
import { Waypoint } from "react-waypoint";
import ResumePng from "../../images/DavidKavanaughResume.png";
import ResumePdf from "../../documents/DavidKavanaughResume.pdf";
import $ from "jquery";
import "./Resume.scss";

const Divider = () => {
  return (
    <div
      style={{
        margin: "10px 10px",
        borderColor: "black",
        borderStyle: "solid",
        borderWidth: "0px 0px 1px 0px",
        opacity: "0.2",
      }}
    ></div>
  );
};

export default class Resume extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progresClass: "",
    };
  }

  skills = {
    HTML: "95%",
    "CSS/SCSS": "95%",
    JavaScript: "95%",
    ReactJs: "95%",
    jQuery: "90%",
    TypeScript: "90%",
    NodeJs: "90%",
    "MongoDB/Typegoose": "90%",
    Redux: "85%",
    ExpressJs: "85%",
    Git: "75%",
    Hapi: "60%",
    "Mocha/Chia/Sinon": "50%",
    "Azure DevOps": "50%",
    Docker: "25%",
    Kubernetes: "20%",
  };

  experience = [
    {
      company: "BidChuck",
      location: "Remote",
      position: "Back End Developer",
      length: "June, 2020 - Present",
      responsibilities: [
        "Standardize onboarding procedure for local linux development",
        "Create User and Company models for MongoDB with Typegoose",
        "Create endpoints on API for registration with Hapi/Joi",
        "Test with Mocha, Chai, and Sinon",
      ],
    },
    {
      company: "Puget Sound Gastroenterology",
      location: "Lynnwood, WA",
      position: "Patient Accounts Specialist",
      length: "January, 2015 - Present",
      responsibilities: [
        "Post payments to patient accounts",
        "Answer patient billing questions",
        "Designed and submitted an updated UI for company website and was awarded a cash prize",
      ],
    },
    {
      company: "Advanced Home Care",
      location: "Greensboro, NC",
      position: "Patient Accounts Specialist",
      length: "2011 - 2014",
      responsibilities: [
        "Prepared Home Health Referrals and Remittances for insurance processing",
        "Audited denied insurance claims and resubmitted with appropriate updates and fixes",
      ],
    },
  ];

  education = [
    {
      name: "Indiana Wesleyan University",
      location: "Marion, IN",
      degree: "Bachelor of Science in Humanities",
      dates: "December, 2009",
      concentration: ["Concentrations in Art and Writing"],
    },
    {
      name: "Free Code Camp",
      location: "www.freecodecamp.org",
      degree: "Full Stack Web Development",
      dates: "2017 - Present",
      concentration: [
        "Responsive Web Design",
        "JavaScript Algorithms and Data Structures",
        "Front End Libraries",
        "Data Visualization",
        "APIs and Microservices",
        "Information Security and Quality Assurance",
      ],
    },
    {
      name: "MongoDB Live",
      location: "Online",
      degree: "Virtual Seminar",
      dates: "June, 2020",
      concentration: ["Data Modeling", "MongoDB Realm"],
    },
    {
      name: "Seattle Code Camp",
      location: "Seattle, WA",
      degree: "Summer Seminars",
      dates: "2017, 2018, 2019",
      concentration: [
        ".NET deployment with Docker",
        "Functional C#",
        "MongoDB",
        "Kubernetes",
      ],
    },
  ];

  componentDidMount() {
    this.hidePrintButton();
    setTimeout(() => this.hideMobileOverlay(), 100);
  }

  handleWaypointEnter = () => {
    this.setState({
      progresClass: "progress",
    });
  };

  handlePrint = () => {
    window.print();
  };

  handleEmail = () => {
    window.location.href =
      "mailto:davidkavanaugh.dev@outlook.com?subject=RE: davidkavanaugh.com resume &body=";
  };

  showPrintButton = () => {
    $(".print").show();
  };

  showMobileOverlay = () => {
    $(".resume-mobile-overlay").show();
  };

  hidePrintButton = () => {
    $(".print").hide();
  };

  hideMobileOverlay = () => {
    $(".resume-mobile-overlay").hide();
  };

  render() {
    return (
      <section
        id="resume"
        ref={(section) => {
          this.Resume = section;
        }}
      >
        <IconButton
          className="print animate_animated animate__bounceIn"
          onClick={this.handlePrint}
          style={{
            margin: "20px 20px",
            padding: "0px 0px",
            position: "fixed",
            bottom: "0",
            right: "0",
          }}
        >
          <PrintIcon
            style={{
              fontSize: "1.5em",
              color: "white",
              backgroundColor: "#8860d0",
              padding: "10px 10px",
              borderRadius: "50%",
            }}
          />
          <div className="btn-overlay"></div>
        </IconButton>
        <Hidden mdUp>
          <Waypoint
            topOffset="-65%"
            bottomOffset="25%"
            onEnter={this.showMobileOverlay}
            onLeave={this.hideMobileOverlay}
          />
          <Typography
            component="h3"
            variant="h3"
            style={{
              textAlign: "center",
              paddingTop: "50px",
              marginBottom: "25px",
              padding: "0px 15px 0px 15px",
            }}
          >
            Resume
          </Typography>
          <ScrollAnimation animateIn="zoomIn" duration={0.3}>
            <a href={ResumePdf} target="_blank">
              <div className="resume-mobile-overlay animate__animated animate__fadeIn">
                <PdfIcon fontSize="large" />
              </div>
            </a>
            <img
              className="resume-image"
              src={ResumePng}
              alt="David Kavanaugh Resume"
            />
          </ScrollAnimation>
        </Hidden>
        <Hidden smDown>
          <ScrollAnimation animateIn="fadeIn" style={{ width: "100%" }}>
            <Container className="container" maxWidth={"lg"}>
              <Paper className="paper" elevation={4}>
                <Typography component="h3" variant="h4">
                  David Kavanaugh
                </Typography>
                <Divider />
                <div className="contact-info">
                  <ul>
                    <li>Snohomish, WA</li>
                    <li className="email" onClick={this.handleEmail}>
                      <span className="line">davidkavanaugh.dev</span>
                      <span className="line">@outlook.com</span>
                    </li>
                    <li>(336) 858-7702</li>
                    <li>
                      <a href="https://github.com/davidkavanaugh/">
                        <span className="line">github.com/</span>
                        <span className="line">davidkavanaugh</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/david-kavanaugh-9b444417b">
                        linkedin.com/in/david-kavanaugh-9b444417b
                      </a>
                    </li>
                  </ul>
                </div>
                <Divider />
                <div className="summary">
                  <p>
                    I’m a self-taught full-stack software developer with a
                    background in medical billing and customer service. I’ve
                    been building websites since I was in middle school and have
                    been developing MERN stack applications since my wife and I
                    moved to Puget Sound in 2014. I'm currently working
                    part-time for a local startup called BidChuck, but I'm
                    looking for a full time position.
                  </p>
                </div>
                <Divider />
                <Waypoint onEnter={this.handleWaypointEnter} />
                <div className="skills">
                  <Typography component="h4">Technical Skills</Typography>
                  <div className="skills-list">
                    {Object.keys(this.skills).map((key, index) => {
                      return (
                        <div className="skill" key={key}>
                          <Typography component="h5" variant="h5">
                            {key}
                          </Typography>
                          <div className="skill-box">
                            <div className="meter">
                              <span style={{ width: this.skills[key] }}>
                                <span
                                  className={this.state.progresClass}
                                ></span>
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <Waypoint
                  topOffset="-35%"
                  bottomOffset="7%"
                  onEnter={this.showPrintButton}
                  onLeave={this.hidePrintButton}
                />
                <Divider />
                <div className="experience">
                  <Typography component="h4" style={{ marginBottom: "5px" }}>
                    Professional Experience
                  </Typography>
                  {this.experience.map((job, key) => {
                    return (
                      <div className="job" key={key}>
                        <Typography component="h5" variant="h5">
                          <strong>{job.company}</strong>, {job.location},{" "}
                          <em>{`${job.position}, ${job.length}`}</em>
                        </Typography>
                        <ul style={{ marginTop: "3px" }}>
                          {job.responsibilities.map((responsibility, key) => {
                            return <li key={key}>{responsibility}</li>;
                          })}
                        </ul>
                      </div>
                    );
                  })}
                </div>
                <Divider />
                <div className="education">
                  <Typography component="h4">Education</Typography>
                  {this.education.map((school, key) => {
                    return (
                      <div className="school" key={key}>
                        <Typography component="h5" variant="h5">
                          <strong>{school.name}</strong>, {school.location},{" "}
                          <em>{`${school.degree}, ${school.dates}`}</em>
                        </Typography>
                        <ul style={{ marginTop: "3px" }}>
                          {school.concentration.map((concentration, key) => {
                            return <li key={key}>{concentration}</li>;
                          })}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </Paper>
            </Container>
          </ScrollAnimation>
        </Hidden>
      </section>
    );
  }
}
