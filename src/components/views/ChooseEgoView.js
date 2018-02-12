import React from "react";

import {List, ListItem} from 'material-ui/List';

const ChooseEgoView = props => <List>
	{props.egos.map( (ego, key) => 
		<ListItem key={key} primaryText={ego.name} onClick={props.choose.bind(this, ego.id)} />
	)}
</List>;

export default ChooseEgoView;
