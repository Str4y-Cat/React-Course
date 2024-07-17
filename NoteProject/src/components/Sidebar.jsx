import { lightingContext } from "three/examples/jsm/nodes/Nodes.js"
import Button from "./Button"

export default function Sidebar({projects,updatePage}){
    let projectTitles;
    if(projects){    
        projectTitles=projects.map((project,i)=>
        {
            return (
                <li key={i}>

                    <button onClick={()=>updatePage("tasks",i)}>{project.title}</button>
                </li>
            )
        }
        )
    }
    

    return (
        <div id="sidebar" className="bg-gray-900 w-3/12 h-full text-slate-100 mt-10 p-5 rounded-tr-lg">
            <h1>Your Projects</h1>
            <Button onClick={()=>updatePage("newProject")}>Add Projects</Button>
            {projects.length>0 && <ol>{projectTitles}</ol>}
            
            <Button onClick={()=>updatePage("home")}>Home</Button>

        </div>
    )
}