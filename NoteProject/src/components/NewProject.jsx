
export default function NewProject({updatePage,addProject}){
    function handleSubmit(event){
        event.preventDefault();

        const formData = new FormData(event.target);
        const inputTitle = formData.get('title');
        const inputDescription = formData.get('description');
        const inputDate = formData.get('date');
        // console.log(formData)
        // console.log(inputTitle)
        // console.log(inputDescription)
        // console.log(inputDate)
        const tempObject=
        {
            title:inputTitle,
            description:inputDescription,
            date:inputDate,
            tasks:[]
        }
        addProject(tempObject)
        updatePage('home')
    }

    return (
        <>
        <p>Hello world, this is the new project</p>
        
        <form onSubmit={handleSubmit} className="flex flex-col w-8/12">
            <div className="flex justify-end">
                <button onClick={()=>{updatePage('home')}}>cancel</button>
                <button type="submit" className="bg-zinc-800 hover:bg-zinc-500 text-slate-100 rounded-md my-3 px-3 py-2">Save</button>
            </div>
            <div className="flex flex-col mb-3 ">
                <label>Title</label>
                <input name="title" required></input>
            </div>
            

            <div className="flex flex-col mb-3">
                <label>Description</label>
                <input name='description' type="text" required></input>
            </div>
            

            <div className="flex flex-col mb-3" >
                <label>Due Date</label>
                <input name='date' type="date" required></input>
            </div>

        </form>
        
        
        </>
    )
}