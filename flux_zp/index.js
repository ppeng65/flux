import React from 'react';
import ReactDOM from 'react-dom';
import Todos from './todos.js';
import Store from './store.js';
import ActionCeate from './action.js';
import Dispatcher from './dispatcher.js';

class TodoController extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			items: Store.getItems()
		}
		Store.addChangeFn(this.handleChangeFn.bind(this));
	}

	handleChangeFn() {
		this.setState({
			items: Store.getItems()
		})
	}

	handleAddItems(value) {
		var action = ActionCeate.addItems(value);
		Dispatcher.dispatch(action);
	}

	handleDelItem(index) {
		var action = ActionCeate.delItems(index)
		Dispatcher.dispatch(action);
	}

	render() {
		return (
			<Todos items={this.state.items} handleAddItems={this.handleAddItems.bind(this)} handleDelItem={this.handleDelItem.bind(this)}/>
		)
	}
}

ReactDOM.render(
  <TodoController />, document.querySelector('#root')
);