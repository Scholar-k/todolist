import { Dispatcher } from 'flux'
import store from './store'
import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM } from './actionTypes'

const dispatcher = new Dispatcher();

dispatcher.register((action) => {
	if (action.type === CHANGE_INPUT) {
		store.changeInput(action.value)
	}else if(action.type === ADD_ITEM) {
		store.addItem()
	}else if(action.type === DELETE_ITEM) {
		store.deleteItem(action.index)
	}
})

export default dispatcher