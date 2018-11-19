import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
	return (
		<div className="App">
			<h1>Hello CodeSandbox</h1>
			<h2>Start editing to see some magic happen!</h2>
		</div>
	);
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

//////////////////////////////////////////////////
import { createStore } from "redux";
//action_type
export const ADD_TODO = "ADD_TODO";
export const ADD_TODO_2 = "ADD_TODO_2";
//reducer
function todos(state, action) {
	switch (action.type) {
		case ADD_TODO:
			return Object.assign({}, state, {
				visibilityFilter: action.filter
			});
		case ADD_TODO_2:
			return Object.assign({}, state, {
				add: action.add_content,
				edit: action.edit_content
			});
		default:
			return state;
	}
}
//store
const store = createStore(todos, ["a", "b"]); //['a','b]:init state

//aciton_creater
export function addTodo(text) {
	return { type: ADD_TODO, filter: text };
}
export function addTodo2(add_content, edit_content) {
	return { type: ADD_TODO_2, add_content, edit_content };
}

//dispatch and getState
store.dispatch(addTodo("Read the docs"));
store.dispatch(addTodo2("add nè", "edit nè"));
console.log(store.getState());
//sub : theo dõi thay đổi, cập nhật
