import {useRef} from 'react'

export default function TaskView({data,current, addTask, removeTask, deleteProject}){
    const newTask= useRef()
    const selected= data[current.index]
    // console.log(selected)
    
    
        const taskJsx = selected.tasks.map(task=>
            {
                return (<li className="flex justify-between">
                    <p>{task}</p>
                    <button onClick={()=>{removeTask(task,selected.title)}}>clear</button>
                </li>)
            })
    
    
    return (
        <section className="w-8/12 flex flex-col gap-2">
            <div className="flex flex-col gap-1">
                <h1 className="text-4xl">{selected.title}</h1>
                <p>{selected.date}</p>
                <p>{selected.description}</p>
            </div>

            <div className="">
                <h2>Tasks</h2>
                <input type="text" ref={newTask}/>
                <button onClick={()=>{addTask(newTask.current.value,selected.title)}}>Add Task</button>
                {taskJsx && <ol>
                    {taskJsx}
                </ol>}
            </div>
        

        {/* <p>Hello world, this is the {selected.title} task View</p> */}

        </section>
        
    )
}