import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AccountCircle from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';

@inject('rootStore')
@observer
class Navbar extends Component {
    handleClose = () => {
        const { rootStore } = this.props;
        rootStore.ui.closeMenu();
    }

    handleOpen = (event) => {
        const { rootStore } = this.props;
        rootStore.ui.openMenu(event.currentTarget);
    }

    render() {
        const { rootStore } = this.props;
        return (
          <AppBar position="static" color="default">
            <Toolbar>
              <img width="200px" height="50px" src="" />
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
                  aria-owns={rootStore.ui.menuAnchorEl ? 'menu-appbar' : null}
                  aria-haspopup="true"
                  onClick={this.handleOpen}
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={rootStore.ui.menuAnchorEl}
                  anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                  transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                  open={Boolean(rootStore.ui.menuAnchorEl)}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                  <MenuItem onClick={this.handleClose}>My account</MenuItem>
                </Menu>
              </div>
            </Toolbar>
          </AppBar>
        );
    }
}

export default Navbar;
