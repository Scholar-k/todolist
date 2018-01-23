import { EventEmitter } from 'events'

const store = Object.assign({}, EventEmitter.prototype, {
	state: {
		inputValue: '',
		list: []
	},

	getState() {
		return this.state
	},

	changeInput(value) {
		this.state.inputValue = value
		this.emit('change')
	},

	addItem() {
		this.state = {
			list: [...this.state.list, this.state.inputValue],
			inputValue: ''
		}
		this.emit('change')
	},

	deleteItem(index) {
		this.state.list.splice(index, 1)
		this.emit('change')
	}
})

export default store