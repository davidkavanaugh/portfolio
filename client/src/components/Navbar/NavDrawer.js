import React from "react";
import { ClickAwayListener, IconButton } from "@material-ui/core";
import Backdrop from '@material-ui/core/Backdrop';
import MenuIcon from "@material-ui/icons/Menu";
import Logo from '../../images/logo.png'
import CloseIcon from '@material-ui/icons/Close';
import { Link } from 'react-scroll'
import './Navbar.scss'

class NavDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      open: false
    }
  }

  handleClose = () => {
    if (this.state.open) {
      const menuBtn = document.getElementById("menu-btn");
      menuBtn.classList.add("spin");
      setTimeout(() => {
        menuBtn.classList.remove("spin")
        this.setState({
          open: false
        })
      }, 100)
    }
  };
  handleToggle = () => {
    const menuBtn = document.getElementById("menu-btn");
    menuBtn.classList.add("spin");
    setTimeout(() => {
      menuBtn.classList.remove("spin")
      this.setState({
        open: !this.state.open
      })
    }, 100)
  };
  
  render() {
  return (
    <div id="drawer">
      <React.Fragment>
          <img 
              src={Logo} 
              alt="logo" 
              onClick={() => window.scrollTo({
                  top: 0,
                  behavior: 'smooth'
              })}
          />
          <ClickAwayListener onClickAway={this.handleClose}>
          <IconButton
            color="inherit"
            aria-label="menu"
            style={{marginRight: '10px'}}
            onClick={this.handleToggle}
          >
            {this.state.open ? <CloseIcon id="menu-btn" /> : <MenuIcon id="menu-btn" />}
          </IconButton>
          </ClickAwayListener>
          <Backdrop open={this.state.open} onClick={this.handleClose}>
            <div id="drawer-links">
              {Object.entries(this.props.navLinks).map(([key, value]) => {
                  return (
                  <Link 
                      className="drawer-link"
                      key={key}
                      activeClass="active" 
                      to={value.url}
                      spy={true}
                      smooth={true}
                      hashSpy={true}
                      duration={500}
                      isDynamic={true}
                      onSetActive={() => console.log(key)}
                      ignoreCancelEvents={false}
                  >
                      {key}
                  </Link>
                  )
              })}
              </div>
          </Backdrop>
        </React.Fragment>
    </div>
  );
}
}

export default NavDrawer;