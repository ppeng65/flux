import EventEmitter from 'events';

var store = Object.assign({}, EventEmitter.prototype, {
	items:[1,2,3],
	getItems: function() {
		return this.items;
	},
	addItem: function(value){
		this.items.push(value);
	},
	delItem: function(index) {
		this.items.splice(index, 1);
	},
	emitChange: function() {
		this.emit("change");
	},
	addChangeFn: function(fn) {
		this.on("change", fn)
	}
})

export default store;