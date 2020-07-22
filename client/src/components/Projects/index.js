import React from 'react';
import { Paper, Typography, Hidden, Button, MobileStepper, Dialog } from '@material-ui/core';
import ScrollAnimation from 'react-animate-on-scroll';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import Img1 from '../../images/project1.jpg';
import Img2 from '../../images/project2.jpg';
import Img3 from '../../images/project3.jpg';
import Img4 from '../../images/project4.jpg';
import Img5 from '../../images/project5.jpg';
import Img6 from '../../images/project6.jpg';
import registration1 from '../../images/registration1.png';
import registration2 from '../../images/registration2.png';
import formValidation from '../../images/formValidation.png';
import auth0Repository from '../../images/auth0Repository.png';
import companyRepository from '../../images/companyRepository.png';
import userModel from '../../images/userModel.png';
import companyModel from '../../images/companyModel.png';
import errors from '../../images/errors.png';
import unitTesting from '../../images/unitTesting.png';

import './Projects.scss';

export default class Projects extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            activeStep: 0,
            open: false
        }
    }
    slideshowImages = [
        {
            name: "Registration Route",
            image: registration1,
            description: "Checking for existing companies before creating an auth0 User."

        },
        {
            name: "Registration continued",
            image: registration2,
            description: "Create company."

        },
        {
            name: "Form Validation",
            image: formValidation,
            description: "Joi validation"

        },
        {
            name: "Auth0 Repository",
            image: auth0Repository,
            description: "submit form data to Auth0 and return an Auth0 User object; catch errors and throw custom error classes."

        },
        {
            name: "Company Repository",
            image: companyRepository,
            description: "create company after completing Auth0 signUp and User document creation."
        },
        {
            name: "User Model",
            image: userModel,
            description: "User model created with Typegoose."
        },
        {
            name: "Company Model",
            image: companyModel,
            description: "Create Company Document with Typegoose. users array references User _id."
        },
        {
            name: "Errors",
            image: errors,
            description: "extending Error"
        },
        {
            name: "Unit Testing",
            image: unitTesting,
            description: "Testing registration route with mocha, chai, and Sinon."
        },
    ]
    projects = [
        {
            name: 'Call Center',
            image: Img1,
            url: 'https://mern-stack-call-center.herokuapp.com',
            code: 'https://github.com/davidkavanaugh/Call-Center',
            prevProject: 'previous project',
            description: <p>Customer Relationship Manager based on an <a href='https://github.com/davidkavanaugh/call-notes'>old project</a>.</p>
        },
        {
            name: 'Company Directory',
            image: Img2,
            url: 'https://mern-stack-company-directory.herokuapp.com',
            code: 'https://github.com/davidkavanaugh/Company-Directory',
            description: <p>Sortable data table <br /><br />username: admin<br />password: Password123</p>
        },
        {
            name: 'React Calculator',
            image: Img3,
            url: 'https://codepen.io/davidkavanaugh/full/eYmXvQx',
            code: 'https://codepen.io/davidkavanaugh/pen/eYmXvQx',
            description: <p>Add, subtract, multiply, divide...</p>
        },
        {
            name: 'React Drum Machine',
            image: Img4,
            url: 'https://codepen.io/davidkavanaugh/full/PoYLoMj',
            code: 'https://codepen.io/davidkavanaugh/pen/PoYLoMj',
            description: <p>Turn up.<br />Rock out.</p>
        },
        {
            name: 'Markdown Previewer',
            image: Img5,
            url: 'https://codepen.io/davidkavanaugh/full/BaBMQgz',
            code: 'https://codepen.io/davidkavanaugh/pen/BaBMQgz',
            description: <p>Editor build in React.</p>
        },
        {
            name: 'React D3 Bar Chart',
            image: Img6,
            url: 'https://codepen.io/davidkavanaugh/full/abOmKwa',
            code: 'https://codepen.io/davidkavanaugh/pen/abOmKwa',
            description: <p>Data visualization</p>
        }
    ];

    maxSteps = this.slideshowImages.length;

    handleNext = () => {
        let step = this.state.activeStep;
        this.setState({
            ...this.state,
            activeStep: step + 1
        })
    };

    handleBack = () => {
        let step = this.state.activeStep;
        this.setState({
            ...this.state,
            activeStep: step - 1
        })
    };

    handleStepChange = (step) => {
        this.setState({
            activeStep: step
        })
    };

    handleClickOpen = () => {
        this.setState({
            open: true
        })
    };

    handleClose = () => {
        this.setState({
            open: false
        })
    }

    render() {
        let activeStep = this.state.activeStep
        return (
            <section id='projects' ref={(section) => { this.Projects = section; }}>
                <ScrollAnimation animateIn="fadeInUp" duration={0.3}>
                    <Paper elevation={0} square>
                        <Typography component="h3" variant="h3" style={{ textAlign: 'center', paddingTop: '50px', marginBottom: '25px' }}>
                            Recent Work
                        </Typography>
                        <Typography component="h5" variant="h5" style={{ textAlign: 'center', marginBottom: '15px' }}>
                            Code samples from my current projects at bidChuck
                        </Typography>
                        <Paper square elevation={0} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <div className="slideshow-img-container">
                                <img className="slideshow-img" src={this.slideshowImages[activeStep].image} alt={this.slideshowImages[activeStep].name} />
                                <div className="img-overlay" onClick={this.handleClickOpen}>
                                    <ZoomInIcon className="zoom-in" fontSize="large" />
                                </div>
                            </div>
                            <MobileStepper
                                className="stepper"
                                steps={this.maxSteps}
                                position="static"
                                variant="text"
                                activeStep={this.state.activeStep}
                                nextButton={
                                    <Button size="small" onClick={this.handleNext} disabled={this.state.activeStep === this.maxSteps - 1}>
                                        Next
                                <KeyboardArrowRight />
                                    </Button>
                                }
                                backButton={
                                    <Button size="small" onClick={this.handleBack} disabled={this.state.activeStep === 0}>
                                        <KeyboardArrowLeft />
                                Back
                            </Button>
                                }
                            />
                            <p className="description"><i>{this.slideshowImages[activeStep].description}</i></p>
                        </Paper>
                        <Typography component="h3" variant="h3" style={{ textAlign: 'center', paddingTop: '50px', marginBottom: '25px' }}>
                            Older Projects
                        </Typography>
                        <Hidden smDown>
                            <div id="paper">
                                {this.projects.map((project, key) => {
                                    return (
                                        <React.Fragment key={key}>
                                            <ScrollAnimation animateIn="zoomIn" duration={0.5}>
                                                <div className="card">
                                                    <div className="overlay">
                                                        <Typography component="h6" variant="h6" style={{ color: 'white' }}>
                                                            {project.name}
                                                        </Typography>
                                                        {project.description}
                                                        <div className="buttons">
                                                            <a href={project.url} alt={`to ${project.name} url`}>
                                                                <Button color="primary" variant="contained">
                                                                    app
                                                            </Button>
                                                            </a>
                                                            <a href={project.code} alt={`view ${project.name} code`}>
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
                                    )
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
                                                            <Typography component="h6" variant="h6" style={{ color: 'white' }}>
                                                                {project.name}
                                                            </Typography>
                                                            {project.description}
                                                            <div className="buttons">
                                                                <a href={project.url} alt={`to ${project.name} url`}>
                                                                    <Button color="primary" variant="contained">
                                                                        app
                                                                </Button>
                                                                </a>
                                                                <a href={project.code} alt={`view ${project.name} code`}>
                                                                    <Button color="primary" variant="contained">
                                                                        code
                                                                </Button>
                                                                </a>
                                                            </div>>
                                                    </div>
                                                    </ScrollAnimation>
                                                    <img src={project.image} alt={project.name} />
                                                </div>
                                            </ScrollAnimation>
                                        </React.Fragment>
                                    )
                                })}
                            </div>
                        </Hidden>
                    </Paper>
                </ScrollAnimation>
                <Dialog
                    maxWidth="lg"
                    open={this.state.open}
                    onClose={this.handleClose}
                >
                    <img className="img-fullsize" src={this.slideshowImages[activeStep].image} alt={this.slideshowImages[activeStep].name} />
                </Dialog>
            </section>
        );
    }
}