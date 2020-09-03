import React from "react";
import { Paper, Typography, Hidden, Button } from "@material-ui/core";
import ScrollAnimation from "react-animate-on-scroll";
import Img1 from "../../images/project1.jpg";
import Img2 from "../../images/project2.jpg";
import Img3 from "../../images/project3.jpg";
import Img4 from "../../images/project4.jpg";
import Img5 from "../../images/project5.jpg";
import Img6 from "../../images/project6.jpg";

import "./Projects.scss";

export default class Projects extends React.Component {
  projects = [
    {
      name: "Call Center",
      image: Img1,
      url: "https://mern-stack-call-center.herokuapp.com",
      code: "https://github.com/davidkavanaugh/Call-Center",
      prevProject: "previous project",
      description: (
        <p>
          Customer Relationship Manager based on an{" "}
          <a href="https://github.com/davidkavanaugh/call-notes">old project</a>
          .
        </p>
      ),
    },
    {
      name: "Company Directory",
      image: Img2,
      url: "https://mern-stack-company-directory.herokuapp.com",
      code: "https://github.com/davidkavanaugh/Company-Directory",
      description: (
        <p>
          Sortable data table <br />
          <br />
          username: admin
          <br />
          password: Password123
        </p>
      ),
    },
    {
      name: "React Calculator",
      image: Img3,
      url: "https://codepen.io/davidkavanaugh/full/eYmXvQx",
      code: "https://codepen.io/davidkavanaugh/pen/eYmXvQx",
      description: <p>Add, subtract, multiply, divide...</p>,
    },
    {
      name: "React Drum Machine",
      image: Img4,
      url: "https://codepen.io/davidkavanaugh/full/PoYLoMj",
      code: "https://codepen.io/davidkavanaugh/pen/PoYLoMj",
      description: (
        <p>
          Turn up.
          <br />
          Rock out.
        </p>
      ),
    },
    {
      name: "Markdown Previewer",
      image: Img5,
      url: "https://codepen.io/davidkavanaugh/full/BaBMQgz",
      code: "https://codepen.io/davidkavanaugh/pen/BaBMQgz",
      description: <p>Editor build in React.</p>,
    },
    {
      name: "React D3 Bar Chart",
      image: Img6,
      url: "https://codepen.io/davidkavanaugh/full/abOmKwa",
      code: "https://codepen.io/davidkavanaugh/pen/abOmKwa",
      description: <p>Data visualization</p>,
    },
  ];

  render() {
    return (
      <section
        id="projects"
        ref={(section) => {
          this.Projects = section;
        }}
      >
        <ScrollAnimation animateIn="fadeIn" duration={0.3}>
          <Paper elevation={0} square>
            <Typography
              component="h3"
              variant="h3"
              style={{
                textAlign: "center",
                marginBottom: "25px",
                padding: "50px 15px 0px 15px",
              }}
            >
              Projects
            </Typography>
            <Hidden smDown>
              <div id="paper">
                {this.projects.map((project, key) => {
                  return (
                    <React.Fragment key={key}>
                      <ScrollAnimation animateIn="zoomIn" duration={0.5}>
                        <div className="card">
                          <div className="overlay">
                            <Typography
                              component="h6"
                              variant="h6"
                              style={{ color: "white" }}
                            >
                              {project.name}
                            </Typography>
                            {project.description}
                            <div className="buttons">
                              <a
                                href={project.url}
                                alt={`to ${project.name} url`}
                              >
                                <Button color="primary" variant="contained">
                                  app
                                </Button>
                              </a>
                              <a
                                href={project.code}
                                alt={`view ${project.name} code`}
                              >
                                <Button color="primary" variant="contained">
                                  code
                                </Button>
                              </a>
                            </div>
                          </div>

                          <img src={project.image} alt={project.name} />
                        </div>
                      </ScrollAnimation>
                    </React.Fragment>
                  );
                })}
              </div>
            </Hidden>
            <Hidden mdUp>
              <div id="paper">
                {this.projects.map((project, key) => {
                  return (
                    <React.Fragment key={key}>
                      <ScrollAnimation animateIn="zoomIn" duration={0.5}>
                        <div className="card">
                          <ScrollAnimation animateIn="fadeIn" duration={1.5}>
                            <div className="mobile-overlay">
                              <Typography
                                component="h6"
                                variant="h6"
                                style={{ color: "white" }}
                              >
                                {project.name}
                              </Typography>
                              {project.description}
                              <div className="buttons">
                                <a
                                  href={project.url}
                                  alt={`to ${project.name} url`}
                                >
                                  <Button color="primary" variant="contained">
                                    app
                                  </Button>
                                </a>
                                <a
                                  href={project.code}
                                  alt={`view ${project.name} code`}
                                >
                                  <Button color="primary" variant="contained">
                                    code
                                  </Button>
                                </a>
                              </div>
                            </div>
                          </ScrollAnimation>
                          <img src={project.image} alt={project.name} />
                        </div>
                      </ScrollAnimation>
                    </React.Fragment>
                  );
                })}
              </div>
            </Hidden>
          </Paper>
        </ScrollAnimation>
      </section>
    );
  }
}
