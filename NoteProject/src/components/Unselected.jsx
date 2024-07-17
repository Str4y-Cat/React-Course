import Button from "./Button"

export default function Unselected({updatePage}){
    return (
        <>
            <h1 className="w-fit">No Project Selected</h1>
            <p className="w-fit">Select a project or get started with a new one</p>
            <Button onClick={()=>updatePage("newProject")}>Create new Project</Button>
        
        </>
    )
}