import Unselected from "./Unselected"
import NewProject from "./NewProject"
import TaskView from "./TaskView"

export default function Mainbar({toShow='home', updatePage, addProject,data,addTask, removeTask}){
    return (
        <div id="Mainbar" className="flex w-full h-full flex-col items-center  justify-center bg-green-600 ">
            {toShow.name=='home' && <Unselected updatePage={updatePage}/>}
            {toShow.name=='newProject' && <NewProject updatePage={updatePage} addProject={addProject}/>}
            {toShow.name=='tasks' && <TaskView data={data} current={toShow} removeTask={removeTask} addTask={addTask}/>}

        </div>
    )
}