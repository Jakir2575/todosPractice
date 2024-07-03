import { createSlice } from "@reduxjs/toolkit";




export const todoSlice = createSlice({
    name: "todos",
    initialState:[],
    reducers: {
        addTodo: (state, action)=>{
            state.push(action.payload)
        },
        deleteTodo: (state, action)=>{
            return state.filter(todo=> todo.id !== action.payload)
        },

        editTodos: (state, action)=>{
            const todo = state.find(todo => todo.id == action.payload.id)
            if (todo) {
                todo.text = action.payload.text
            }
        }
    }
})
export const{addTodo, deleteTodo, editTodos} = todoSlice.actions
// export const selectTodos = state=>state.todos.list
export default todoSlice.reducer



