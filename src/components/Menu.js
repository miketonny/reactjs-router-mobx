import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AccountCircle from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

@inject('rootStore')
@observer
class Navbar extends Component {
  constructor(props) {
    super(props);
    const { rootStore, history } = this.props;
    this.ui = rootStore.ui;
    this.history = history;
  }

    handleClose = () => {
        this.ui.closeMenu();
    }

    handleOpen = (event) => {
        this.ui.openMenu(event.currentTarget);
    }

    handleSignOut = () => {
      this.ui.closeMenu();
      // sign user out and clear user from storage.
      this.ui.clearUser();
      this.history.push('/');
    }

    render() {
        return (
          <AppBar position="static" color="default">
            <Toolbar>
              <img width="200px" height="50px" src="" alt="logo" />
              <Link to="/teamsummary">
                <Button color="inherit">Team Summary</Button>
              </Link>
              <Link to="/wellness">
                <Button color="inherit">Wellness/RPE</Button>
              </Link>
              <Link to="/trainingload">
                <Button color="inherit">Training Load</Button>
              </Link>
              <div style={{ flex: 1 }} />
              <div>
                <IconButton
                  aria-owns={this.ui.menuAnchorEl ? 'menu-appbar' : null}
                  aria-haspopup="true"
                  onClick={this.handleOpen}
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={this.ui.menuAnchorEl}
                  anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                  transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                  open={Boolean(this.ui.menuAnchorEl)}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                  <MenuItem onClick={this.handleClose}>My account</MenuItem>
                  <MenuItem onClick={this.handleSignOut}>Sign out</MenuItem>
                </Menu>
              </div>
            </Toolbar>
          </AppBar>
        );
    }
}

// with mobx inject, base component is wrapped with store injected, use wrappedcomp
Navbar.wrappedComponent.propTypes = {
  rootStore: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

export default withRouter(Navbar);
