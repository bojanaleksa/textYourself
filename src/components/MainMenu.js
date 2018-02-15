import React from "react";

import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';

import {Link} from 'react-router';

const MainMenu = props => <div className="main-menu">
    <h2>AEMS</h2>
    <IconMenu
        iconButtonElement={
            <IconButton touch={true}>
            	<NavigationExpandMoreIcon />
            </IconButton>
        }
    >
        <MenuItem><Link to="/ego">Change ego</Link></MenuItem>
    </IconMenu>
</div>;

export default MainMenu;