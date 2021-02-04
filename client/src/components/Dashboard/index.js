import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/auth.actions";
import { getMessages } from "../../actions/contact.actions";
import { withRouter } from "react-router-dom";
import { Button } from "@material-ui/core";

class Dashboard extends React.Component {
  componentDidMount = async () => {
    this.props.getMessages();
  };
  render() {
    return (
      <div id="dashboard">
        <Button onClick={this.props.logoutUser}>Logout</Button>
        <h3>Messages</h3>
        <ul>
          {this.props.contact.messages.map((message, key) => {
            return (
              <React.Fragment key={key}>
                <li>
                  From: <b>{`${message.name}<${message.email}>`}</b>
                  <br />
                  Date: {message.date}
                  <br />
                  Message: {message.message}
                </li>
                <br />
              </React.Fragment>
            );
          })}
        </ul>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  getMessages: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  contact: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  contact: state.contact,
});
export default withRouter(
  connect(mapStateToProps, { logoutUser, getMessages })(Dashboard)
);
