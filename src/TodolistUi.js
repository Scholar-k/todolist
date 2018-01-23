import React from 'react'

export default (props) => {
	const { inputValue, list, handleInputChange, handleAddClick, handleDelete } = props
	return (
		<div>
	        <input 
	          value={inputValue} 
	          type="text" 
	          onChange={handleInputChange}/>
	        <button onClick={handleAddClick}>提交</button>
	        <ul>
	          {
	            list.map((value, index) => {
	              return (
	                  <li key={index}>
	                    {value}
	                    <span data-index={index} onClick={handleDelete}>delete</span>
	                  </li>
	                )
	            })
	          }
	        </ul>
	    </div>
	)
}