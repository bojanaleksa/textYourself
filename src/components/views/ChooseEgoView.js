import React from "react";

import {List, ListItem} from 'material-ui/List';

import CreateEgoForm from '../../containers/CreateEgo';

const ChooseEgoView = props => <div>
	<List>
		{props.egos.map( (ego, key) => 
			<ListItem key={key} primaryText={ego.name} onClick={props.choose.bind(this, ego.id)} />
		)}
	</List>
	<CreateEgoForm />
</div>;

export default ChooseEgoView;
