import React from 'react';
import { connect } from "react-redux";
import { sendEmail } from '../../actions/contact.actions';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, TextField, Container, Typography } from '@material-ui/core'
import ScrollAnimation from 'react-animate-on-scroll';

import './Contact.scss'

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            alert: false,
            errors: {},
            open: false
        }
    }
    onChange = (e) => {
        this.setState({
            ...this.state, [e.target.name]: e.target.value, alert: false, errors: {}
        })
    }

    handleClose = () => {
        this.setState({
            open: false
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const formData = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        }
        this.props.sendEmail(formData);
        setTimeout(() => {
            this.setState({
                name: '',
                email: '',
                message: '',
                alert: '',
                errors: {},
                open: true
            });

        }, 1000)
    }

    render() {
        return(
            <section id='contact' ref={(section) => { this.Contact = section; }}>
                <ScrollAnimation animateIn="fadeIn" style={{width: '100%'}}>
                <Container maxWidth="sm">
                    <form onSubmit={this.onSubmit}>
                        <Typography component="h3" variant="h3">Email me.</Typography>
                        <TextField
                            label="Name"
                            name="name"
                            value={this.state.name} 
                            onChange={this.onChange}
                            variant="outlined"
                            required
                        />
                        <TextField
                            label="Email"
                            name="email"
                            type="email"
                            variant="outlined"
                            value={this.state.email}
                            onChange={this.onChange}
                            required
                        />
                        <TextField
                            label="Message"
                            name="message"
                            value={this.state.message} 
                            onChange={this.onChange}
                            variant="outlined"
                            multiline
                            rows={7}
                            required
                        />
                        <Button 
                            type="submit"
                            variant="contained"
                            disableElevation
                            color="secondary"
                        >
                            Submit
                        </Button>
                    </form>
                </Container>
                </ScrollAnimation>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"Thank you!"}</DialogTitle>
                    <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Your message has been sent.
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
            </section>
        );
    }
}
const mapStateToProps = state => ({
    contact: state.contact
});

const mapDispatchToProps = {
    sendEmail
}
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Contact)