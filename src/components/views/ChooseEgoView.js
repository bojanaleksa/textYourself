import React from "react";

import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

import CreateEgoForm from '../../containers/CreateEgo';

const ChooseEgoView = props => <div>
	<List>
		{props.egos.map( (ego, key) => 
			<ListItem key={key} primaryText={ego.name} onClick={props.choose.bind(this, ego.id)} 
				leftAvatar={<Avatar>{ego.name.slice(0, 2)}</Avatar>}
			/>
		)}
	</List>
	<CreateEgoForm />
</div>;

export default ChooseEgoView;
