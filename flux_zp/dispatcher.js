import {Dispatcher} from 'flux';
import Store from './store.js';

var dispatcherTodos = new Dispatcher();

dispatcherTodos.register(function(action){
	if( action.type == "ADD_ITEM" ){
		Store.addItem( action.text );
		Store.emitChange();
	}
	if( action.type == "DEL_ITEM" ) {
		Store.delItem( action.index );
		Store.emitChange();
	}
})

export default dispatcherTodos;