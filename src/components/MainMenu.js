import React from "react";

import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';

import {Link} from 'react-router';

const MainMenu = props => <Toolbar>
    <ToolbarGroup firstChild={true}>
    	<ToolbarTitle text="Alter Ego Messaging System" />
    </ToolbarGroup>
    <ToolbarGroup>
    	<Link to="/"><RaisedButton label="Choose Ego" primary={props.location===''} /></Link>
    	<Link to="/converser"><RaisedButton disabled={!props.hasEgo} label="Choose Conversation" primary={props.location==='converser'} /></Link>
    </ToolbarGroup>
</Toolbar>;

export default MainMenu;