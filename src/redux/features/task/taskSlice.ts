import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";


interface InitialState{
    tasks:ITask[];
    filter:"all" | "high"| "medium"|"low";
}

const initialState:InitialState={
    tasks:[
        {
        id:"adddadad",
        title:"Initialize frontend",
        desceiption:"create home page and routing",
        dueDate:"2025-11",
        isCompleted: false,
        priority:"High",
        },
        {
        id:"adddadad",
        title:"Init github repo",
        desceiption:"create stage branch",
        dueDate:"2025-11",
        isCompleted: false,
        priority:"Medium",
        }
    ],
    filter:"all",
}

const taskSlice = createSlice({
name:'task',
initialState,
reducers:{},
})

export const selecetTasks =(state: RootState)=>{
    return state.todo.tasks
}
export const selecetFilter =(state: RootState)=>{
    return state.todo.filter
}

export default taskSlice.reducer