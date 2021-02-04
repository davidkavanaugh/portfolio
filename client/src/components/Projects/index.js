import React from "react";
import { Paper, Typography, Hidden, Button } from "@material-ui/core";
import ScrollAnimation from "react-animate-on-scroll";
import DungeonMuttsImg from "../../images/dungeon_mutts.jpg";
import FarmStandImg from "../../images/farmstand.jpg";

import "./Projects.scss";

export default class Projects extends React.Component {
  projects = [
    {
      name: "Dungeon Mutts",
      image: DungeonMuttsImg,
      url: "http://18.144.164.70/",
      code: "https://github.com/davidkavanaugh/DungeonMutts",
      description: (
        <p>
          Multiplayer turn-based rpg dungeon crawler built with a React client
          and an ASP.NET backend API.
        </p>
      ),
    },
    {
      name: "FarmStand",
      image: FarmStandImg,
      url: "http://54.219.171.48/",
      code: "https://github.com/davidkavanaugh/farmstand",
      description: <p>E-Commerce Django app with Stripe payment API.</p>,
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
