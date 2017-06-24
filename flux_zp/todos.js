import React from 'react';

export default class Todos extends React.Component {

	handleBtnClick() {
		var value = this.refs.input.value;
		this.props.handleAddItems(value);
		this.refs.input.value="";
	}

	handleDelBtn(index) {
		this.props.handleDelItem(index);
	}

	render() {
		return (
			<div>
				<input type="text" ref="input"/>
				<button onClick={this.handleBtnClick.bind(this)}>新增</button>
				{
					this.props.items.map((value, index)=> {
						return <div key={index + '_items'}>{value}<button onClick = {this.handleDelBtn.bind(this, index)}>删除</button></div>
					})
				}
			</div>
		)
	}
}