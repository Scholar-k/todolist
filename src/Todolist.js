import React, { Component } from 'react'
import store from './store'
import dispatcher from './dispatcher'
import { getInputChangeAction, getAddItemAction, getDeleteItemAction } from './actionCreator'
import TodoListUi from './TodolistUi'

export default class Todolist extends Component {

  constructor(props) {
    super(props)
    this.state = store.getState()
    store.on('change', this.handleStoreChange.bind(this))
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleAddClick = this.handleAddClick.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  render() {
    return (
      <TodoListUi
        inputValue={this.state.inputValue}
        list={this.state.list}
        handleInputChange={this.handleInputChange}
        handleAddClick={this.handleAddClick}
        handleDelete={this.handleDelete}
      ></TodoListUi>
    )
  }

  handleInputChange(e) {
    const action = getInputChangeAction(e.target.value)
    dispatcher.dispatch(action)
  }

  handleStoreChange() {
    this.setState(store.getState())
  }

  handleAddClick() {
    const action = getAddItemAction()
    dispatcher.dispatch(action)
  }

  handleDelete(e) {
    const index = e.target.getAttribute('data-index')
    const action = getDeleteItemAction(index)
    dispatcher.dispatch(action)
  }

}