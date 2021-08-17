import React, { useState } from 'react'

interface TodoFormProps {
	onAdd(title: string): void
}

export const TodoForm: React.FC<TodoFormProps> = (props) => {
	const [title, setTitle] = useState<string>('');

	const changeHandler = (ev: React.ChangeEvent<HTMLInputElement>): void => {
		setTitle(ev.target.value)
	}

	const keyPressHandler = (ev: React.KeyboardEvent): void => {
     if(ev.key === 'Enter') {
		     props.onAdd(title);
		     setTitle('')
     }
	}

  return (
    <div className="input-field mt2">
    	<input 
    	  onChange={changeHandler}
    	  type="text" 
    	  value={title} 
    	  id="title" 
    	  placeholder="Inter your task here..." 
    	  onKeyPress={keyPressHandler}
    	/>
    	<label htmlFor="title" className="active">Add a task</label>
    </div>
  )
}
