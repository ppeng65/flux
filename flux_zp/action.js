export default {
	addItems: function(value) {
		return {
			type: "ADD_ITEM",
			text: value
		}	
	},
	delItems: function(index) {
		return {
			type: "DEL_ITEM",
			index: index
		}
	}
}