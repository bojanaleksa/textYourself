import React from "react";

import {List, ListItem} from 'material-ui/List';

const ChooseConverserView = props => <List>
	{props.egos.map( (ego, key) => 
		<ListItem key={key} primaryText={ego.name} onClick={props.choose.bind(this, ego.id)} />
	)}
</List>;

export default ChooseConverserView;
