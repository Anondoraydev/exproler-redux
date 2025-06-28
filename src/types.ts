 
export interface ITask{
        id: string
        title:string
        desceiption:string
        dueDate: string
        isCompleted: boolean
        priority:"High" | "Medium"| "low"
}