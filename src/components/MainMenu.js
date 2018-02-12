import React from "react";

import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';

import {Link} from 'react-router';

const MainMenu = props => <Toolbar>
    <ToolbarGroup firstChild={true}>
    	<ToolbarTitle text="Alter Ego Messaging System" />
    </ToolbarGroup>
    <ToolbarGroup>
    	<Link to="egos"><RaisedButton label="Choose Ego" primary={props.location==='egos'} /></Link>
    	<Link to="converser"><RaisedButton disabled={!props.hasEgo} label="Choose Conversation" primary={props.location==='converser'} /></Link>
    	<Link to="newego"><RaisedButton label="Make new ego" primary={props.location==='newego'} /></Link>
    </ToolbarGroup>
</Toolbar>;

export default MainMenu;