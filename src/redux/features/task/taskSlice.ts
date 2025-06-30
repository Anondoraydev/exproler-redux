import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";


interface InitialState{
    tasks:ITask[];
    filter:"all" | "high"| "medium"|"low";
}

const initialState:InitialState={
    tasks:[ 
    ],
    filter:"all",
}

const taskSlice = createSlice({
name:'task',
initialState,
reducers:{
    addTask:(state,action: PayloadAction<ITask>)=>{
        const id ="54f476544658"
        const taskData={
            ...action.payload,
            id,
        };


        state.tasks.push(taskData)
    },
},
})

export const selecetTasks =(state: RootState)=>{
    return state.todo.tasks
}
export const selecetFilter =(state: RootState)=>{
    return state.todo.filter
}

export const {addTask}=taskSlice.actions

export default taskSlice.reducer