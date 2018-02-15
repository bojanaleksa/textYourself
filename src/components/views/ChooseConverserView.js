import React from "react";

import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

class ChooseConverserView extends React.Component {
	
	componentWillMount() {
		if (this.props.noEgo) this.props.buildFirstEgo();
	}

	render() {
		let {props} = this;
		return <div>Choose conversation:
			<List>
				{props.egos.map( (ego, key) => 
					<ListItem key={key} primaryText={ego.name} onClick={props.choose.bind(this, ego.id)} 
					rightAvatar={<Avatar backgroundColor={ego.messageCount ? 'red' : ''}>{ego.messageCount ? ego.messageCount : ego.name.slice(0, 2)}</Avatar>}
					/>
				)}
			</List>
		</div>;
	}
}

export default ChooseConverserView;
